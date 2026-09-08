"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Partners from "@/components/Partners";
import { blogPosts } from "@/data/blogPosts";

const slides = ["/home/hero/3.jpg", "/home/hero/2.jpg"];

const topServices = [
  {
    title: "Architectural Design",
    description: "Custom architectural plans tailored to your site and vision.",
    img: "/home/topservices/1.jpg",
  },
  {
    title: "Electrical Services",
    description:
      "Safe, code-compliant electrical wiring and fixture installation.",
    img: "/home/topservices/2.jpg",
  },
  {
    title: "Interior Finishing",
    description: "Detailed finishing work that brings your space to life.",
    img: "/home/topservices/3.jpg",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="w-full min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
        <div className="hidden sm:block absolute inset-0 -z-10">
          <Image
            src={slides[current]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6">
          <div className="relative block sm:hidden w-full h-[300px]">
            <Image
              src="/home/hero/1.jpg"
              alt="SRIYOG Consulting"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-start text-left z-10 w-full sm:w-1/2 mt-4 px-6 sm:mt-0">
            <div className="text-[23px] md:text-2xl font-semibold mb-3 opacity-90">
              Welcome to
            </div>
            <div className="font-bold text-3xl md:text-5xl mb-6">
              Building Sewa
            </div>
            <h1 className="text-[18px] max-w-[600px] leading-relaxed opacity-95">
              Engineered with Excellence
            </h1>
            <div className="mt-8 flex gap-4">
              <Link
                href="/about"
                className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
              >
                About
              </Link>
              <Link
                href="/book"
                className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-4xl text-white hover:opacity-70"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-4xl text-white hover:opacity-70"
            >
              ›
            </button>
          </>
        )}
      </section>

      <Partners />

      {/* Top Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text2 text-center mb-10">
          Top Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topServices.map((service) => (
            <div
              key={service.title}
              className="card rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 card2">
                <h3 className="text-lg font-semibold text2 mb-2">
                  {service.title}
                </h3>
                <p className="text text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text2 text-center mb-10">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 card2">
                <h3 className="text-lg font-semibold text2 mb-2">
                  {post.title}
                </h3>

                <p className="text text-sm">{post.excerpt}</p>
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
