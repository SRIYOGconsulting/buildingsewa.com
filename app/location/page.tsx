import Ribbon from "@/components/Ribbon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Location | Building Sewa",
  description: "Find Building Sewa's office location in Kathmandu, Nepal.",
};

export default function LocationPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <Ribbon
        name="Our Location"
        description="Find Building Sewa and get directions to our office."
      />

      {/* Location Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Intro */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">
              Visit Us
            </span>

            <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-5">
              Visit Building Sewa
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Visit our office to learn more about our building construction
              services, discuss your project requirements, and connect with our
              team.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-2xl mt-4">
              Our location is conveniently accessible and can be viewed on the
              map below for directions.
            </p>
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center">
                  📍
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">Address</p>

                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    P86F+G8R, Pashupati Marg,
                    <br />
                    Kathmandu 44600
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center">
                  📞
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">Phone</p>

                  <a
                    href="tel:+9779852024365"
                    className="text-sm text-gray-600 mt-1 block hover:text-teal-700 transition-colors"
                  >
                    +977 98520-24-365
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center">
                  ✉️
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">Email</p>

                  <a
                    href="mailto:info@buildingsewa.com"
                    className="text-sm text-gray-600 mt-1 block hover:text-teal-700 transition-colors break-all"
                  >
                    info@buildingsewa.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">
              Directions
            </span>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Find Us on the Map
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Use the map below to find our location and get directions to
              Building Sewa.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.193460784485!2d85.32073757615186!3d27.711312476180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741059444503!5m2!1sen!2snp"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Building Sewa Location"
            />
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl bg-[#0E4541] text-white px-6 py-12 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Have a Building Project in Mind?
          </h2>

          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Get in touch with the Building Sewa team to discuss your project
            requirements and learn more about our services.
          </p>

          <a
            href="/contact"
            className="inline-block mt-7 bg-white text-[#0E4541] px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
