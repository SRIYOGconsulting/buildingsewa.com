'use client'
import React, { useState } from 'react'

const Navbar = () => {
  const [visible ,setVisible] = useState(true);
  return (
    <>
    {visible && 
    <div className='relative w-full bg-[#074842] text-white  '>
    <div className='max-w-7xl mx-auto py-2.5 px-5  md:space-y-0'>
        <div className='w-full flex flex-col gap-3 sm:flex-row items-center justify-between md:gap-4'>
             <div>
             <p className='text-center text-sm sm:text-[13px] lg:text-sm md:pb-0'>Grab a limited time offer. get upto USD 120 credits in professional plans. Hurry up.</p>
             </div>
             <div className='flex gap-3 items-center'> 
    
             <button className='text-sm flex italic hover:bg-[#ebebeb] hover:text-[#074842] hover:border-none bg-transparent border border-[#ebebeb] px-2 py-1 rounded-md cursor-pointer'>Apply Now</button>
             <button className='text-sm sm:text-sm hover:bg-[#ebebeb] hover:text-[#074842] hover:border-none bg-transparent border border-[#ebebeb] px-2 py-1 rounded-md cursor-pointer' onClick={()=>setVisible(false)}>
              X
            </button>
            </div>
        
        </div>
    </div>
    </div>}
    </>
  )
}

export default Navbar