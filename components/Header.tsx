"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";
import { Search, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [DarkIcon, setDarkIcon] = useState(true);

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  // Load saved theme after hydration
  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");

    setTimeout(() => {
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
        setDarkIcon(false);
      } else {
        document.body.classList.remove("dark");
        setDarkIcon(true);
      }
    }, 0);
  }, []);

  // Toggle dark/light theme
  const TriggerTheme = () => {
    const isDark = document.body.classList.contains("dark");

    if (isDark) {
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
      setDarkIcon(false);
    }
  };

  // Open search
  const openSearch = () => {
    setShowSearch(true);

    setTimeout(() => {
      document.getElementById("header-search")?.focus();
    }, 100);
  };

  // Close search
  const closeSearch = () => {
    setShowSearch(false);
    setSearchQuery("");
  };

  // Search services
  const handleSearch = () => {
    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    router.push("/search?query=" + encodeURIComponent(query));

    closeSearch();
  };

  // Handle keyboard input
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }

    if (event.key === "Escape") {
      closeSearch();
    }
  };

  return (
    <header className="header">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between py-4 pl-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo/wordmark-logo.svg"
              alt="Building Sewa Logo"
              width={800}
              height={600}
              className="h-auto w-[230px] md:w-[270px]"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3 sm:gap-4">
          {/* Desktop Navigation */}
          {!showSearch && (
            <div className="hidden items-center space-x-6 lg:flex">
              <Link href="/" className="text-[16px] hover:text-teal-700">
                Home
              </Link>

              <Link href="/about" className="text-[16px] hover:text-teal-700">
                About
              </Link>

              <Link
                href="/services"
                className="text-[16px] hover:text-teal-700"
              >
                Services
              </Link>

              <Link
                href="/testimonials"
                className="text-[16px] hover:text-teal-700"
              >
                Testimonials
              </Link>

              <Link href="/team" className="text-[16px] hover:text-teal-700">
                Team
              </Link>

              <Link href="/contact" className="text-[16px] hover:text-teal-700">
                Contact
              </Link>

              <Link
                href="/book"
                className="rounded border border-teal-900 bg-teal-900 px-4 py-1 text-[16px] text-white transition hover:bg-teal-800"
              >
                Book a Service
              </Link>

              <Link
                href="/#"
                className="rounded border border-teal-900 px-4 py-1 text-[16px] transition hover:bg-teal-50 hover:text-black"
              >
                Login
              </Link>
            </div>
          )}

          {/* Search */}
          <div className="flex items-center">
            {showSearch ? (
              <div className="flex h-9 w-[230px] items-center rounded-md border border-gray-400 bg-white px-2 shadow-sm dark:border-gray-600 dark:bg-[#222222] sm:w-[280px] lg:w-[400px]">
                {/* Search Button */}
                <button
                  type="button"
                  onClick={handleSearch}
                  aria-label="Search services"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-gray-800 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <Search className="h-5 w-5" />
                </button>

                {/* Search Input */}
                <input
                  id="header-search"
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Search services..."
                  className="min-w-0 flex-1 bg-transparent px-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
                />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-gray-800 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search services"
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{
                  color: DarkIcon ? "#0E4541" : "#ffffff",
                }}
              >
                <Search
                  className="h-[22px] w-[22px]"
                  strokeWidth={2}
                  style={{
                    display: "block",
                    color: DarkIcon ? "#0E4541" : "#ffffff",
                  }}
                />
              </button>
            )}
          </div>

          {/* Dark / Light Mode */}
          <div className="hidden sm:block">
            <button
              onClick={TriggerTheme}
              aria-label={
                DarkIcon ? "Switch to dark mode" : "Switch to light mode"
              }
              className={`h-8 w-8 cursor-pointer rounded-full text-2xl ${
                DarkIcon
                  ? "rotate-45 bg-black pl-1 text-white"
                  : "bg-white text-black"
              }`}
            >
              {DarkIcon ? "☽" : "☀︎"}
            </button>
          </div>

          {/* Mobile Drawer */}
          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
