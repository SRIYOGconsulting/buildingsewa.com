import Image from "next/image";
import Link from "next/link";

const PARTNER_COUNT = 14;
const partnerLogos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

export default function Home() {
  return (
    <>
      <section className="w-full min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
        {/* Desktop background */}
        <div className="hidden sm:block absolute inset-0 -z-10">
          <Image
            src="/home/hero/1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6">
          {/* Mobile image */}
          <div className="relative block sm:hidden w-full h-[300px]">
            <Image
              src="/home/hero/1.jpg"
              alt="SRIYOG Consulting"
              fill
              className="object-cover"
              sizes="(max-width: 639px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-start text-left z-10 w-full sm:w-1/2 mt-4 px-6 sm:mt-0">
            <div className="text-[23px] md:text-2xl font-semibold mb-3 opacity-90">
              Welcome to
            </div>

            <div className="font-bold text-3xl md:text-5xl mb-6">
              SRIYOG Consulting
            </div>

            <h1 className="text-[18px] max-w-[600px] leading-relaxed opacity-95">
              Professional consulting in Kathmandu, Nepal.
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
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS — homepage only */}
      <section
        className="py-8 sm:py-10 bg-gray-50 overflow-hidden"
        aria-label="Partner organizations"
      >
        <div className="flex w-max animate-scroll gap-10 sm:gap-14 items-center">
          {[...partnerLogos, ...partnerLogos].map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="relative h-10 sm:h-12 w-[120px] sm:w-[140px] shrink-0"
              aria-hidden={i >= PARTNER_COUNT}
            >
              <Image
                src={`/partners/${n}.png`}
                alt={i < PARTNER_COUNT ? `Partner ${n}` : ""}
                fill
                sizes="140px"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
