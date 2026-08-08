"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileDrawer from './MobileDrawer';
//import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DarkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
  const savedTheme = localStorage.getItem('Theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setDarkIcon(false);
    } else {
      document.body.classList.remove('dark');
      setDarkIcon(true);
    }
  }, []);

  const TriggerTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
      setDarkIcon(false);
    }
  };
  // Added Function href handle search
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`); // router.push href search page
      setShowSearch(false); // hide input after search
      setSearchQuery(""); // clear input
    }
  };

  //  Added Handle Enter key href trigger search
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-4 pl-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo/wordmark-logo.svg"
              alt="Sriyog Logo"
              width={800}
              height={600}
              className="w-[230px] md:w-[270px] h-auto"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center spcae-x-0 sm:space-x-4">
          {!showSearch &&
          <div className="space-x-6 hidden lg:block">
          <Link href="/" className="text-[16px] hover:text-teal-700">
            Home
          </Link>
          <Link href="/about" className="text-[16px] hover:text-teal-700">
            About
          </Link>
          <Link href="/services" className="text-[16px] hover:text-teal-700">
            Services
          </Link>
          <Link href="/feedback" className="text-[16px] hover:text-teal-700">
            Feedback
          </Link>
          <Link href="/team" className="text-[16px] hover:text-teal-700">
            Team
          </Link>
          <Link href="/contact" className="text-[16px] hover:text-teal-700">
            Contact
          </Link>

          <Link href="/career">
            <button className="border cursor-pointer text-[16px] border-teal-900 hover:text-black rounded px-4 py-1  hover:bg-teal-50">
              Career
            </button>
          </Link>

          <Link href="/book">
            <button className="bg-teal-900 cursor-pointer text-[16px] border border-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
              Book a Service
            </button>
          </Link>
          </div>
          }
          
          {/* Mobile Notice button*/}
          <div>
            <Link href="/book">
              <button className="bg-[#ebebeb] cursor-pointer sm:hidden border-[1.5px]  border-teal-800 text-black px-4 py-1 rounded hover:bg-teal-800">
                Book a Service
              </button>
            </Link>
          </div>


          {/* Sliding Input */}
          <div className="absolute md:right-52 lg:right-24">
          <div className={`hidden md:flex relative  bg-white ml-2 mr-8 z-20 py-0 border rounded-md  focus:outline-none
                transition-all duration-300 ease-in-out h-8
                ${showSearch ? "sm:w-[250px] lg:w-[550px] opacity-100 px-3 py-1" : "w-0 opacity-0 px-0 py-0 overflow-hidden"}`}>
                  <button onClick={()=>setShowSearch(false)} className="text-black cursor-pointer absolute -top-1.5 left-2 font-bold text-3xl bottom-1 top">
                    ‹
                  </button>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Search..."
                  className={` absolute search left-8 right-0 top-0 bottom-0 border-none outline-none rounded-r-md  focus:outline-none  focus:ring-none
                    transition-all duration-300 ease-in-out 
                    ${showSearch ? "md:w-[300px] lg:w-[517px] opacity-100 " : "w-0 opacity-0 px-0 py-0 overflow-hidden"}`}
                />
          </div>               
          </div>
          {/* SEARCH ICON */}
          {!showSearch && 
          <Image width={22} height={22} alt="search icon" onClick={()=>setShowSearch(true)} src="/icons/search.svg" className="w-[22px] h-[22px] cursor-pointer hidden md:block"/>}
          

          <div className="hidden sm:block">
            <button
              onClick={TriggerTheme}
              className={`text-2xl cursor-pointer ml-2 mr-0 lg:mr-0 rounded-full h-8 w-8 ${
                DarkIcon
                  ? "bg-black text-white rotate-45 pl-1"
                  : "bg-white text-black"
              }`}
            >
              {DarkIcon ? "☽" : "☀︎"}
            </button>
          </div>
          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen}/>
        </nav>
      </div>
    </header>
  );
};

export default Header;











