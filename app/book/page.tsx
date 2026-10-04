import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import Ribbon from "@/components/Ribbon";
import { getServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book a Service | Building Sewa",
  description:
    "Book professional construction, design, maintenance, and property services through Building Sewa.",
};

type BookPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export default async function BookPage({
  searchParams,
}: BookPageProps) {
  const { service: serviceSlug } = await searchParams;

  const services = await getServices();

  const selectedService = serviceSlug
    ? services.find((service) => service.slug === serviceSlug)
    : undefined;

  if (serviceSlug && !selectedService) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Ribbon
        name="Book a Service"
        description="Tell us about your requirements and preferred schedule. Our team will review your request and contact you to confirm the details."
      />

      <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <BookingForm
          services={services}
          selectedServiceSlug={selectedService?.slug}
        />
      </div>
    </main>
  );
}