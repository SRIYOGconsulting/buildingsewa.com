import Image from "next/image";
import Ribbon from "@/components/Ribbon";
import SectionTag from "@/components/Sectiontag";
import CtaBanner from "@/components/CtaBanner";


const sections = [
  {
    tag: "ONE PLATFORM",
    title: "Everything Your Build Needs, In One Place",
    body: "From the first land survey to the final coat of paint, Building Sewa brings every stage of construction under one roof. No more chasing separate contractors for design, structure, plumbing, and finishing you deal with one team and one point of contact.",
    image: "/why/1.png",
    alt: "Architectural plans and a hard hat in front of a house model",
  },
  {
    tag: "TRUST & QUALITY",
    title: "Verified Professionals You Can Trust",
    body: "Every engineer, mason, electrician, and finisher on our platform is screened before they reach your site. You get dependable work, clear scope, and honest timelines not a gamble on whoever was available.",
    image: "/why/2.png",
    alt: "Building Sewa professional reviewing plans at a construction site",
    reverse: true,
  },
  {
    tag: "FAIR & CLEAR",
    title: "Transparent Pricing, No Surprises",
    body: "Construction costs in Nepal are famously hard to pin down. We give you a clear scope of work and a straightforward quote up front, so you know what you are paying for at every stage of the build.",
    image: "/why/3.png",
    alt: "Reviewing a project quote and scope of work with a calculator",
  },
  {
    tag: "WIDER REACH",
    title: "Serving the Kathmandu Valley and Beyond",
    body: "We work across Kathmandu, Lalitpur, and Bhaktapur, with select services available in other regions on request. Book online in minutes and our team will confirm your date and walk you through the next steps.",
    image: "/why/4.png",
    alt: "Completed Building Sewa home with mountain backdrop",
    reverse: true,
  },
];

export default function WhyUs() {
  return (
    <main>
      <Ribbon
        name="Why Us"
        description="Choose Building Sewa for trusted professionals, transparent pricing, and end-to-end building solutions in Nepal."
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-16 px-4 pb-8 pt-14">
        {sections.map((section) => (
          <section
            key={section.tag}
            className={`grid gap-10 place-items-center md:grid-cols-2 ${
              section.reverse ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="max-w-md space-y-4 text-left [direction:ltr]">
              <SectionTag>{section.tag}</SectionTag>
              <h2 className="text-3xl font-semibold leading-snug text-[#0E4541] md:text-4xl">
                {section.title}
              </h2>
              <p className="leading-7 text-gray-600">{section.body}</p>
            </div>

            <Image
              src={section.image}
              alt={section.alt}
              height={600}
              width={800}
              className="w-full max-w-sm rounded-xl object-cover shadow-sm md:max-w-[450px]"
            />
          </section>
        ))}

        <div className="w-full pt-4">
          <CtaBanner
            title="Your Dream Space Is Our Priority"
            description="Get started with Building Sewa today and experience a simpler way to build, renovate, or maintain your space."
            buttonText="Explore Services"
            buttonHref="/services"
          />
        </div>
      </div>
    </main>
  );
}