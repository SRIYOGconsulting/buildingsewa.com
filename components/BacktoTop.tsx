"use client";

import React, { useEffect, useState } from "react";

const BacktoTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-4
            right-4
            z-50
            translate-y-[250px]
            h-11
            w-11
            rounded-full
            bg-white
            border
            border-[#0E4541]/20
            shadow-md
            flex
            items-center
            justify-center
            hover:bg-[#0E4541]
            hover:border-[#0E4541]
            transition-all
            duration-300
            group
          "
          aria-label="Back to top"
        >
          <img
            src="/icons/next-arrow.svg"
            alt="Back to top"
            className="
              h-6
              w-6
              -rotate-90
              opacity-80
              group-hover:brightness-0
              group-hover:invert
              transition-all
              duration-300
            "
          />
        </button>
      )}
    </>
  );
};

export default BacktoTop;
