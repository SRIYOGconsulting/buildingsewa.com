'use client'
import React, { useState } from 'react'

const Sidekick = () => {
  const [show,setShow] = useState(true);
  const [menu,setMenu] = useState(false);
  return (
    <div className='fixed right-0 top-[48%] sm:top-[30%] min-h-screen z-20'>
        {show && 
        <div className='relative cursor-pointer hover:scale-[1.01] transition-all duration-200'>
            <div onClick={()=>{setShow(false);setMenu(true)}} className="hidden sm:flex flex-col justify-center items-center gap-2 rounded-tl-xl rounded-bl-xl sidekick px-3 py-3">
            <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex flex-col items-center justify-center gap-1'>
              <img src="/icons/whatsapp.svg"  alt="" height="26px" width="26px" className=' hover:scale-[1.15] transition-all duration-200'/>
              <p className='text-[9px] font-bold text-[#888888]'>Whatsapp</p>
            </div >
            <img src="/icons/line.svg" className='h-1 w-[52px]' alt="" />
            <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex flex-col items-center justify-center gap-1'>
              <img src="/icons/messenger.svg" alt="" height="26px" width="26px" className=' hover:scale-[1.15] transition-all duration-200'/>
              <p className='text-[9px] font-bold text-[#888888]'>Messenger</p>              
            </div>
            <img src="/icons/line.svg" className='h-1 w-[52px]' alt="" />
            <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex flex-col items-center justify-center gap-1'>
              <img onClick={()=>window.open("https://sriyog.com", "_blank")} src="/icons/signal.svg" alt="" height="26px" width="26px" className=' hover:scale-[1.15] transition-all duration-200'/>
              <p className='text-[9px] font-bold pr-1 text-[#888888]'>Signal</p>                            
            </div>
            <img src="/icons/line.svg" className='h-1 w-[52px]' alt="" />
            <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex flex-col items-center justify-center gap-1'>
              <img onClick={()=>window.open("https://sriyog.com", "_blank")} src="/icons/discord.svg" alt="" height="26px" width="26px" className=' hover:scale-[1.15] transition-all duration-200'/>
              <p className='text-[9px] font-bold text-[#888888]'>Discord</p>                            
            </div>
            <img src="/icons/line.svg" className='h-1 w-[52px]' alt="" />
            <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex flex-col items-center justify-center gap-1'>
              <img onClick={()=>window.open("https://sriyog.com", "_blank")} src="/icons/phone.svg" alt="" height="26px" width="26px" className=' hover:scale-[1.15] transition-all duration-200'/>
              <p className='text-[9px] font-bold text-[#888888]'>Phone</p>                                        
            </div>
         </div>
        </div> }
        {show &&
          <div onClick={()=>{setShow(false);setMenu(true)}} className="flex sm:hidden flex-col justify-center items-center gap-2 rounded-tl-xl rounded-bl-xl sidekick px-5 py-3">
            <div className='flex flex-col items-center justify-center gap-1'>
              <img src="/icons/Frame.svg"  alt="" height="40px" width="40px" className=' hover:scale-[1.15] transition-all duration-200'/>
              <p className='text-[9px] font-bold text-[#888888]'>Support</p>
            </div >
          </div>
          }
            <div className={`absolute top-0 sm:top-14  w-[250px] transition-transform duration-300 ${menu ? "-translate-x-[270px]" : "translate-x-80"}`}>              
            <button onClick={()=>{setMenu(false);setTimeout(()=>setShow(true),200)}} className='absolute top-2 right-4 bg-[#888888] rounded-full p-1'><img src="/icons/cross.svg" className='w-5 h-5' alt="" /></button>
              <div className='flex flex-col justify-center items-center sidekick py-4 rounded-xl w-[250px]'>
                  <div className='flex items-center gap-3 justify-start'>
                    <img src="/icons/info.svg" alt="" className='w-[25px] h-[25px]'/>
                    <p className='text-[#888888] font-semibold'>Quick Contact</p>
                  </div>
                  <div className='my-3 bg-[#888888] w-[225px] h-[1.5px]'></div>
                  <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex items-center gap-3'>
                    <img  src="/icons/phone.svg" alt="" className='cursor-pointer w-[30px] h-[30px] hover:scale-[1.1] transition-all duration-200' />
                    <p  className='text-[#888888] py-2 font-semibold cursor-pointer'>Hotline Number</p>
                  </div>
                  <p onClick={()=>window.open("https://sriyog.com", "_blank")} className='font-semibold text-[#888888] text-center'>+977-01-4548068</p>
                  <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='cursor-pointer flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD]'>
                      <img  src="/icons/email2.svg" alt="" className='h-5 w-5' />
                      <p className='text-xs text-[#888888] pt-1'>info@thecompanyname.com</p>
                  </div>
                  <div className='flex items-center justify-center gap-4 py-2'>
                      <div onClick={()=>window.open("https://sriyog.com", "_blank")} className='flex flex-col justify-center items-center'>
                          <img src="/icons/messenger.svg" alt="" className='cursor-pointer w-7 h-7 hover:scale-[1.1] transition-all duration-200' />
                          <p className='text-[10px] font-semibold text-[#888888]'>Messenger</p>
                      </div>
                      <div className='flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD] cursor-pointer'>
                          <img onClick={()=>window.open("https://sriyog.com", "_blank")} src="/icons/whatsapp.svg" alt="" className='w-4 h-4' />
                          <p onClick={()=>window.open("https://sriyog.com", "_blank")} className='text-xs text-[#888888] pt'>+977 98520-24-365</p>
                      </div>
                  </div>
              </div>
          </div>
          {/*with top-[15%] of above sidekick */}
        {/* <div className='absolute top-[54%] right-4 '>
             <div className="relative flex items-center justify-center group mb-6"> 
                <div className="absolute inset-0 rounded-full bg-[#074842] opacity-0 
                              group-hover:opacity-75 group-hover:animate-ping transition"></div>
                <div className="relative z-10 cursor-pointer bg-[#074842] p-3 rounded-full">
                  <svg width="28px" height="28px" viewBox="0 0 24 24" className='group-hover:rotate-[120deg] transition-transform duration-200' fill="#ebebeb" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#ebebeb"/>
                      <path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="none"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z" fill="none"/>
                    </g>
                  </svg>
                </div> 
              </div> 
              <div className='flex flex-col cursor-pointer items-center justify-center gap-1 bg-[#25D366] p-3 rounded-full animate-bounce'>
                <svg width="28" height="28" viewBox="0 0 277 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.147 135.004C32.147 74.647 81.0757 25.7183 141.432 25.7183C201.789 25.7183 250.718 74.647 250.718 135.004C250.718 195.36 201.789 244.289 141.432 244.289C119.933 244.289 99.92 238.095 83.0349 227.396C79.8925 225.406 76.0419 224.874 72.4774 225.937L35.4599 236.985L49.3975 204.372C51.0449 200.517 50.7097 196.102 48.4993 192.541C38.1343 175.838 32.147 156.14 32.147 135.004ZM141.432 0.00402832C66.8742 0.00402832 6.43274 60.4455 6.43274 135.004C6.43274 158.636 12.516 180.882 23.2065 200.224L1.03854 252.093C-0.92117 256.68 -0.0525181 261.984 3.26732 265.705C6.58715 269.427 11.7594 270.893 16.538 269.466L74.3876 252.203C94.1495 263.53 117.051 270.003 141.432 270.003C215.991 270.003 276.432 209.562 276.432 135.004C276.432 60.4455 215.991 0.00402832 141.432 0.00402832ZM170.907 163.063L154.01 174.965C146.097 170.457 137.347 164.165 128.571 155.389C119.448 146.265 112.684 136.846 107.697 128.206L118.435 119.092C123.043 115.181 124.304 108.587 121.465 103.25L107.783 77.536C105.941 74.0735 102.619 71.6413 98.7614 70.9308C94.904 70.2205 90.9334 71.3096 87.9783 73.8886L83.9218 77.4289C74.1667 85.9428 68.3973 99.9334 73.179 114.099C78.1363 128.785 88.7158 151.898 110.389 173.571C133.706 196.889 157.392 206.071 171.243 209.638C182.403 212.51 192.963 208.66 200.405 202.596L208.01 196.399C211.263 193.749 213.018 189.677 212.712 185.492C212.405 181.307 210.075 177.535 206.47 175.387L184.892 162.53C180.533 159.934 175.056 160.142 170.907 163.063Z" fill="#ebebeb" stroke="#666666" stroke-width="0.008"/>
                </svg>
              </div> 
              </div> */}
    </div>
  )
}

export default Sidekick