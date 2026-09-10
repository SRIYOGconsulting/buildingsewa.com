import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

import Ribbon from "@/components/Ribbon";
import BookingForm from "@/components/BookingForm";

import {
  getServiceBySlug,
  getServices,
} from "@/lib/services";

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative">
      <Ribbon
        name={service.name}
        description={service.description}
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div>
            <div className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden card shadow-md">
              <Image
                src={`/services/${service.image}.jpg`}
                alt={service.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-[#0E4541] uppercase tracking-wide">
                {service.category}
              </p>

              <h1 className="text2 text-3xl md:text-4xl font-semibold mt-2">
                {service.name}
              </h1>

              <p className="text mt-5 leading-7">
                {service.longDescription}
              </p>
            </div>

            {/* What's Included */}
            <div className="mt-10">
              <h2 className="text2 text-2xl font-semibold">
                What's Included
              </h2>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#0E4541] mt-0.5 shrink-0"
                    />

                    <span className="text text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Area */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="card rounded-xl shadow-md p-6 md:p-8">
              <p className="text-sm text">
                Starting from
              </p>

              <p className="text2 text-xl font-semibold mt-1">
                {service.priceFrom}
              </p>

              <div className="border-t my-6" />

              <BookingForm
                serviceSlug={service.slug}
                serviceName={service.name}
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}