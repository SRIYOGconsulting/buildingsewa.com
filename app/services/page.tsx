import Ribbon from "@/components/Ribbon";
import ServiceCard from "@/components/services/ServiceCard";
import { getServices } from "@/lib/services";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="relative">
      <Ribbon
        name="Professional Building Services in Nepal"
        description="From site inspection and construction to interior finishing and home automation, one team for every stage of your property."
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-16">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text2">
            Explore Our Services
          </h1>

          <p className="text mt-3">
            Browse our range of professional building, construction,
            maintenance, interior, and home improvement services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
            />
          ))}
        </div>
      </section>
    </div>
  );
}