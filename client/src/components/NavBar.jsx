import React, { useState } from 'react'







const NavBar = () => {
  const [responsiveNav, setResponsiveNav] = useState(false)
  return ( 
    <div className='sticky top-0 flex justify-center bg-[#F96106]'>
      <div className={`flex items-center justify-between py-2 md:px-20 px-10 shadow-md relative ${!responsiveNav&&"overflow-hidden"} max-w-[1400px] w-full`}>
        <a href="/"><img src="/imgs/logo.png" alt="" className='w-[60px]'/></a>
        <div className={`absolute md:relative top-0 h-screen md:h-auto z-50 bg-[#F96106] md:bg-transparent ${responsiveNav ? "right-0" : "right-[-3000px] md:right-0"} flex flex-col md:flex-row w-[270px] md:w-auto items-center justify-center text-lg md:text-[15px] duration-300 text-gray-50`}>
          <a href="/" className='md:mr-6 mb-6 md:mb-0 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Home</a>
          <a href="/blog" className='md:mr-6 mb-6 md:mb-0 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Blog</a>
          <a href="/academics" className='md:mr-6 mb-6 md:mb-0 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Academics</a>
          <a href="/gallery" className='md:mr-6 mb-6 md:mb-0 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Gallery</a>
          <a href="/about" className='md:mr-6 mb-6 md:mb-0 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>About</a>
          <a href="/contact" className='font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Contact</a>
          <button className='absolute top-7 left-4 text-3xl font-semibold md:hidden' onClick={()=>setResponsiveNav(false)}>x</button>
        </div>
        <button className=' rotate-90 font-bold text-lg md:hidden' onClick={()=>setResponsiveNav(true)}>|||</button>
      </div>
    </div>
  )
}

export default NavBar
