export type HolidayEvent = {
  startDate: string;
  endDate: string;
  title: string;
  type: "holiday";
  description?: string;
};

type TallyfyHoliday = {
  date: string;
  name: string;
  local_name?: string;
  type?: string;
  observed_date?: string;
  is_observed_shifted?: boolean;
  description?: string;
};

type TallyfyResponse = {
  country: {
    code: string;
    code3: string;
    name: string;
  };
  year: number;
  holidays: TallyfyHoliday[];
  metadata?: {
    generated_at?: string;
    total_holidays?: number;
    disclaimer?: string;
  };
};

export async function getNepalHolidays(
  year: number
): Promise<HolidayEvent[]> {
  const response = await fetch(
    `https://tallyfy.com/national-holidays/api/NP/${year}.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Nepal holidays for ${year}`
    );
  }

  const data: TallyfyResponse = await response.json();

  return data.holidays.map((holiday) => ({
    startDate: holiday.date,
    endDate: holiday.date,
    title: holiday.name,
    type: "holiday" as const,
    description: holiday.description,
  }));
}