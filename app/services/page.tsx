import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/services";
import Ribbon from "@/components/Ribbon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Building Services in Nepal | Building Sewa",
  description:
    "From site inspection to home automation — one team for every stage of your property, across Nepal.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-24">
      <Ribbon
        name="Services"
        description="From site inspection to home automation one team for every stage of
          your property, across Nepal."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 pt-12">
        {services.map((service) => (
          <div
            key={service.slug}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={`/services/${service.image}.jpg`}
                alt={service.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2">{service.name}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {service.longDescription}
              </p>
              <Link href={`/services/${service.slug}`}>
                <button className="px-4 py-2 bg-[#0E4541] text-white rounded-md hover:bg-teal-800 cursor-pointer transition-colors duration-200">
                  Browse More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
