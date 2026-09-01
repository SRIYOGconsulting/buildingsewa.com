"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarEvent = {
  date: string; // "YYYY-MM-DD"
  title: string;
  type: "internship" | "holiday" | "event";
};

const events: CalendarEvent[] = [
  { date: "2026-06-01", title: "Internship Intake Begins (Jun–Aug)", type: "internship" },
  { date: "2026-09-01", title: "Internship Intake Begins (Sep–Nov)", type: "internship" },
  { date: "2026-12-01", title: "Internship Intake Begins (Dec–Feb)", type: "internship" },
  { date: "2027-03-01", title: "Internship Intake Begins (Mar–May)", type: "internship" },
  { date: "2026-01-01", title: "New Year's Day", type: "holiday" },
  { date: "2026-04-14", title: "Nepali New Year", type: "holiday" },
  { date: "2026-10-20", title: "Dashain Holiday", type: "holiday" },
  { date: "2026-08-15", title: "Company Foundation Anniversary", type: "event" },
];

const typeStyles: Record<CalendarEvent["type"], string> = {
  internship: "bg-teal-500",
  holiday: "bg-amber-500",
  event: "bg-purple-500",
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDateKey(year: number, month: number, day: number) {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 31)); // Aug 31, 2026
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const eventsByDate = events.reduce<Record<string, CalendarEvent[]>>((acc, event) => {
    acc[event.date] = acc[event.date] ? [...acc[event.date], event] : [event];
    return acc;
  }, {});

  function goToPrevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  }

  function goToNextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  }

  const paddingDays = Array.from({ length: firstDayOfMonth });
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const selectedEvents = selectedDate ? eventsByDate[selectedDate] ?? [] : [];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPrevMonth}
          aria-label="Previous month"
          className="p-2 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <h2 className="text-xl font-semibold text-white">
          {monthNames[month]} {year}
        </h2>

        <button
          onClick={goToNextMonth}
          aria-label="Next month"
          className="p-2 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Weekday header */}
      <div className="grid grid-cols-7 mb-2">
        {weekdayLabels.map((label) => (
          <div key={label} className="text-center text-xs text-zinc-500 py-2">
            {label}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {paddingDays.map((_, i) => (
          <div key={`pad-${i}`} />
        ))}

        {monthDays.map((day) => {
          const dateKey = formatDateKey(year, month, day);
          const dayEvents = eventsByDate[dateKey] ?? [];
          const isSelected = selectedDate === dateKey;

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(dateKey)}
              className={`aspect-square rounded-md border text-sm flex flex-col items-center justify-center gap-1 transition-colors ${
                isSelected
                  ? "border-teal-500 bg-teal-950"
                  : "border-zinc-800 hover:border-zinc-600"
              }`}
            >
              <span className="text-zinc-200">{day}</span>
              {dayEvents.length > 0 && (
                <div className="flex gap-0.5">
                  {dayEvents.map((event, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${typeStyles[event.type]}`}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-6 text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-500" /> Internship
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" /> Holiday
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" /> Company Event
        </div>
      </div>

      {/* Selected day details */}
      {selectedDate && (
        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900 p-5">
          <h3 className="text-white font-medium mb-3">
            {selectedDate}
          </h3>
          {selectedEvents.length > 0 ? (
            <ul className="space-y-2">
              {selectedEvents.map((event, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className={`w-2 h-2 rounded-full ${typeStyles[event.type]}`} />
                  {event.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-500">No events on this date.</p>
          )}
        </div>
      )}
    </div>
  );
}