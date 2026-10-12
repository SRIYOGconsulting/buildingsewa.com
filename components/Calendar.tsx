"use client";

import { useEffect, useMemo, useState } from "react";
import type { HolidayEvent } from "@/lib/holidays";

type CompanyEvent = {
  id: string;
  date: string;
  title: string;
  description?: string;
};

type CalendarEvent = {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  description?: string;
  type: "holiday" | "company";
};

type CalendarProps = {
  initialCompanyEvents?: CompanyEvent[];
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEK_DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const MIN_YEAR = 2026;
const MAX_YEAR = 2030;

function parseDate(date: string) {
  return new Date(`${date}T00:00:00`);
}

function formatDate(date: string) {
  return parseDate(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(date: string) {
  return parseDate(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function isDateInRange(
  date: string,
  startDate: string,
  endDate: string
) {
  return date >= startDate && date <= endDate;
}

/**
 * Convert API holidays into calendar events.
 *
 * The API gives individual holiday dates.
 * We additionally group:
 *
 * Dashain:
 * Ghatasthapana → Dwadashi
 *
 * Tihar:
 * Kaag Tihar → Bhai Tika
 *
 * The dates are still taken dynamically from the API.
 */
function createHolidayEvents(
  holidays: HolidayEvent[]
): CalendarEvent[] {
  const events: CalendarEvent[] = holidays.map(
    (holiday, index) => ({
      id: `holiday-${holiday.startDate}-${index}`,
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      title: holiday.title,
      description: holiday.description,
      type: "holiday",
    })
  );

  /*
   * Group Dashain dynamically using the API holiday names.
   */
  const dashainStart = events.find(
    (event) => event.title === "Ghatasthapana"
  );

  const dashainEnd = events.find(
    (event) => event.title === "Dwadashi"
  );

  if (dashainStart && dashainEnd) {
    events.push({
      id: `dashain-${dashainStart.startDate}`,
      startDate: dashainStart.startDate,
      endDate: dashainEnd.endDate,
      title: "Dashain",
      description: "Dashain festival period.",
      type: "holiday",
    });
  }

  /*
   * Group Tihar dynamically.
   */
  const tiharEvents = events.filter((event) =>
    event.title.startsWith("Tihar -")
  );

  if (tiharEvents.length > 0) {
    const sortedTihar = [...tiharEvents].sort(
      (a, b) =>
        a.startDate.localeCompare(b.startDate)
    );

    events.push({
      id: `tihar-${sortedTihar[0].startDate}`,
      startDate: sortedTihar[0].startDate,
      endDate:
        sortedTihar[sortedTihar.length - 1].endDate,
      title: "Tihar",
      description: "Tihar festival period.",
      type: "holiday",
    });
  }

  return events;
}

export default function Calendar({
  initialCompanyEvents = [],
}: CalendarProps) {
  const today = new Date();

  const todayString = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(
    2,
    "0"
  )}`;

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const [selectedYear, setSelectedYear] =
    useState(currentYear);

  const [selectedMonth, setSelectedMonth] =
    useState(currentMonth);

  const [selectedDate, setSelectedDate] =
    useState<string | null>(todayString);

  const [holidays, setHolidays] = useState<
    HolidayEvent[]
  >([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(
    null
  );

  /*
   * Fetch holidays whenever the year changes.
   */
  useEffect(() => {
    let cancelled = false;

    async function loadHolidays() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/holidays?year=${selectedYear}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to load Nepal holidays."
          );
        }

        const data = await response.json();

        if (!cancelled) {
          setHolidays(data.holidays ?? []);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setHolidays([]);
          setError(
            "Unable to load Nepal holidays right now."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadHolidays();

    return () => {
      cancelled = true;
    };
  }, [selectedYear]);

  /*
   * Convert Nepal holidays into calendar events.
   */
  const holidayEvents = useMemo(
    () => createHolidayEvents(holidays),
    [holidays]
  );

  /*
   * Convert company events.
   */
  const companyEvents: CalendarEvent[] = useMemo(() => {
    return initialCompanyEvents.map((event) => ({
      id: event.id,
      startDate: event.date,
      endDate: event.date,
      title: event.title,
      description: event.description,
      type: "company",
    }));
  }, [initialCompanyEvents]);

  /*
   * Combine all events.
   */
  const allEvents = useMemo(() => {
    return [...holidayEvents, ...companyEvents];
  }, [holidayEvents, companyEvents]);

  /*
   * Calendar grid.
   */
  const calendarDays = useMemo(() => {
    const firstDay = new Date(
      selectedYear,
      selectedMonth,
      1
    ).getDay();

    const daysInMonth = new Date(
      selectedYear,
      selectedMonth + 1,
      0
    ).getDate();

    const days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, [selectedYear, selectedMonth]);

  /*
   * Move to previous month.
   */
  const previousMonth = () => {
    if (
      selectedMonth === 0 &&
      selectedYear === MIN_YEAR
    ) {
      return;
    }

    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((year) => year - 1);
    } else {
      setSelectedMonth((month) => month - 1);
    }

    setSelectedDate(null);
  };

  /*
   * Move to next month.
   */
  const nextMonth = () => {
    if (
      selectedMonth === 11 &&
      selectedYear === MAX_YEAR
    ) {
      return;
    }

    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((year) => year + 1);
    } else {
      setSelectedMonth((month) => month + 1);
    }

    setSelectedDate(null);
  };

  /*
   * Go back to today.
   */
  const goToToday = () => {
    const now = new Date();

    setSelectedYear(now.getFullYear());
    setSelectedMonth(now.getMonth());

    const dateString = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(
      now.getDate()
    ).padStart(2, "0")}`;

    setSelectedDate(dateString);
  };

  /*
   * Create YYYY-MM-DD.
   */
  const createDateString = (day: number) => {
    const month = String(selectedMonth + 1).padStart(
      2,
      "0"
    );

    const formattedDay = String(day).padStart(2, "0");

    return `${selectedYear}-${month}-${formattedDay}`;
  };

  /*
   * Get events for a specific date.
   */
  const getEventsForDate = (date: string) => {
    return allEvents.filter((event) =>
      isDateInRange(
        date,
        event.startDate,
        event.endDate
      )
    );
  };

  /*
   * Selected date events.
   */
  const selectedDateEvents = selectedDate
    ? getEventsForDate(selectedDate)
    : [];

  /*
   * Holidays belonging to selected month.
   */
  const monthHolidays = useMemo(() => {
    return holidays
      .filter((holiday) => {
        const date = parseDate(holiday.startDate);

        return (
          date.getFullYear() === selectedYear &&
          date.getMonth() === selectedMonth
        );
      })
      .sort((a, b) =>
        a.startDate.localeCompare(b.startDate)
      );
  }, [holidays, selectedYear, selectedMonth]);

  /*
   * Upcoming holidays from today.
   */
  const upcomingHolidays = useMemo(() => {
    return holidays
      .filter(
        (holiday) => holiday.startDate >= todayString
      )
      .sort((a, b) =>
        a.startDate.localeCompare(b.startDate)
      )
      .slice(0, 5);
  }, [holidays, todayString]);

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={previousMonth}
            disabled={
              selectedMonth === 0 &&
              selectedYear === MIN_YEAR
            }
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous month"
          >
            ←
          </button>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 min-w-[220px] text-center">
            {MONTH_NAMES[selectedMonth]} {selectedYear}
          </h2>

          <button
            onClick={nextMonth}
            disabled={
              selectedMonth === 11 &&
              selectedYear === MAX_YEAR
            }
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next month"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goToToday}
            className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition"
          >
            Today
          </button>

          <select
            value={selectedYear}
            onChange={(event) => {
              setSelectedYear(
                Number(event.target.value)
              );
              setSelectedDate(null);
            }}
            className="border rounded-lg px-4 py-2 bg-white"
          >
            {Array.from(
              {
                length:
                  MAX_YEAR - MIN_YEAR + 1,
              },
              (_, index) => MIN_YEAR + index
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mb-6 rounded-lg bg-gray-50 border px-4 py-3 text-gray-600">
          Loading Nepal holidays...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      {/* Calendar */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        {/* Week days */}
        <div className="grid grid-cols-7 border-b">
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className="p-3 text-center font-semibold text-gray-600 text-sm"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${index}`}
                  className="min-h-[120px] border-b border-r bg-gray-50"
                />
              );
            }

            const date = createDateString(day);

            const events = getEventsForDate(date);

            const holidayEventsForDate =
              events.filter(
                (event) => event.type === "holiday"
              );

            const companyEventsForDate =
              events.filter(
                (event) => event.type === "company"
              );

            const isToday = date === todayString;

            return (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`min-h-[120px] border-b border-r p-2 text-left hover:bg-gray-50 transition ${
                  selectedDate === date
                    ? "ring-2 ring-inset ring-teal-600"
                    : ""
                }`}
              >
                {/* Date number */}
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold mb-2 ${
                    isToday
                      ? "bg-teal-600 text-white"
                      : "text-gray-800"
                  }`}
                >
                  {day}
                </div>

                {/* Events */}
                <div className="space-y-1">
                  {holidayEventsForDate
                    .filter(
                      (event) =>
                        event.title !== "Dashain" &&
                        event.title !== "Tihar"
                    )
                    .slice(0, 3)
                    .map((event) => (
                      <div
                        key={event.id}
                        className="text-xs bg-red-50 text-red-700 rounded px-2 py-1 truncate"
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}

                  {holidayEventsForDate.some(
                    (event) =>
                      event.title === "Dashain"
                  ) && (
                    <div className="text-xs bg-orange-50 text-orange-700 rounded px-2 py-1 truncate">
                      Dashain
                    </div>
                  )}

                  {holidayEventsForDate.some(
                    (event) =>
                      event.title === "Tihar"
                  ) && (
                    <div className="text-xs bg-purple-50 text-purple-700 rounded px-2 py-1 truncate">
                      Tihar
                    </div>
                  )}

                  {companyEventsForDate
                    .slice(0, 2)
                    .map((event) => (
                      <div
                        key={event.id}
                        className="text-xs bg-teal-50 text-teal-700 rounded px-2 py-1 truncate"
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected date */}
      {selectedDate && (
        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Events on {formatDate(selectedDate)}
          </h3>

          {selectedDateEvents.length === 0 ? (
            <p className="text-gray-500">
              No holidays or company events on this date.
            </p>
          ) : (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => (
                <div
                  key={event.id}
                  className={`border-l-4 pl-4 ${
                    event.type === "holiday"
                      ? "border-red-500"
                      : "border-teal-600"
                  }`}
                >
                  <h4 className="font-semibold text-gray-800">
                    {event.title}
                  </h4>

                  <p className="text-sm text-gray-500 capitalize">
                    {event.type}
                  </p>

                  {event.startDate !==
                    event.endDate && (
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(
                        event.startDate
                      )}{" "}
                      →{" "}
                      {formatDate(event.endDate)}
                    </p>
                  )}

                  {event.description && (
                    <p className="text-gray-600 mt-1">
                      {event.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Holidays in selected month */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          Nepal Holidays in{" "}
          {MONTH_NAMES[selectedMonth]} {selectedYear}
        </h3>

        {monthHolidays.length === 0 ? (
          <p className="text-gray-500">
            No holidays found for this month.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthHolidays.map((holiday) => (
              <div
                key={`${holiday.startDate}-${holiday.title}`}
                className="border rounded-xl p-5 bg-white shadow-sm"
              >
                <p className="text-sm text-gray-500">
                  {formatShortDate(
                    holiday.startDate
                  )}
                </p>

                <h4 className="font-semibold text-gray-800 mt-1">
                  {holiday.title}
                </h4>

                {holiday.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {holiday.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upcoming holidays */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          Upcoming Nepal Holidays
        </h3>

        {upcomingHolidays.length === 0 ? (
          <p className="text-gray-500">
            No upcoming holidays available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingHolidays.map((holiday) => (
              <div
                key={`${holiday.startDate}-${holiday.title}`}
                className="border rounded-xl p-5 bg-white shadow-sm"
              >
                <p className="text-sm text-gray-500">
                  {formatDate(holiday.startDate)}
                </p>

                <h4 className="font-semibold text-gray-800 mt-1">
                  {holiday.title}
                </h4>

                {holiday.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {holiday.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}