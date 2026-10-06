import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

const latestPosts = blogPosts.slice(0, 3);

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
            <div
              key={service.slug}
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col text-center hover:shadow-md transition duration-300"
            >
              {/* Service Image */}
              <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5">{service.description}</p>

              {/* Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block rounded-md bg-[#0E4541] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal-800"
                >
                  Browse More
                </Link>

                <Link
                  href={`/book?service=${encodeURIComponent(service.slug)}`}
                  className="inline-block rounded-md border-2 border-[#0E4541] px-4 py-2 text-sm font-semibold text-[#0E4541] transition-colors duration-200 hover:bg-[#0E4541] hover:text-white"
                >
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
              From Our Blog
            </p>

            <h2 className="text2 mt-2 text-3xl font-bold md:text-4xl">
              Construction Knowledge for Homeowners
            </h2>

            <p className="text mt-4 max-w-3xl leading-7">
              Practical guides on planning, construction, materials, approvals,
              budgeting, design and maintaining your property in Nepal.
            </p>
          </div>

          <Link
            href="/blog"
            className="shrink-0 font-semibold text-[#0E4541] transition hover:underline"
          >
            View All Articles →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex min-h-[310px] flex-col px-6 pb-6 pt-5">
                {/* Category + date */}
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="font-semibold text-[#0E4541]">
                    {post.category}
                  </span>

                  <span className="text-gray-400">•</span>

                  <span className="text-gray-500">{post.publishedAt}</span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-4 text-center text-xl font-bold leading-snug text-[#1F2937] transition hover:text-[#0E4541]">
                    {post.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="mt-3 text-center text-[15px] leading-7 text-gray-600">
                  {post.excerpt}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex justify-center gap-3 pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="rounded-lg bg-[#0E4541] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b3936]"
                  >
                    Read Article
                  </Link>

                  <Link
                    href="/blog"
                    className="rounded-lg border-2 border-[#0E4541] px-5 py-2.5 text-sm font-semibold text-[#0E4541] transition hover:bg-[#0E4541] hover:text-white"
                  >
                    All Articles
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
