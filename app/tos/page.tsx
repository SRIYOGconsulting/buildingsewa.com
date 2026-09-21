import React from "react";
import Ribbon from "@/components/Ribbon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Building Sewa",
  description: "Terms and conditions for using Building Sewa's services.",
};

const TermsofServices = () => {
  return (
    <div className=" min-h-screen">
      <Ribbon name="Terms of Services" showfont={false} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            <span className="font-medium">Last updated:</span> 1st June, 2025
          </p>

          <p className="about leading-relaxed">
            Welcome to Building Sewa. Please read these Terms and Conditions
            (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully
            before using the website, mobile application, or social media
            platforms (the &quot;Service&quot;) operated by Sriyog Consulting
            Pvt. Ltd. (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>

          <p className="about leading-relaxed">
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, please
            immediately stop using the Service.
          </p>

          {/* Section: Eligibility/Age */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Eligibility / Age
            </h2>
            <p className="about leading-relaxed">
              Anyone under the age of 18 is not authorized to book or receive
              services through Building Sewa without parental or guardian
              consent.
            </p>
          </div>

          {/* Section: Accounts */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Accounts
            </h2>
            <p className="about leading-relaxed">
              You must provide accurate, complete, and current information
              when submitting a service booking. Misleading information may
              result in cancellation of your booking.
            </p>
            <p className="about leading-relaxed">
              You are responsible for safeguarding any account details
              associated with your bookings. Notify us immediately if your
              account is compromised.
            </p>
          </div>

          {/* Section: Understanding of our Platform */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Understanding of Our Platform
            </h2>
            <p className="about leading-relaxed">
              Building Sewa is a construction management platform operated by
              Sriyog Consulting Pvt. Ltd., established on June 14, 2018 and
              based in Kathmandu, Nepal. We connect homeowners with verified
              architects, engineers, and contractors but do not directly
              perform on-site construction work ourselves.
            </p>
            <p className="about leading-relaxed">
              You agree not to hold us responsible for any issues or defaults
              arising from work performed by independent professionals booked
              through the platform. Complaints can be submitted to review
              providers violating our service guidelines.
            </p>
          </div>

          {/* Section: Links to Other Web Sites */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Links to Other Web Sites
            </h2>
            <p className="about leading-relaxed">
              Our Service may contain links to third-party websites. We are
              not responsible for their content, privacy policies, or
              practices. Users should review their terms and policies before
              use.
            </p>
          </div>

          {/* Section: Delivery/Payment */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Booking &amp; Payment
            </h2>
            <p className="about leading-relaxed">
              Building Sewa facilitates bookings between homeowners and
              service professionals. Payment terms are confirmed directly
              with our team once a booking request is reviewed, as outlined
              on our Payment and Refund Policy pages.
            </p>
          </div>

          {/* Section: Copyrights/Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Copyrights / Intellectual Property
            </h2>
            <p className="about leading-relaxed">
              All content on our platform is protected under copyright laws.
              Users shall not copy, modify, or distribute content that does
              not belong to them.
            </p>
          </div>

          {/* Section: Termination */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Termination
            </h2>
            <p className="about leading-relaxed">
              Breach of Terms may lead to immediate cancellation of your
              booking or restriction of platform access. Voluntary
              termination can be done by discontinuing use or contacting us.
            </p>
          </div>

          {/* Section: Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Governing Law
            </h2>
            <p className="about leading-relaxed">
              These Terms are governed by the laws of Nepal. If any part is
              held invalid, the remaining provisions remain effective.
            </p>
          </div>

          {/* Section: Amendments */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              Amendments
            </h2>
            <p className="about leading-relaxed">
              Building Sewa reserves the right to amend Terms at its
              discretion. Changes will be notified at least 15 days in
              advance. Continued use constitutes acceptance of revised Terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsofServices;