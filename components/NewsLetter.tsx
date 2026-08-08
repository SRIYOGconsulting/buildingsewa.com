'use client'

import { useEffect, useRef } from "react";

const NewsLetter = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js";
    script.async = true;
    script.setAttribute("data-button-color", "#064706");
    script.setAttribute("data-button-text-color", "#FFFFFF");
    script.setAttribute("data-site", "https://biratinfo.com/");
    script.setAttribute("data-locale", "en");
    container.appendChild(script);
  }, []);

  return (
    <section className="bg-teal-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-white font-semibold italic text-3xl sm:text-4xl text-left md:pl-8">
          Join our Newsletter
        </h2>

        <div
          ref={formRef}
          className="ml-auto w-full max-w-[440px]"
          style={{ minHeight: 58 }}
        />
      </div>
    </section>
  );
};

export default NewsLetter;
