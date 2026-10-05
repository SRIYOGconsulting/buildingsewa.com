import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getServices } from "@/lib/services";
import Ribbon from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "Search Services | Building Sewa",
  description:
    "Search and find professional building and property services from Building Sewa.",
};

type SearchPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { query } = await searchParams;

  const searchQuery = query?.trim() ?? "";

  const services = await getServices();

  const results = searchQuery
    ? services.filter((service) => {
        const searchableText = `
          ${service.name}
          ${service.description}
          ${service.longDescription}
          ${service.slug}
        `.toLowerCase();

        return searchableText.includes(searchQuery.toLowerCase());
      })
    : [];

  return (
    <main className="min-h-screen">
      <Ribbon
        name="Search Services"
        description="Find the right professional service for your property needs."
      />

      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        {!searchQuery ? (
          <div className="py-16 text-center">
            <h2 className="text-2xl font-bold text2">
              Search for a service
            </h2>

            <p className="mt-3 text">
              Use the search button in the header to find a service.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text2 md:text-3xl">
                Search Results
              </h2>

              <p className="mt-2 text">
                Results for:{" "}
                <span className="font-semibold">
                  "{searchQuery}"
                </span>
              </p>
            </div>

            {results.length === 0 ? (
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-12 text-center dark:border-gray-700 dark:bg-[#222222]">
                <h3 className="text-xl font-semibold text2">
                  No services found
                </h3>

                <p className="mt-2 text">
                  Try searching with a different service name or
                  keyword.
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-block rounded-lg bg-[#0E4541] px-5 py-2.5 font-semibold text-white transition hover:bg-teal-900"
                >
                  View All Services
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((service) => (
                  <div
                    key={service.slug}
                    className="card overflow-hidden rounded-xl shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={`/services/${service.image}.jpg`}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text2">
                        {service.name}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm text">
                        {service.description}
                      </p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-5 inline-block rounded-md bg-[#0E4541] px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-900"
                      >
                        View Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

