import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Sewa | Construction Management in Nepal",
  description:
    "End-to-end construction management connecting homeowners with verified architects, engineers, and contractors across Nepal.",
};

const topServices = [
  {
    title: "Architecture & House Design",
    description: "Custom architectural plans tailored to your site and vision.",
    img: "/home/topservices/1.jpg",
    slug: "architecture-house-design",
  },
  {
    title: "Electrical Services",
    description:
      "Safe, code-compliant electrical wiring and fixture installation.",
    img: "/home/topservices/2.jpg",
    slug: "electrical-services",
  },
  {
    title: "Interior Designing",
    description: "Detailed finishing work that brings your space to life.",
    img: "/home/topservices/3.jpg",
    slug: "interior-designing",
  },
];

const PARTNER_COUNT = 8;
const partnerLogos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Partners */}
      <section
        className="overflow-hidden bg-white py-10 border-y border-zinc-100"
        aria-label="Partner organizations"
      >
        <div className="flex w-max gap-16 animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="relative h-12 w-28 flex-shrink-0 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
              aria-hidden={i >= PARTNER_COUNT}
            >
              <Image
                src={`/partners/${n}.png`}
                alt={i < PARTNER_COUNT ? `Partner ${n}` : ""}
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Top Services */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Top Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {topServices.map((service) => (
            <Link
              key={service.slug}
              href={`/book?service=${encodeURIComponent(service.slug)}`}
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition duration-300"
            >
              <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/blog"
            className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </>
  );
}
