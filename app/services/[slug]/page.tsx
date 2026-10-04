import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/CtaBanner";
import ServiceFaqAccordion from "@/components/services/ServiceFaqAccordion";
import { getServices, getServiceBySlug } from "@/lib/services";

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mb-40 flex flex-col gap-0">
      {/* Hero */}
      <div className="relative mb-20 flex h-[560px] w-full items-center justify-center text-white">
        <Image
          src={`/services/${service.image}.jpg`}
          alt={`${service.name} Services`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black opacity-60" />

        <div className="relative z-10 max-w-4xl px-4 text-center">
          <div className="flex flex-col items-center justify-center px-4 py-8">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              {">"}{" "}
              <Link href="/services" className="hover:underline">
                Services
              </Link>{" "}
              {">"} <span className="font-semibold">{service.name}</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-[52px]">
              {service.name} Services in Nepal
            </h1>

            <p className="mb-8 max-w-[858px] text-base leading-relaxed md:text-lg">
              {service.description}
            </p>

            {/* Hero booking button */}
            <Link
              href={`/book?service=${encodeURIComponent(service.slug)}`}
              className="rounded-lg bg-[#0E4541] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-teal-900"
            >
              Book {service.name} Service
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto max-w-7xl px-5 py-10 text-center">
        <h2 className="mb-5 text-3xl font-bold text-teal-900">
          Comprehensive {service.name} Services
        </h2>

        <p className="mb-6 leading-relaxed text-gray-700">
          {service.longDescription}
        </p>
      </div>

      {/* Scope of Works */}
      <div className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="mb-10 text-center text-3xl font-bold text-teal-900">
          Scope of Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {service.scopeOfWork.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 text-center shadow-md"
            >
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={`/services/${service.image}.jpg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto w-[90%] md:w-[70%]">
        <h2 className="mb-10 text-center text-3xl font-bold text-teal-800">
          Frequently Asked Questions
        </h2>

        <ServiceFaqAccordion faqs={service.faqs} />
      </div>

      {/* Booking CTA */}
      <div className="mx-auto mt-16 w-[90%] md:w-[70%]">
        <CtaBanner
          title={`Ready to Book ${service.name}?`}
          description="Submit your booking request and tell us about your requirements, preferred schedule, and service location. Our team will contact you to confirm the details."
          buttonText={`Book ${service.name} Service`}
          buttonHref={`/book?service=${encodeURIComponent(service.slug)}`}
        />
      </div>
    </div>
  );
}
