import type { ReactNode } from "react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const events: TimelineItem[] = [
  {
    year: "Our Beginning",
    title: "Starting the Journey",
    description:
      "Building Sewa began with a vision to make the construction process more organized, accessible, and convenient for customers.",
    icon: "🏗️",
  },
  {
    year: "Service Growth",
    title: "Expanding Our Services",
    description:
      "Our services continue to grow to support customers across different stages of their construction and building needs.",
    icon: "📐",
  },
  {
    year: "Digital Progress",
    title: "Embracing Technology",
    description:
      "Technology plays an important role in improving communication, accessibility, and the overall customer experience.",
    icon: "💻",
  },
  {
    year: "Growing Network",
    title: "Building Strong Connections",
    description:
      "We continue to strengthen relationships with professionals and partners involved in construction and related services.",
    icon: "🤝",
  },
  {
    year: "Today",
    title: "Building Better Experiences",
    description:
      "Building Sewa continues to focus on providing reliable services and improving the experience of customers throughout their building journey.",
    icon: "🏠",
  },
];

export default function TimelinePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <div className="h-[200px] bg-gray-100 flex flex-col items-center justify-center text-center px-6">
        <span className="text-gray-500">
          Home /{" "}
          <span className="text-teal-700 font-semibold">Timeline</span>
        </span>

        <h1 className="text-4xl font-bold text-teal-800 mt-2">
          Our Journey
        </h1>

        <p className="text-gray-600 mt-2 max-w-2xl">
          Discover the journey, progress, and vision behind Building Sewa.
        </p>
      </div>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-teal-600 rounded-full" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-teal-600 rounded-full" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.title}
                  className="relative flex items-center"
                >
                  {/* Desktop dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-teal-600 rounded-full z-10" />

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-3 w-5 h-5 bg-white border-4 border-teal-600 rounded-full z-10" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isLeft
                        ? "md:pr-12 md:mr-auto"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{event.icon}</span>

                        <span className="text-sm font-semibold text-teal-700">
                          {event.year}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-800">
                        {event.title}
                      </h2>

                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}