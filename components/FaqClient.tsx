"use client";
import React, { useState } from "react";
import Ribbon from "@/components/Ribbon";

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What services does Building Sewa offer?",
      answer:
        "We offer end-to-end construction services including land survey, architectural design, structural engineering, civil construction, interior finishing, electrical and plumbing work, and post-construction cleanup.",
    },
    {
      id: 2,
      question: "Which areas does Building Sewa serve?",
      answer:
        "We currently serve Kathmandu, Lalitpur, and Bhaktapur, with select services available in other regions on request.",
    },
    {
      id: 3,
      question: "How do I book a service?",
      answer:
        "Browse our Services page, select the service you need, and fill out the booking form with your name, phone number, address, and preferred date.",
    },
    {
      id: 4,
      question: "Do I need to pay in advance to book a service?",
      answer:
        "No advance payment is required to submit a booking request. Payment terms are confirmed with our team once your booking is reviewed.",
    },
    {
      id: 5,
      question: "How soon will someone contact me after booking?",
      answer:
        "Our team typically reaches out within 24 hours of receiving your booking request to confirm details and schedule a visit.",
    },
    {
      id: 6,
      question: "Can I request a custom home design?",
      answer:
        "Yes, our Architecture & House Design service includes custom plans tailored to your plot size, budget, and lifestyle.",
    },
    {
      id: 7,
      question: "Do you handle building permits and documentation?",
      answer:
        "Yes, our Building Approval & Documentation service helps you navigate municipal permits and required construction paperwork.",
    },
    {
      id: 8,
      question: "What is included in soil testing?",
      answer:
        "We conduct lab-based soil analysis to determine the appropriate foundation type and load-bearing capacity for your site.",
    },
    {
      id: 9,
      question: "Do you provide materials, or do I need to source them myself?",
      answer:
        "We offer a Materials Supply service for reliable sourcing and delivery, though you're welcome to source your own materials if you prefer.",
    },
    {
      id: 10,
      question:
        "Can Building Sewa manage the entire project from start to finish?",
      answer:
        "Yes, our Project Management service provides on-site coordination and scheduling across every phase, from foundation to finishing.",
    },
    {
      id: 11,
      question: "Do you offer interior design services?",
      answer:
        "Yes, our Interior Designing service covers full concept-to-execution work, including modular kitchens, bathroom setups, and custom furniture.",
    },
    {
      id: 12,
      question: "Can I get Vaastu-compliant design guidance?",
      answer:
        "Yes, our Vaastu Consultation service provides layout guidance for a harmonious home design.",
    },
    {
      id: 13,
      question: "Do you offer smart home or automation services?",
      answer:
        "Yes, our Home Automation service covers smart lighting, security, and appliance control setups.",
    },
    {
      id: 14,
      question: "Do you install solar panels?",
      answer:
        "Yes, we offer rooftop Solar Panel Installation for homes looking to switch to sustainable energy.",
    },
    {
      id: 15,
      question: "Can you help with post-construction cleanup?",
      answer:
        "Yes, we offer post-construction cleanup as part of our finishing services to make your space move-in ready.",
    },
    {
      id: 16,
      question: "Do you offer annual home maintenance packages?",
      answer:
        "Yes, our Annual Home Maintenance service provides scheduled upkeep to keep your home in top condition year-round.",
    },
    {
      id: 17,
      question: "Is Building Sewa affiliated with SRIYOG Consulting?",
      answer:
        "Yes, Building Sewa is a construction management platform built and operated by SRIYOG Consulting.",
    },
    {
      id: 18,
      question: "Do you perform traditional ceremonies like Bhumi Pooja?",
      answer:
        "Yes, we arrange traditional ground-breaking (Bhumi Pooja) and housewarming (Griha Pravesh Puja) ceremonies as part of our service offerings.",
    },
    {
      id: 19,
      question: "Can I track the progress of my construction project?",
      answer:
        "Our project management team keeps you updated throughout construction; a dedicated tracking dashboard is planned for future releases.",
    },
    {
      id: 20,
      question: "Do you offer fire safety and security system installation?",
      answer:
        "Yes, we install fire detection systems, CCTV cameras, and other security solutions for residential and commercial properties.",
    },
    {
      id: 21,
      question: "Does Building Sewa offer internship opportunities?",
      answer:
        "Yes, internships are available through SRIYOG Consulting, with intakes in June–August, September–November, December–February, and March–May.",
    },
    {
      id: 22,
      question: "How can I leave feedback about a completed service?",
      answer:
        "You can share your experience through our Feedback page, which includes a form for detailed comments and a photo upload option.",
    },
    {
      id: 23,
      question: "Can I cancel or reschedule a booking?",
      answer:
        "Yes, contact our team as soon as possible after booking to reschedule or cancel, and we'll accommodate your request where possible.",
    },
    {
      id: 24,
      question:
        "Do you offer packing and moving services alongside construction?",
      answer:
        "Yes, our Packing & Moving service helps with safe and efficient relocation once your construction or renovation is complete.",
    },
  ];

  const faq1 = faqs.slice(0, faqs.length / 2);
  const faq2 = faqs.slice(faqs.length / 2);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="footer">
      <Ribbon name="Frequently Asked Questions" />
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-4 ">
          <div className="w-full lg:w-1/2 space-y-3 ">
            {faq1.map((faq) => (
              <div
                key={faq.id}
                className="rounded-md overflow-hidden group border-none"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between card text2 items-center py-5 px-6   transition"
                >
                  <h2 className="text-md font-semibold ">{faq.question}</h2>
                  <span className="text-2xl font-bold">
                    {openIndex === faq.id ? (
                      <div className="w-[15px] cursor-pointer h-0.5 rounded-full bg-black"></div>
                    ) : (
                      <img
                        src="/icons/plus.svg"
                        className="w-[19px] cursor-pointer h-[19px]"
                        alt=""
                      />
                    )}
                  </span>
                </button>

                <div
                  className={` transition-all card2 duration-300 cursor-pointer ease-in-out ${
                    openIndex === faq.id
                      ? "max-h-96 opacity-100 translate-y-0 p-6"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 space-y-3">
            {faq2.map((faq) => (
              <div
                key={faq.id}
                className="rounded-md  overflow-hidden group border-none"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full card text2 flex justify-between faqsQuestions items-center py-5 px-6   transition"
                >
                  <h2 className="text-md font-semibold">{faq.question}</h2>
                  <span className="text-2xl font-bold">
                    {openIndex === faq.id ? (
                      <div className="w-[15px] cursor-pointer h-0.5 rounded-full bg-black"></div>
                    ) : (
                      <img
                        src="/icons/plus.svg"
                        className="w-[19px] cursor-pointer h-[19px]"
                        alt=""
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`   card2 transition-all duration-300 ease-in-out ${
                    openIndex === faq.id
                      ? "max-h-96 opacity-100 translate-y-0 p-6"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
