"use client";

import Link from "next/link";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <NewsLetter />
      <footer className="relative footer pt-16 pb-10 border-t z-10">
        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[45%]">
            <div className="mb-6">
              <Link
                href="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src="/logo/wordmark-logo.svg"
                  alt="Sriyog Logo"
                  className="w-[350px] h-auto"
                />
              </Link>
            </div>

            <p className="text-[15px] leading-relaxed  mb-4">
              Building Sewa is a professional construction management startup in
              Nepal dedicated to transforming your dream home into reality.
            </p>

            <p className="text-[15px] leading-relaxed ">
              We provide end-to-end building construction services, guiding
              homeowners through every stage from initial concept and
              architectural design to construction, interior finishing,
              handover, and long-term maintenance. Our mission is to simplify
              the building process by bringing together experienced architects,
              engineers, project managers, skilled craftsmen, and trusted
              contractors under one organized platform.
            </p>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 pt-6">
            {/* Browse More */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Browse More</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/vmgo" className="hover:text-green-700">
                    Mission & Vision
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/history" className="hover:text-green-700">
                    History
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/why" className="hover:text-green-700">
                    Why Us
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/certificates" className="hover:text-green-700">
                    Certificates
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/timeline" className="hover:text-green-700">
                    Timeline
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Resources</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/gallery" className="hover:text-green-700">
                    Gallery
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/career" className="hover:text-green-700">
                    Career
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/qr" className="hover:text-green-700">
                    QR Code
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/glossary" className="hover:text-green-700">
                    Glossary
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/message" className="hover:text-green-700">
                    Message
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Links</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/calendar" className="hover:text-green-700">
                    Calendar
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/faq" className="hover:text-green-700">
                    FAQ
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/payment" className="hover:text-green-700">
                    Payment
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/internship" className="hover:text-green-700">
                    Internship
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Explore</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/videos" className="hover:text-green-700">
                    Videos
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <a
                    href="https://trello.com"
                    target="_blank"
                    className="hover:text-green-700"
                  >
                    Trello Board
                  </a>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/location" className="hover:text-green-700">
                    Location
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/refund" className="hover:text-green-700">
                    Refund Policy
                  </Link>
                </li>
                <li className={`py-1 cursor-pointer `}>
                  <Link href="/cookie" className="hover:text-green-700">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SOCIAL + CONTACT SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">
          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110"
            >
              <img
                src={`/icons/x.svg`}
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer"
              />
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110"
            >
              <img
                src={`/icons/linkedin.svg`}
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer"
              />
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110 "
            >
              <img
                src={`/icons/youtube.svg`}
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer"
              />
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110"
            >
              <img
                src={`/icons/trello.svg`}
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer"
              />
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110"
            >
              <img
                src={`/icons/signal.svg`}
                className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] cursor-pointer"
              />
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110"
            >
              <img
                src={`/icons/discord.svg`}
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer"
              />
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-60 transition hover:scale-110"
            >
              <img
                src={`/icons/viber.svg`}
                className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] cursor-pointer"
              />
            </a>
          </div>

          {/* CONTACT BOXES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* EMAIL + PHONE */}
            <a
              href="mailto:info@buildingSewa.com"
              className={`flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto `}
            >
              <img src="/icons/1.svg" alt="email" className="h-6 w-6" />
              <span className="text-sm">info@buildingSewa.com</span>
            </a>

            <a
              href="tel:+977014548068"
              className={`flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto `}
            >
              <img src="/icons/phone.svg" alt="phone" className="h-6 w-6" />
              <span className="text-sm">+977-01-4548068</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/9779852024365"
              target="_blank"
              className={`flex items-center gap-2 border-2 rounded-lg px-6 py-3 w-full sm:w-auto `}
            >
              <img
                src="/icons/whatsapp.png"
                alt="whatsapp"
                className="h-6 w-6"
              />
              <span className="text-sm">+977 98520-24-365</span>
            </a>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="w-full border-t  mt-14 mb-6"></div>

        {/* FOOTER BOTTOM */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-12 flex flex-col lg:flex-row justify-center items-center lg:justify-between text-[13px]  gap-3 text-center md:text-left font-semibold">
          <p className="flex flex-col md:flex-row gap-4 md:gap-1 items-center">
            <span>All Rights Reserved. © 2018-{currentYear}</span>
            <span>Building Sewa</span>
            <span>
              Built with :{" "}
              <a
                href="https://broadpress.org"
                target="_blank"
                className="hover:border-b hover:border-black text-gray-500"
              >
                BroadPress
              </a>
            </span>
          </p>

          <div className="flex gap-4 justify-center md:justify-end font-semibold mt-2 lg:mt-0">
            <Link href="/privacy" className={` cursor-pointer `}>
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/disclaimer" className={` cursor-pointer `}>
              Disclaimer
            </Link>
            <span>|</span>
            <Link href="/tos" className={` cursor-pointer `}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
