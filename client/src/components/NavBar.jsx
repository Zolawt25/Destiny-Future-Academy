import React from 'react'







const NavBar = () => {
  return (
    <div className='sticky top-0'>
      <div className='flex items-center justify-between py-2 px-20 bg-gray-300 shadow-md'>
        <a href="/"><img src="/imgs/logo.png" alt="" className='w-[60px]'/></a>
        <div>
            <a href="/" className='mr-6 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Home</a>
            <a href="/blog" className='mr-6 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Blog</a>
            <a href="/academics" className='mr-6 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Academics</a>
            <a href="/gallery" className='mr-6 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Gallery</a>
            <a href="/about" className='mr-6 font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>About</a>
            <a href="/contact" className='font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
