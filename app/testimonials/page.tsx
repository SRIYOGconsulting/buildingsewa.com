import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Building Sewa",
  description: "Real feedback from homeowners we've worked with.",
};

export default function Testimonials() {
  const values = [
    {
      title: "Professional Service",
      description:
        "We focus on delivering professional and reliable services while keeping project requirements and client needs at the center.",
    },
    {
      title: "Quality & Reliability",
      description:
        "Our approach emphasizes quality, consistency, and dependable support throughout the service process.",
    },
    {
      title: "Client Focused",
      description:
        "We aim to understand each client's requirements and provide solutions that are practical and suited to their needs.",
    },
    {
      title: "Skilled Team",
      description:
        "Our team works collaboratively to provide knowledgeable support and effective solutions across different project requirements.",
    },
    {
      title: "Technology Driven",
      description:
        "We use modern digital tools and technologies to improve communication, coordination, and service delivery.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We value feedback and continuously look for ways to improve our services and overall client experience.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </p>

          <h1 className="text-3xl md:text-5xl font-bold">
            What Our Clients Value
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We are committed to providing professional, reliable, and
            client-focused services. Verified client feedback will be featured
            here as it becomes available.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>

                <p className="mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Testimonials */}
      <section className="px-5 py-16">
        <div className="max-w-3xl mx-auto text-center card rounded-xl p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold">
            Client Feedback Coming Soon
          </h2>

          <p className="mt-4 leading-relaxed">
            Verified testimonials from our clients will be added to this section
            as we receive and approve feedback.
          </p>
        </div>
      </section>

      <div className="h-16"></div>
    </main>
  );
}
