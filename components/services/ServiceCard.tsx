import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card rounded-xl shadow-md overflow-hidden w-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          fill
          src={`/services/${service.image}.jpg`}
          alt={service.name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="card2 p-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-xs font-medium text-[#0E4541]">
            {service.category}
          </span>

          <span className="text-xs text">
            View Details →
          </span>
        </div>

        <h2 className="text-lg font-semibold text2">
          {service.name}
        </h2>

        <p className="text-sm text mt-3 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        <div className="mt-5 pt-4 border-t border-zinc-200">
          <span className="text-sm font-medium text-[#0E4541]">
            {service.priceFrom}
          </span>
        </div>
      </div>
    </Link>
  );
}