'use client'
import { useEffect, useState, useCallback, useRef } from "react";

const DEFAULT_IMAGE = "/roadblock/default/default.jpg";
const SEEN_KEY = "roadblock_seen_v3";

/** Days that have ad images under public/roadblock/{month}/ */
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
  if (!days?.length) return DEFAULT_IMAGE;

  if (days.includes(day)) {
    return `/roadblock/${month}/${day}.jpg`;
  }

  // Prefer the nearest earlier day, otherwise the closest later day
  const earlier = days.filter((d) => d <= day);
  if (earlier.length) {
    return `/roadblock/${month}/${Math.max(...earlier)}.jpg`;
  }

  return `/roadblock/${month}/${Math.min(...days)}.jpg`;
}

const RoadBlock = () => {
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
  ];
  const month = monthNames[today.getMonth()];

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imgSrc] = useState(() => getRoadblockImage(month, day));
  const [displayTimeLeft, setDisplayTimeLeft] = useState(5);
  const usedFallback = useRef(false);

  const onClose = useCallback(() => {
    document.body.classList.remove("hideScroll");
    document.body.classList.add("showScroll");
    sessionStorage.setItem(SEEN_KEY, "true");
    setShowRoadBlock(false);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem(SEEN_KEY)) {
      setShowRoadBlock(true);
    }
  }, []);

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
    const timer = setTimeout(onClose, 20000);
    return () => clearTimeout(timer);
  }, [onClose, showRoadBlock]);

  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = setInterval(() => {
      setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [showRoadBlock]);

  if (!showRoadBlock) return null;

  return (
    <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] flex items-center justify-center">
      <div className="relative">
        <button
          type="button"
          onClick={displayTimeLeft <= 0 ? onClose : undefined}
          className="absolute -top-2.5 -right-2.5 max-[549px]:top-10 max-[549px]:right-0"
          style={{
            backgroundColor: "#055d59",
            borderRadius: "50%",
            border: "0px",
            width: "40px",
            height: "40px",
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: displayTimeLeft <= 0 ? "pointer" : "not-allowed",
          }}
        >
          {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
        </button>

        <a href="#" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={imgSrc}
            src={imgSrc}
            onError={(e) => {
              if (!usedFallback.current && imgSrc !== DEFAULT_IMAGE) {
                usedFallback.current = true;
                e.currentTarget.src = DEFAULT_IMAGE;
              } else {
                setShowRoadBlock(false);
              }
            }}
            style={{
              borderRadius: "3%",
              objectFit: "contain",
              height: "550px",
              width: "550px",
              maxWidth: "90vw",
              maxHeight: "80vh",
            }}
            alt="Advertisement"
          />
        </a>
      </div>
    </div>
  );
};

export default RoadBlock;
