"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type MobileDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  TriggerTheme: () => void;
  DarkIcon: boolean;
};

type SocialIconProps = {
  href: string;
  label: string;
  icon: string;
};

type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="mobile-social-icon flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition duration-200 hover:border-[#0D5D59] hover:bg-[#0D5D59]/10"
  >
    <img
      src={icon}
      alt=""
      className="h-5 w-5 object-contain"
      aria-hidden="true"
    />
  </a>
);

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <Link
    href={to}
    onClick={onClick}
    className="group flex min-h-11 items-center justify-between gap-3 rounded-lg px-4 py-3 text2 transition-colors duration-200 hover:bg-[#0D5D59]/10 hover:text-[#0D5D59]"
  >
    <span className="font-medium">{label}</span>

    <span
      aria-hidden="true"
      className="translate-x-0 text-[#0D5D59] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
    >
      →
    </span>
  </Link>
);

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  setIsOpen,
  TriggerTheme,
  DarkIcon,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsOpen(false);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [setIsOpen]);

  // Lock page scrolling while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close drawer with the Escape key.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/feedback", label: "Feedback" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      label: "Facebook",
      path: "/icons/facebook.svg",
    },
    {
      href: "https://www.youtube.com/",
      label: "YouTube",
      path: "/icons/youtube.svg",
    },
    {
      href: "https://www.x.com/",
      label: "X",
      path: "/icons/x.svg",
    },
    {
      href: "https://www.linkedin.com/company/",
      label: "LinkedIn",
      path: "/icons/linkedin.svg",
    },
  ];

  const closeDrawer = () => setIsOpen(false);

  if (!isMobile) return null;

  return (
    <>
      {/* Hamburger / Close Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="building-sewa-mobile-drawer"
        className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-[var(--background)] text2 transition-colors duration-200 hover:border-[#0D5D59] hover:text-[#0D5D59] md:hidden"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 6h18" />
            <path d="M3 12h18" />
            <path d="M3 18h18" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeDrawer}
          className="fixed inset-0 z-[70] cursor-default bg-black/50 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="building-sewa-mobile-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-[80] flex h-[100dvh] w-[min(21rem,88vw)] flex-col overflow-hidden border-r border-gray-200 bg-[var(--background)] text-[var(--foreground)] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-200 px-5 py-4">
          <Link
            href="/"
            onClick={closeDrawer}
            className="block min-w-0"
            tabIndex={isOpen ? 0 : -1}
          >
            <img
              src="/logo/wordmark-logo.svg"
              alt="Building Sewa"
              className="h-auto w-36 max-w-full object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text2 transition-colors hover:bg-[#0D5D59]/10 hover:text-[#0D5D59]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Drawer Content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5">
          {/* Theme Toggle */}
          <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-gray-200 p-3">
            <div>
              <p className="text2 text-sm font-semibold">Appearance</p>
              <p className="text mt-1 text-xs">
                {DarkIcon ? "Light mode" : "Dark mode"}
              </p>
            </div>

            <button
              type="button"
              onClick={TriggerTheme}
              aria-label={
                DarkIcon ? "Switch to dark mode" : "Switch to light mode"
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-[var(--background)] text-xl text2 transition-all duration-200 hover:border-[#0D5D59] hover:bg-[#0D5D59]/10 hover:text-[#0D5D59]"
            >
              {DarkIcon ? "☽" : "☀"}
            </button>
          </div>
          {/* Navigation */}
          <nav aria-label="Main navigation" className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={closeDrawer}
              />
            ))}
          </nav>
          {/* Additional Links */}
          <div className="mt-5 space-y-3 border-t border-gray-200 pt-5">
            <Link
              href="/book"
              onClick={closeDrawer}
              tabIndex={isOpen ? 0 : -1}
              className="flex min-h-11 items-center justify-center rounded-lg bg-[#0D5D59] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0E4541]"
            >
              Book Service
            </Link>

            <Link
              href="/login"
              onClick={closeDrawer}
              tabIndex={isOpen ? 0 : -1}
              className="flex min-h-11 items-center justify-center rounded-lg border border-[#0D5D59] px-5 py-3 text-sm font-semibold text-[#0D5D59] transition-colors duration-200 hover:bg-[#0D5D59]/10"
            >
              Login
            </Link>
          </div>
        
          {/* Social Links */}
          <div className="mt-6 border-t border-gray-200 pt-5">
            <p className="text2 mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em]">
              Connect With Us
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  icon={social.path}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="shrink-0 border-t border-gray-200 px-5 py-3">
          <p className="text text-center text-xs">Building Sewa</p>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;
