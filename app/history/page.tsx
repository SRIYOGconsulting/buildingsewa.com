import Image from "next/image";
import Ribbon from "@/components/Ribbon";


const milestones = [
  {
    year: "2018", 
    title: "Building Sewa Founded",
    description:
      "Started with a simple idea: make it easy for Nepali homeowners to find trusted builders and tradespeople.",
  },
  {
    year: "2020",
    title: "Beyond Construction",
    description:
      "Expanded past civil construction into design, engineering, and interior services under one roof.",
  },
  {
    year: "2022", 
    title: "Serving the Valley",
    description:
      "Grew our verified professional network across Kathmandu, Lalitpur, and Bhaktapur.",
  },
  {
    year: "2024", 
    title: "Online Booking Platform",
    description:
      "Launched the Building Sewa platform so customers can browse services and book online in minutes.",
  },
];

export default function History() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <Ribbon
        name="Our History"
        description="How Building Sewa grew into Nepal's trusted partner for building and home services."
      />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <Image
            src="/history/2.jpg"
            alt="Building Sewa early days"
            width={1400}
            height={600}
            className="h-[350px] w-full object-cover md:h-[450px]"
          />

          <div className="px-6 py-10 text-center md:px-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0E4541]">
              Our Beginning
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#0E4541] md:text-4xl">
              The Beginning of Our Journey
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              Building Sewa began with a problem every Nepali homeowner knows
              well finding a builder you can actually trust. Quotes varied
              wildly, timelines slipped, and quality was a gamble. We set out
              to change that by bringing verified professionals, clear pricing,
              and honest timelines into one place, from the first land survey
              to the final coat of paint.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/history/1.png"
              alt="Building Sewa project sites over the years"
              width={800}
              height={600}
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0E4541]">
              Our Evolution
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#0E4541] md:text-4xl">
              Evolution Over the Years
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              What began as a handful of construction services has grown into a
              full range of offerings land survey and soil testing,
              architecture and structural engineering, civil construction,
              interiors, and modern additions like solar, CCTV, and home
              automation. Every service we added came from the same place:
              customers asking us who they could trust for the next step.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-semibold text-[#0E4541]">
                  Verified Professionals
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Every tradesperson on our platform is screened before they
                  reach your site.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-semibold text-[#0E4541]">
                  End-to-End Service
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  From empty plot to finished home — one team, one point of
                  contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0E4541]">
              Our Journey
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#0E4541] md:text-4xl">
              Key Milestones
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              The moments that shaped Building Sewa into the service it is
              today.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0E4541] text-lg font-bold text-white">
                  {milestone.year}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#0E4541]">
                  {milestone.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Journey */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0E4541]">
              Looking Ahead
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#0E4541] md:text-4xl">
              Our Journey Continues
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every home we help build adds to what we know. We are working to
              widen our reach beyond the Kathmandu Valley, bring more skilled
              professionals onto the platform, and keep making the process of
              building a home in Nepal simpler and more transparent than it was
              the year before.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/history/2.png"
              alt="Building Sewa today"
              width={800}
              height={600}
              className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </main>
  );
}