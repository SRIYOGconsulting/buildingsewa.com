import Link from "next/link";

export default function CareerPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <div className="h-[200px] bg-gray-100 flex flex-col items-center justify-center text-center px-6">
        <span className="text-gray-500">
          Home /{" "}
          <span className="text-teal-700 font-semibold">
            Career
          </span>
        </span>

        <h1 className="text-4xl font-bold text-teal-800 mt-2">
          Careers at Building Sewa
        </h1>

        <p className="text-gray-600 mt-2 max-w-2xl">
          Explore opportunities to learn, grow, and contribute to
          building better homes and communities.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Build Your Career With Us
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Building Sewa, we bring together professionals from
            different areas of construction, design, project
            management, and technology to deliver reliable building
            solutions. We value collaboration, continuous learning,
            and practical experience.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            If you are interested in contributing to our work and
            growing with our team, we would be happy to hear from you.
          </p>
        </section>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Learn & Grow
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Gain practical experience and develop your skills
                through real-world projects and collaboration.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Work Together
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborate with professionals across construction,
                architecture, engineering, management, and technology.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Make an Impact
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Contribute to projects that help make the building
                process simpler and more organized for homeowners.
              </p>
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Current Opportunities
          </h2>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              No Current Openings
            </h3>

            <p className="text-gray-600 mt-2 max-w-xl mx-auto leading-relaxed">
              We currently do not have any specific job openings
              listed. Please check back later for new opportunities.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 rounded-md bg-teal-700 px-6 py-3 text-sm font-medium text-white hover:bg-teal-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Internship */}
        <section className="rounded-xl bg-teal-50 border border-teal-100 p-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-3">
            Interested in an Internship?
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-2xl">
            If you are a student looking for practical experience,
            explore our internship opportunities and learn more about
            how you can get involved with Building Sewa.
          </p>

          <Link
            href="/internship"
            className="inline-block mt-6 rounded-md bg-teal-700 px-6 py-3 text-sm font-medium text-white hover:bg-teal-600 transition-colors"
          >
            Explore Internship
          </Link>
        </section>
      </div>
    </main>
  );
}