'use client';

import React from "react";
// import Ribbon from "../../components/Ribbon";

export default function RefundPolicy() {
  return (
    <div className=" h-full">
      {/* Header / Ribbon */}
      {/* <Ribbon name="Refund Policy" showfont={false}/> */}

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            At <span className="font-medium">SRIYOG Consulting Pvt. Ltd.</span>, we are committed to delivering high-quality products and services. This Refund Policy describes the situations in which refunds may be granted and the process to request them.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Eligibility for Refunds</h2>
            <p className="about leading-relaxed mb-2">
              Refunds may be provided under the following conditions:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Products or services received are defective or not as described.</li>
              <li>Orders are not delivered within the expected timeframe.</li>
              <li>Duplicate charges or payment errors occur.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Non-Refundable Cases</h2>
            <p className="about leading-relaxed mb-2">
              Refunds will not be issued in the following cases:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Change of mind after purchase.</li>
              <li>Services or digital products that have already been fully delivered.</li>
              <li>Unauthorized use or distribution of digital content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Refund Process</h2>
            <p className="about leading-relaxed mb-2">
              To request a refund, please contact our support team at <span className="font-medium">support@sriyog.com</span> within 7 days of purchase. Include your order details, reason for the refund, and any supporting documentation.
            </p>
            <p className="about leading-relaxed">
              Once your request is reviewed, we will respond within 5 business days. Approved refunds will be processed back to the original payment method within 7–10 business days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">Contact Us</h2>
            <p className="about leading-relaxed mb-1">Email: support@sriyog.com</p>
            <p className="about leading-relaxed mb-1">Phone: +977-XXXXXXXXXX</p>
            <p className="about leading-relaxed">Address: [SRIYOG Consulting Address], Kathmandu, Nepal</p>
          </div>
        </section>
      </div>
    </div>
  );
}
