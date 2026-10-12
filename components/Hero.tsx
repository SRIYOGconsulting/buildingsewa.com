"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = ["/home/hero/1.jpg", "/home/hero/2.jpg"];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative flex min-h-[450px] w-full flex-col items-start justify-between overflow-hidden sm:min-h-[600px] sm:flex-row sm:items-center">
      {/* Desktop background slider */}
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={1800}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide}>
              <div className="relative h-full min-h-[600px] w-full">
                <Image
                  src={slide}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      {/* Main content container */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between sm:flex-row sm:items-center sm:px-6">
        {/* Mobile background image */}
        <div className="relative block h-[clamp(220px,65vw,300px)] w-full sm:hidden">
          <Image
            src="/home/hero/1.jpg"
            alt="Building Sewa"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Hero text and buttons */}
        <div className="relative z-10 mt-4 flex w-full flex-col justify-start px-4 text-left sm:mt-0 sm:w-1/2 sm:px-0">
          <div className="mb-3 text-[20px] font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:mb-3 sm:text-[23px] md:text-2xl">
            Welcome to
          </div>

          <div className="mb-6 text-2xl font-bold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)] sm:text-3xl md:text-5xl">
            Building Sewa
          </div>

          <h1 className="max-w-[600px] text-[16px] leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] sm:text-[18px]">
            Engineered with Excellence
          </h1>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/about"
              className="inline-block cursor-pointer rounded-md border-2 border-[#0D5D59] px-5 py-2 text-sm font-semibold text-[#0D5D59] transition duration-300 hover:bg-[#0D5D59] hover:text-white sm:px-6 sm:text-base"
            >
              About
            </Link>

            <Link
              href="/services"
              className="inline-block cursor-pointer rounded-md border-2 border-[#0D5D59] px-5 py-2 text-sm font-semibold text-[#0D5D59] transition duration-300 hover:bg-[#0D5D59] hover:text-white sm:px-6 sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition-colors hover:bg-black/60 sm:flex"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition-colors hover:bg-black/60 sm:flex"
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}
