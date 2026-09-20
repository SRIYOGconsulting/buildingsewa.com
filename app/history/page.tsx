import Image from "next/image";
import Ribbon from "@/components/Ribbon";
import SectionTag from "@/components/Sectiontag";
import CtaBanner from "@/components/CtaBanner";
import { Lightbulb, Settings2, MapPin, Monitor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History | Building Sewa",
  description:
    "How Building Sewa grew into Nepal's trusted partner for building and home services.",
};

const milestones = [
  {
    year: "2018",
    title: "Building Sewa Founded",
    description:
      "Started with a simple idea: make it easy for Nepali homeowners to find trusted builders and tradespeople.",
    icon: Lightbulb,
  },
  {
    year: "2020",
    title: "Beyond Construction",
    description:
      "Expanded past civil construction into design, engineering, and interior services under one roof.",
    icon: Settings2,
  },
  {
    year: "2022",
    title: "Serving the Valley",
    description:
      "Grew our verified professional network across Kathmandu, Lalitpur, and Bhaktapur.",
    icon: MapPin,
  },
  {
    year: "2024",
    title: "Online Booking Platform",
    description:
      "Launched the Building Sewa platform so customers can browse services and book online in minutes.",
    icon: Monitor,
  },
];

export default function History() {
  return (
    <main className="bg-gray-50">
      <Ribbon
        name="Our History"
        description="How Building Sewa grew into Nepal's trusted partner for building and home services."
      />

      {/* Hero image */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <Image
          src="/history/1.png"
          alt="Building plans and a hard hat overlooking the city"
          width={1400}
          height={500}
          className="h-[260px] w-full rounded-2xl object-cover md:h-[320px]"
        />
      </section>

      {/* Beginning / Evolution — alternating, matches Why Us pattern */}
      <section className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-md space-y-4 text-left">
            <SectionTag>OUR BEGINNING</SectionTag>
            <h2 className="text-3xl font-semibold leading-snug text-[#0E4541] md:text-4xl">
              The Beginning of Our Journey
            </h2>
            <p className="leading-7 text-gray-600">
              Building Sewa began with a simple idea to make it easy for Nepali
              homeowners to find trusted builders and tradespeople. We saw a
              need for a more transparent, reliable, and convenient way to
              access building and home services, and that idea laid the
              foundation for what we are today.
            </p>
          </div>
          <Image
            src="/history/5.png"
            alt="House model with blueprints being drawn"
            width={800}
            height={600}
            className="w-full max-w-md rounded-xl object-cover shadow-sm"
          />
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:[direction:rtl]">
          <Image
            src="/history/3.png"
            alt="Building Sewa team at a construction site"
            width={800}
            height={600}
            className="w-full max-w-md rounded-xl object-cover shadow-sm [direction:ltr]"
          />
          <div className="max-w-md space-y-4 text-left [direction:ltr]">
            <SectionTag>OUR EVOLUTION</SectionTag>
            <h2 className="text-3xl font-semibold leading-snug text-[#0E4541] md:text-4xl">
              Growing Together
            </h2>
            <p className="leading-7 text-gray-600">
              Over time, we expanded our services beyond construction into
              design, engineering, interiors, and more. With a focus on quality
              and customer trust, we built a network of skilled professionals
              and developed systems to serve more people across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <SectionTag>OUR JOURNEY</SectionTag>
            <h2 className="mt-2 text-3xl font-bold text-[#0E4541] md:text-4xl">
              Key Milestones
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-500">
              Important moments that shaped Building Sewa&apos;s growth and
              success.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-10 right-10 top-[52px] hidden border-t-2 border-dashed border-emerald-200 lg:block" />

            {milestones.map(({ year, title, description, icon: Icon }) => (
              <div
                key={year}
                className="relative z-10 flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#0E4541]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-lg font-bold text-[#0E4541]">
                  {year}
                </div>
                <h3 className="mt-1 font-semibold text-[#0E4541]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <CtaBanner
          title="Our Journey Continues"
          description="With every project, we grow stronger. Our commitment remains the same — to make building and home services simpler, more reliable, and more accessible for everyone in Nepal."
          buttonText="Explore Services"
          buttonHref="/services"
          backgroundImage="/history/1.png"
        />
      </section>
    </main>
  );
}
