// app/aipolicy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Usage Policy | Home Sewa",
  description:
    "Read Home Sewa's Artificial Intelligence Usage Policy.",
};

export default function AIUsagePolicy() {
  return (
    <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px", lineHeight: "1.8" }}>
      <h1>Artificial Intelligence (AI) Usage Policy</h1>

      <p>
        <strong>Version:</strong> 1.2
        <br />
        <strong>Effective Date:</strong> July 2026
      </p>

      <h2>1. Purpose</h2>
      <p>
        This policy explains how Home Sewa designs, develops, and uses Artificial
        Intelligence (AI) across its home service platform. It ensures AI is used
        responsibly, securely, and transparently while protecting the privacy and
        rights of customers and service professionals.
      </p>

      <h2>2. Scope</h2>
      <ul>
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

      <h2>3. Guiding Principles</h2>
      <ul>
        <li>Human oversight over AI decisions</li>
        <li>Transparency when AI is used</li>
        <li>Data privacy and security</li>
        <li>Fair and unbiased recommendations</li>
        <li>Compliance with Nepal's privacy laws</li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>AI may be used to:</p>
      <ul>
        <li>Recommend services</li>
        <li>Match customers with professionals</li>
        <li>Provide chatbot assistance</li>
        <li>Translate and transcribe content</li>
      </ul>

      <p>AI must not be used to:</p>
      <ul>
        <li>Make irreversible decisions without human review</li>
        <li>Discriminate against users or service providers</li>
        <li>Provide medical or legal advice</li>
        <li>Use customer data beyond its intended purpose</li>
      </ul>

      <h2>5. AI Features</h2>
      <ul>
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

      <h2>6. Human Oversight</h2>
      <p>
        Important decisions such as account suspension, payment processing, and
        worker deactivation always require human review.
      </p>

      <h2>7. Data Privacy</h2>
      <p>
        Home Sewa protects personal information in accordance with Nepal's
        privacy laws. Voice recordings, location data, and personal information
        are processed securely and only for the intended purpose.
      </p>

      <h2>8. Quality Assurance</h2>
      <p>
        AI systems are regularly tested for accuracy, fairness, security, and
        performance. Any issues are reviewed and corrected before deployment.
      </p>

      <h2>9. Policy Updates</h2>
      <p>
        This policy may be updated as AI technologies evolve. The latest version
        will always be available on the Home Sewa website.
      </p>

      <h2>10. Contact</h2>
      <p>
        If you have any questions regarding this AI Usage Policy, please contact
        Home Sewa Customer Support.
      </p>
    </main>
  );
}