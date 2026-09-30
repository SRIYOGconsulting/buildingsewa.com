import type { Metadata } from "next";
import Ribbon from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "AI Usage Policy | Building Sewa",
  description:
    "Read Building Sewa's Artificial Intelligence Usage Policy.",
};

export default function AIUsagePolicy() {
  return (
    <div className="h-full">
      <Ribbon
        name="Artificial Intelligence (AI) Usage Policy"
        description="Our approach to responsible, secure, and transparent use of artificial intelligence."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            This policy explains how Building Sewa designs, develops, and
            uses Artificial Intelligence (AI) across its home service
            platform. It ensures AI is used responsibly, securely, and
            transparently while protecting the privacy and rights of
            customers and service professionals.
          </p>

          <p className="about text-sm">
            <span className="font-medium">Version:</span> 1.2 &nbsp;|&nbsp;{" "}
            <span className="font-medium">Effective Date:</span> 29th September, 2026
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              1. Purpose
            </h2>
            <p className="about leading-relaxed">
              This policy explains how Building Sewa designs, develops, and
              uses Artificial Intelligence (AI) across its home service
              platform. It ensures AI is used responsibly, securely, and
              transparently while protecting the privacy and rights of
              customers and service professionals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              2. Scope
            </h2>
            <ul className="list-disc list-inside about space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <li>Voice-to-text booking</li>
              <li>AI service provider matching</li>
              <li>Personalized service recommendations</li>
              <li>Custom promotional offers</li>
              <li>Seasonal service suggestions</li>
              <li>AI chatbot support</li>
              <li>Smart worker dispatch</li>
              <li>DIY helpdesk assistance</li>
              <li>Language translation and text-to-speech</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              3. Guiding Principles
            </h2>
            <ul className="list-disc list-inside about space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <li>Human oversight over AI decisions</li>
              <li>Transparency when AI is used</li>
              <li>Data privacy and security</li>
              <li>Fair and unbiased recommendations</li>
              <li>Compliance with Nepal&apos;s privacy laws</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              4. Acceptable Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2 about">AI may be used to:</h3>
                <ul className="list-disc list-inside about space-y-1">
                  <li>Recommend services</li>
                  <li>Match customers with professionals</li>
                  <li>Provide chatbot assistance</li>
                  <li>Translate and transcribe content</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 about">AI must not be used to:</h3>
                <ul className="list-disc list-inside about space-y-1">
                  <li>Make irreversible decisions without human review</li>
                  <li>Discriminate against users or service providers</li>
                  <li>Provide medical or legal advice</li>
                  <li>Use customer data beyond its intended purpose</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              5. AI Features
            </h2>
            <ul className="list-disc list-inside about space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <li>Voice-to-Text Booking</li>
              <li>Smart Service Matching</li>
              <li>Personalized Recommendations</li>
              <li>Custom Offers</li>
              <li>Seasonal Recommendations</li>
              <li>AI Booking Chatbot</li>
              <li>Worker Dispatch</li>
              <li>DIY Helpdesk</li>
              <li>Multilingual Communication</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              6. Human Oversight
            </h2>
            <p className="about leading-relaxed">
              Important decisions such as account suspension, payment
              processing, and worker deactivation always require human review.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              7. Data Privacy
            </h2>
            <p className="about leading-relaxed">
              Building Sewa protects personal information in accordance with
              Nepal&apos;s privacy laws. Voice recordings, location data, and
              personal information are processed securely and only for the
              intended purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              8. Quality Assurance
            </h2>
            <p className="about leading-relaxed">
              AI systems are regularly tested for accuracy, fairness,
              security, and performance. Any issues are reviewed and
              corrected before deployment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              9. Policy Updates
            </h2>
            <p className="about leading-relaxed">
              This policy may be updated as AI technologies evolve. The
              latest version will always be available on the Building Sewa
              website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">
              10. Contact
            </h2>
            <p className="about leading-relaxed">
              If you have any questions regarding this AI Usage Policy,
              please contact Building Sewa Customer Support.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}