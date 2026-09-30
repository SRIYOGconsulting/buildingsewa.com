import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import { getServices, getServiceBySlug } from "@/lib/services";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="flex flex-col gap-0 mb-40">
      {/* Hero */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <Image
          src={`/services/${service.image}.jpg`}
          alt={`${service.name} Services`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10" />

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center px-4 py-8">
            <div className="mb-4 text-sm text-white opacity-90">
              <Link href="/" className="hover:underline">Home</Link> {" > "}
              <Link href="/services" className="hover:underline">Services</Link> {" > "}
              <span className="font-semibold">{service.name}</span>
            </div>

            <h1 className="mb-4 text-4xl sm:text-5xl font-bold md:text-[52px]">
              {service.name} Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              {service.description}
            </p>

            <Link href="#book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book {service.name} Service
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Comprehensive {service.name} Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {service.longDescription}
        </p>
      </div>

      {/* Scope of Works */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {service.scopeOfWork.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-md p-5 text-center"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/services/${service.image}.jpg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="w-[90%] md:w-[70%] mx-auto">
        <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
          Frequently Asked Questions
        </h2>
        <ServiceFaqAccordion faqs={service.faqs} />
      </div>

      {/* Booking form */}
      <div id="book" className="w-[90%] md:w-[70%] mx-auto mt-16">
        <BookingForm serviceSlug={service.slug} serviceName={service.name} />
      </div>
    </div>
  );
}