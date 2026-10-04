"use client";

import { useState } from "react";
import type { ServiceFaq } from "@/data/services";

function FaqItem({ question, answer }: ServiceFaq) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full px-5 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
      >
        <span>{question}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm">{answer}</div>
      )}
    </div>
  );
}

export default function ServiceFaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FaqItem key={faq.question} {...faq} />
      ))}
    </div>
  );
}