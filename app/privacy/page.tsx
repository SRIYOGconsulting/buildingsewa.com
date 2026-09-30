import type { Metadata } from "next";
import Ribbon from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "Privacy Policy | Building Sewa",
  description:
    "Read the Building Sewa Privacy Policy to understand how we collect, use, protect, and manage your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="h-full">
      <Ribbon name="Privacy Policy" showfont={false} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="footer p-6 rounded-xl shadow-md space-y-6">
          <p className="about leading-relaxed">
            <span className="font-medium">Effective Date:</span> 29th September, 2026
          </p>

          <p className="about leading-relaxed">
            This Privacy Policy explains how <span className="font-medium">Building Sewa</span> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, shares, and protects your personal information when you visit <span className="font-medium">www.buildingsewa.com</span>, request services, submit an inquiry, apply as a business partner, apply for a job, or otherwise interact with our website or business operations.
          </p>

          <p className="about leading-relaxed">
            By using our website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our website or services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">1. Information We Collect</h2>
            <p className="about leading-relaxed mb-2">
              We may collect personal information from you directly, from automated technologies, or from third parties where permitted by law. The types of information we may collect include:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Project or service request details, including location, scope, budget, timeline, and service preferences</li>
              <li>Business contact information for partnership inquiries</li>
              <li>Career application information, including CVs, resumes, qualifications, and supporting documents</li>
              <li>Messages, support requests, and other communications you send to us</li>
              <li>Technical information such as IP address, browser type, device information, operating system, and usage data</li>
              <li>Cookies and analytics information collected through our website</li>
            </ul>
            <p className="about leading-relaxed mt-2">
              We only collect information that is necessary for the purpose for which it is being collected, or that you voluntarily provide to us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside about space-y-1">
              <li>Respond to inquiries and provide construction-related services</li>
              <li>Prepare quotations, project estimates, and service coordination</li>
              <li>Manage project bookings, scheduling, and internal records</li>
              <li>Process partnership and career applications</li>
              <li>Communicate with you regarding updates, support, and service delivery</li>
              <li>Improve our website, customer experience, and business operations</li>
              <li>Comply with legal, regulatory, contractual, and tax obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">3. Legal Basis for Processing</h2>
            <p className="about leading-relaxed mb-2">
              Where applicable under law, we process your personal information based on one or more of the following grounds:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Your consent</li>
              <li>The performance of a contract with you</li>
              <li>Our legitimate business interests</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">4. Sharing of Information</h2>
            <p className="about leading-relaxed mb-2">
              We do not sell your personal information. We may share your information only with trusted third parties where necessary to provide services, manage operations, or comply with legal requirements. This may include:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Architects, engineers, contractors, and suppliers involved in project delivery</li>
              <li>Technology, hosting, analytics, payment, communication, and support providers</li>
              <li>Government authorities or legal entities when required by law</li>
            </ul>
            <p className="about leading-relaxed mt-2">
              Where we share information with third parties, we require them to handle it securely and only for the purposes authorized by us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">5. Cookies and Tracking Technologies</h2>
            <p className="about leading-relaxed">
              We use cookies and similar technologies to improve website performance, remember preferences, understand user behavior, and support analytics. You can control cookies through your browser settings; however, disabling cookies may affect certain website features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">6. Data Security</h2>
            <p className="about leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, misuse, loss, or disclosure. While we take reasonable measures to secure your information, no method of transmission or storage is completely risk-free.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">7. Data Retention</h2>
            <p className="about leading-relaxed">
              We retain personal information only for as long as necessary to fulfill the purposes described in this Policy, meet legal and regulatory obligations, resolve disputes, and maintain business records.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">8. Your Rights</h2>
            <p className="about leading-relaxed mb-2">
              Depending on your location and applicable law, you may have the right to:
            </p>
            <ul className="list-disc list-inside about space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information where permitted by law</li>
              <li>Withdraw consent for processing where consent is required</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Request information about how your information is used</li>
            </ul>
            <p className="about leading-relaxed mt-2">
              To exercise these rights, please contact us using the details in the &quot;Contact Us&quot; section below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">9. Third-Party Links and Services</h2>
            <p className="about leading-relaxed">
              Our website may contain links to third-party websites or may use third-party services such as analytics, mapping, hosting, communication, or payment platforms. These third parties operate under their own privacy policies, and we are not responsible for their practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">10. Children&apos;s Privacy</h2>
            <p className="about leading-relaxed">
              Our website and services are not directed to children, and we do not knowingly collect personal information from children without appropriate parental or guardian consent where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">11. International Transfers</h2>
            <p className="about leading-relaxed">
              If your information is transferred outside Nepal or outside your jurisdiction for processing, we will take reasonable steps to ensure that such transfers are protected in accordance with applicable privacy laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">12. Changes to This Policy</h2>
            <p className="about leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Any revised version will be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-800 mb-2">13. Contact Us</h2>
            <p className="about leading-relaxed mb-1">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at <span className="font-medium">info@buildingsewa.com</span>.
            </p>
            <p className="about leading-relaxed mb-1">Phone: +977-01-4548068</p>
            <p className="about leading-relaxed">Address: Kamalpokhari, Kathmandu, Nepal</p>
          </div>
        </section>
      </div>
    </div>
  );
}