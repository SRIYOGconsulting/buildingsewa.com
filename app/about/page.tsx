import ClapFunction from "@/components/ClappingFunction";
import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Building Sewa",
  description:
    "Learn about Building Sewa's mission to simplify construction in Nepal.",
};

const About = () => {
  return (
    <div className="about font-size">
      <Ribbon
        name="About Building Sewa"
        description="From site inspection to home automation, we're one team for every
          stage of your property, across Nepal."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 mdse:pt-16 pb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Image on mobile - inserted here for better reading flow */}
          <div className="md:hidden overflow-hidden px-5 sm:px-0">
            <Image
              src="/about/1.png"
              alt="Logo"
              width={800} 
              height={600} 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Left side - Text content */}
          <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed ">
            <p className="content-text ">
              Building Sewa is a professional construction management startup in
              Nepal dedicated to transforming your dream home into reality. We
              provide end-to-end building construction services, guiding
              homeowners through every stage from initial concept and
              architectural design to construction, interior finishing,
              handover, and long-term maintenance.
            </p>

            <p className="content-text ">
              Our mission is to simplify the building process by bringing
              together experienced architects, engineers, project managers,
              skilled craftsmen, and trusted contractors under one organized
              platform. Through structured project management, transparent
              communication, and strict quality standards, we ensure every
              project is completed efficiently, within budget, and on schedule.
            </p>

            <p className="content-text">
              At Building Sewa, we believe constructing a home should be
              stress-free. We combine industry expertise, professional
              craftsmanship, and modern construction practices to deliver
              premium-quality homes that meet the highest standards of safety,
              durability, and aesthetics. Whether you&apos;re building your
              first home, renovating an existing property, or developing a
              commercial project, our dedicated team is committed to delivering
              reliable, budget-friendly, and deadline-focused solutions tailored
              to your needs.
            </p>

            <p className="content-text ">
              Building Sewa your trusted construction partner from concept to
              completion, building homes with quality, transparency, and
              excellence across Nepal.
            </p>

            <p className="content-text ">
              Our comprehensive IT services are tailored to the unique demands
              of healthcare, employment platforms, and tourism operations.
            </p>
          </div>

          {/* Right side - Images (Desktop only) */}
          <div className="hidden md:block md:w-1/3 space-y-6">
            <div className="overflow-hidden">
              <img
                src="/about/1.png"
                alt="About SRIYOG 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Clap Button with better mobile spacing - aligned left */}
        <div className="mt-6 md:mt-8 flex justify-start">
          <ClapFunction />
        </div>
      </div>
    </div>
  );
};
export default About;
