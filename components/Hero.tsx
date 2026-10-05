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
    <section className="w-full min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
      <div className="hidden sm:block absolute inset-0 -z-10">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          speed={1000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide}>
              <div className="relative w-full h-full">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6">
        <div className="relative block sm:hidden w-full h-[300px]">
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

        <div className="flex flex-col justify-start text-left z-10 w-full sm:w-1/2 mt-4 px-6 sm:mt-0">
          <div className="text-[23px] md:text-2xl font-semibold mb-3 text-[#17233A] drop-shadow-sm">
            Welcome to
          </div>

          <div className="font-bold text-2xl sm:text-3xl md:text-5xl mb-6 text-[#17233A] drop-shadow-sm">
            Building Sewa
          </div>

          <h1 className="text-[18px] max-w-[600px] leading-relaxed text-[#26364D] drop-shadow-sm">
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
              href="/services"
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
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white text-2xl transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white text-2xl transition-colors"
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}
