"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <div className="relative w-full bg-[#074842] text-white  ">
          <div className="max-w-7xl mx-auto py-2.5 px-5  md:space-y-0">
            <div className="w-full flex flex-col gap-3 sm:flex-row items-center justify-between md:gap-4">
              <div>
                <p className="text-center text-sm sm:text-[13px] lg:text-sm md:pb-0 px-7">
                  Building Sewa is offering a Dashain Special! Get up to 20% OFF
                  on Professional Plans. Hurry, grab the offer before it ends!
                  Hurry up.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <button className="text-sm flex italic hover:bg-[#ebebeb] hover:text-[#074842] hover:border-none bg-transparent border border-[#ebebeb] px-2 py-1 rounded-md cursor-pointer">
                  Apply Now
                </button>
                <button
                  className="text-sm sm:text-sm hover:bg-[#ebebeb] hover:text-[#074842] hover:border-none bg-transparent border border-[#ebebeb] px-2 py-1 rounded-md cursor-pointer"
                  onClick={() => setVisible(false)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
