"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_IMAGE = "/roadblock/default/default.jpg";
const LOGO_SRC = "/logo/logo.svg"; 
const SEEN_KEY = "roadblock_seen_v3";
const COUNTDOWN_SECONDS = 5;

const PHONE_NUMBER = "+977 98520 24 365";
const WEBSITE_URL = "www.buildingsewa.com";
const OVERLAY_EYEBROW = "Professional Building Services in Nepal";
const OVERLAY_TITLE = "Interior Designing Service";

const AVAILABLE: Record<string, number[]> = {
  january: [1, 4, 24],
  february: [4, 6, 11, 20],
  march: [1, 3, 8, 20, 21, 22, 24],
  april: [2, 7, 22, 23, 25],
  may: [1, 3, 8, 15, 21, 31],
  june: [1, 5, 8, 12, 20, 21],
  july: [11, 30],
  august: [9, 12, 19],
  september: [5, 8, 15, 21, 27],
  october: [1, 5, 10, 16, 24],
  november: [14, 16, 19, 20, 21, 25],
  december: [1, 3, 10, 18],
};

function getRoadblockImage(month: string, day: number): string {
  const days = AVAILABLE[month];

  if (days?.includes(day)) {
    return `/roadblock/${month}/${day}.jpg`;
  }

  return DEFAULT_IMAGE;
}

export default function RoadBlock() {
  const today = new Date();

  const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
  ];

  const month = monthNames[today.getMonth()];
  const day = today.getDate();

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(COUNTDOWN_SECONDS);

  const imgSrc = getRoadblockImage(month, day);
  const isDefaultImage = imgSrc === DEFAULT_IMAGE;
  const usedFallback = useRef(false);

  const handleClose = useCallback(() => {
    document.body.classList.remove("hideScroll");
    document.body.classList.add("showScroll");
    sessionStorage.setItem(SEEN_KEY, "true");
    setShowRoadBlock(false);
  }, [setShowRoadBlock]);

  /*
   * Check sessionStorage only on the client, on first mount.
   */
  useEffect(() => {
    const hasSeenRoadBlock = sessionStorage.getItem(SEEN_KEY);

    if (!hasSeenRoadBlock) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowRoadBlock(true);
    }
  }, []);

  /*
   * Prevent page scrolling while RoadBlock is open.
   */
  useEffect(() => {
    if (!showRoadBlock) return;

    document.body.classList.add("hideScroll");

    return () => {
      document.body.classList.remove("hideScroll");
      document.body.classList.add("showScroll");
    };
  }, [showRoadBlock]);

 
  useEffect(() => {
    if (!showRoadBlock) return;

    const timer = window.setInterval(() => {
      setDisplayTimeLeft((previous) => (previous <= 1 ? 0 : previous - 1));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [showRoadBlock]);

  if (!showRoadBlock) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#D0D0D0] p-4">
      <div className="relative w-full max-w-[550px] overflow-hidden rounded-[16px] bg-white shadow-xl">
        
        <button
          type="button"
          onClick={displayTimeLeft <= 0 ? handleClose : undefined}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-0 text-xl font-bold text-white"
          style={{
            backgroundColor: "#055d59",
            cursor: displayTimeLeft <= 0 ? "pointer" : "not-allowed",
          }}
          aria-label={
            displayTimeLeft <= 0
              ? "Close advertisement"
              : `Advertisement closes in ${displayTimeLeft} seconds`
          }
        >
          {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
        </button>

        <a href="#" target="_blank" rel="noopener noreferrer" className="block">
          
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={imgSrc}
              src={imgSrc}
              alt="Advertisement"
              className="block w-full"
              onError={(event) => {
                const image = event.currentTarget;

                if (!usedFallback.current && imgSrc !== DEFAULT_IMAGE) {
                  usedFallback.current = true;
                  image.src = DEFAULT_IMAGE;
                  return;
                }

                setShowRoadBlock(false);
              }}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                maxHeight: "70vh",
              }}
            />

            {isDefaultImage && (
              <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col justify-start p-6">
                <p className="mb-1 text-sm font-medium text-white drop-shadow-md">
                  {OVERLAY_EYEBROW}
                </p>
                <h2 className="max-w-[70%] text-3xl font-semibold leading-tight text-white drop-shadow-md">
                  {OVERLAY_TITLE}
                </h2>
              </div>
            )}
          </div>

          
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-6 py-4">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt="Building Sewa logo"
                className="h-8 w-8 object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-[#055d59]">
                  Building Sewa
                </span>
                <span className="text-sm text-[#055d59]">{WEBSITE_URL}</span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-[#055d59]">
                24 Hours 365 Days Helpline
              </p>
              <p className="text-lg font-bold text-[#055d59]">{PHONE_NUMBER}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}