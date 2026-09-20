"use client";

import React from "react";
import Ribbon from "@/components/Ribbon";

export default function RefundPolicy() {
  return (
    <div className=" h-full">
      <Ribbon name="Refund Policy" showfont={false} />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            At <span className="font-medium">Building Sewa</span>, we are
            committed to delivering high-quality construction and building
            services. This Refund Policy describes the situations in which
            refunds may be granted and the process to request them.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Eligibility for Refunds
            </h2>
            <p className="about leading-relaxed mb-2">
              Refunds may be provided under the following conditions:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>
                A booked service was not delivered as described or agreed upon.
              </li>
              <li>A confirmed booking is cancelled by Building Sewa.</li>
              <li>Duplicate charges or payment errors occur.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Non-Refundable Cases
            </h2>
            <p className="about leading-relaxed mb-2">
              Refunds will not be issued in the following cases:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Change of mind after a service has already begun.</li>
              <li>
                Services that have already been fully completed as agreed.
              </li>
              <li>
                Cancellations made without sufficient advance notice, as
                outlined at the time of booking.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Refund Process
            </h2>
            <p className="about leading-relaxed mb-2">
              To request a refund, please contact our support team at{" "}
              <span className="font-medium">info@buildingsewa.com</span> within 7
              days of your booking. Include your booking details, the reason
              for the refund, and any supporting documentation.
            </p>
            <p className="about leading-relaxed">
              Once your request is reviewed, we will respond within 5 business
              days. Approved refunds will be processed back to the original
              payment method within 7–10 business days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Contact Us
            </h2>
            <p className="about leading-relaxed mb-1">
              Email: info@buildingsewa.com
            </p>
            <p className="about leading-relaxed mb-1">Phone: +977 98520-24-365</p>
            <p className="about leading-relaxed">
              Address: Kamalpokhari, Kathmandu, Nepal
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}