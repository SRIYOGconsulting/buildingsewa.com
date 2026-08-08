'use client'
import React, { useEffect, useState } from 'react'

const BacktoTop = () => {
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setScrolled(true)
      }else{
        setScrolled(false);
    }}
    window.addEventListener('scroll', handleScroll);
    return ()=>{removeEventListener('scroll',handleScroll)}
  },[])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {scrolled &&
    <div className='fixed top-[67%] sm:top-[80%] right-4 z-20 rounded-full bg-[#888888] scale-[0.8] border-2 border-[#ebebeb]'>
      <div>
        <img onClick={scrollToTop} src="/icons/next-arrow.svg" className='h-12 w-12 -rotate-90 cursor-pointer hover:scale-[1.1] transition-all duration-200' alt="" />
      </div>
    </div>}
    </>
  )
}

export default BacktoTop
