import Calendar from "@/components/Calendar"

export default function CalendarPage() {
  return (
    <main className="flex-1">
      <div className="h-[200px] bg-gray-100 flex flex-col items-center justify-center text-center px-6">
        <span className="text-gray-500">
          Home / <span className="text-teal-700 font-semibold">Calendar</span>
        </span>
        <h1 className="text-4xl font-bold text-teal-800 mt-2">Calendar</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Internship intakes, holidays, and company events at a glance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Calendar />
      </div>
    </main>
  );
}
