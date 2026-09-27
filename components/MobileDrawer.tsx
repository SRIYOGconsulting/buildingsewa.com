"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type MobileDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
    className="flex items-center justify-center w-9 h-9 rounded-full card hover:opacity-80 transition-opacity"
    aria-label={label}
  >
    <img
      src={icon}
      alt={label}
      className="w-5 h-5 dark:invert"
      aria-hidden="true"
    />
  </a>
);

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <Link
    href={to}
    onClick={onClick}
    className="group flex items-center space-x-3 p-2 rounded-lg text2 transition-all duration-200 hover:card"
  >
    <span className="font-medium">{label}</span>
    <span className="flex-1"></span>
    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </Link>
);

const MENU_BREAKPOINT = 768;

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < MENU_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [setIsOpen]);

  // Scroll-lock driven purely by isOpen, so it can never get stuck locked
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    { href: "https://www.x.com/", label: "Instagram", path: "/icons/x.svg" },
    {
      href: "https://www.linkedin.com/company/",
      label: "LinkedIn",
      path: "/icons/linkedin.svg",
    },
  ];

  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  if (!isMobile) return null;

  return (
    <>
      {/* HAMBURGER / CLOSE TOGGLE */}
      <div className="relative w-full">
        <button
          onClick={toggleDrawer}
          className="md:hidden block z-50 p-2 rounded card text2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeDrawer} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 sidekick transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-opacity-10 border-gray-300">
            <Link href="/" onClick={closeDrawer} className="block">
              <img
                src="/logo/wordmark-logo.svg"
                alt="Building Sewa"
                className="w-40 h-auto"
              />
            </Link>
            <button
              onClick={closeDrawer}
              className="text-2xl p-1 -mr-2 text2"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={closeDrawer}
              />
            ))}

            <div className="pt-4 space-y-2">
              <Link href="/career" onClick={closeDrawer} className="block">
                <button className="w-full border text2 rounded-lg px-6 py-2.5 hover:card transition-colors duration-200">
                  Career
                </button>
              </Link>

              <Link href="/notice" onClick={closeDrawer} className="block">
                <button className="w-full bg-teal-900 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors duration-200">
                  Notice
                </button>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-opacity-10 border-gray-300">
              <p className="text-xs font-medium text-center opacity-70 mb-3 text2">
                Connect With Us
              </p>
              <div className="flex flex-wrap justify-center gap-3 px-2">
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
