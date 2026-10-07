import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Hero from "@/components/Hero";
import { blogPosts } from "@/data/blogPosts";

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
      {/*HERO */}
      <Hero />

      {/*PARTNERS */}

      <section
        className="overflow-hidden border-y border-zinc-100 bg-white py-10"
        aria-label="Partner organizations"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text mb-7 text-center text-sm font-semibold uppercase tracking-[0.18em]">
            Our Partners
          </p>

          <div className="relative overflow-hidden">
            <div className="animate-scroll flex w-max items-center gap-12">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex h-16 w-32 shrink-0 items-center justify-center"
                >
                  <Image
                    src={`/partners/${logo}.png`}
                    alt={`Partner ${logo}`}
                    width={120}
                    height={60}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOP SERVICES */}

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text mb-2 text-sm font-semibold uppercase tracking-[0.18em]">
            What We Offer
          </p>

          <h2 className="text2 text-3xl font-bold md:text-4xl">Top Services</h2>

          <p className="text mx-auto mt-4 max-w-2xl leading-7">
            Explore our most requested construction and property services,
            designed to make your project easier to plan and manage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {topServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group card block cursor-pointer rounded-xl border border-gray-200 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Service Image */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Service Title */}
              <h3 className="text2 mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-[#0E4541]">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text mb-5 leading-7">{service.description}</p>

              {/* Browse More */}
              <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0E4541] px-5 py-2.5 text-sm font-semibold text-[#0E4541] transition duration-300 group-hover:bg-[#0E4541] group-hover:text-white">
                Browse More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* View All Services */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0E4541] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b3936]"
          >
            View All Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>


      {/*LATEST BLOG*/}

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text mb-2 text-sm font-semibold uppercase tracking-[0.18em]">
            From Our Blog
          </p>

          <h2 className="text2 text-3xl font-bold md:text-4xl">
            Latest Articles
          </h2>

          <p className="text mx-auto mt-4 max-w-2xl leading-7">
            Practical guides and insights to help you plan, build, design, and
            maintain your property.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card block overflow-hidden rounded-xl border border-gray-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Blog Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="rounded-full bg-[#0E4541]/10 px-3 py-1 font-medium text-[#0E4541]">
                    {post.category}
                  </span>

                  <span className="text">•</span>

                  <span className="text">{post.publishedAt}</span>
                </div>

                <h3 className="text2 mt-4 text-center text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-[#0E4541]">
                  {post.title}
                </h3>

                <p className="text mt-3 text-center text-[15px] leading-7">
                  {post.excerpt}
                </p>

                <div className="mt-5 text-center">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E4541]">
                    Read More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blog */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-[#0E4541] px-6 py-3 font-semibold text-[#0E4541] transition duration-300 hover:bg-[#0E4541] hover:text-white"
          >
            View All Articles
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
