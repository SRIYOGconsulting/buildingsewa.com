import Calendar from "@/components/Calendar";
import Ribbon from "@/components/Ribbon";

const companyEvents = [
  {
    id: "company-1",
    date: "2026-09-15",
    title: "Building Sewa Team Meeting",
    description: "Internal company meeting.",
  },
  {
    id: "company-2",
    date: "2026-10-05",
    title: "Building Sewa Project Review",
    description: "Project progress review.",
  },
];

export default function CalendarPage() {
  return (
    <main>
      <Ribbon
        name="Calendar"
        description="View Nepal holidays, festivals, and Building Sewa events."
      />

      <Calendar
        initialCompanyEvents={companyEvents}
      />
    </main>
  );
}