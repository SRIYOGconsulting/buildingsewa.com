import { NextRequest, NextResponse } from "next/server";
import { getNepalHolidays } from "@/lib/holidays";

export async function GET(request: NextRequest) {
  try {
    const yearParam = request.nextUrl.searchParams.get("year");

    const year = yearParam
      ? Number(yearParam)
      : new Date().getFullYear();

    if (!Number.isInteger(year) || year < 2026 || year > 2030) {
      return NextResponse.json(
        {
          error: "Invalid year. Supported years are 2026–2030.",
        },
        { status: 400 }
      );
    }

    const holidays = await getNepalHolidays(year);

    return NextResponse.json({
      year,
      holidays,
    });
  } catch (error) {
    console.error("Nepal holiday API error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Nepal holidays.",
      },
      { status: 500 }
    );
  }
}