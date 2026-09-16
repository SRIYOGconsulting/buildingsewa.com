import Image from "next/image";
import Ribbon from "@/components/Ribbon";

const sections = [
  {
    title: "Everything Your Build Needs, In One Place",
    body: "From the first land survey to the final coat of paint, Building Sewa brings every stage of construction under one roof. No more chasing separate contractors for design, structure, plumbing, and finishing you deal with one team and one point of contact.",
    image: "/why/1.jpg",
    alt: "Building Sewa team reviewing plans at a construction site",
  },
  {
    title: "Verified Professionals You Can Trust",
    body: "Every engineer, mason, electrician, and finisher on our platform is screened before they reach your site. You get dependable work, clear scope, and honest timelines not a gamble on whoever was available.",
    image: "/why/2.jpg",
    alt: "Verified tradesperson at work on a Building Sewa project",
    reverse: true,
  },
  {
    title: "Transparent Pricing, No Surprises",
    body: "Construction costs in Nepal are famously hard to pin down. We give you a clear scope of work and a straightforward quote up front, so you know what you are paying for at every stage of the build.",
    image: "/why/3.jpg",
    alt: "Reviewing a project quote and scope of work",
  },
  {
    title: "Serving the Kathmandu Valley and Beyond",
    body: "We work across Kathmandu, Lalitpur, and Bhaktapur, with select services available in other regions on request. Book online in minutes and our team will confirm your date and walk you through the next steps.",
    image: "/why/4.jpg",
    alt: "Completed Building Sewa residential project",
    reverse: true,
  },
];

export default function WhyUs() {
  return (
    <main>
      <Ribbon name="Why Us" showfont={false} />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 pb-16 pt-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className={`grid gap-10 place-items-center md:grid-cols-2 ${
              section.reverse ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="max-w-md space-y-5 text-left">
              <h2 className="text-3xl font-semibold leading-snug text-[#0E4541] md:text-4xl">
                {section.title}
              </h2>
              <p className="leading-8 text-gray-600">{section.body}</p>
            </div>

            <Image
              src={section.image}
              alt={section.alt}
              height={600}
              width={800}
              className="w-full max-w-sm rounded-md object-cover md:max-w-[450px]"
            />
          </section>
        ))}
      </div>
    </main>
  );
}
