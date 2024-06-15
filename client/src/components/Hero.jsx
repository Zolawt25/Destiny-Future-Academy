import React from 'react'








const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-[89vh] flex flex-col items-center justify-center bg-[image:url(/imgs/hero.png)] bg-cover bg-[#111111a4] bg-blend-darken bg-center w-full'>
        <h1 className='text-center md:text-6xl text-4xl font-semibold text-gray-300'>Destiny Future Academy</h1>
        <p className='text-center md:text-4xl text-2xl font-semibold my-3 text-gray-300'>Education Opens up the Mind</p>
        <p className='text-center md:text-lg font-semibold text-gray-300'>Develop a passion for learning. If you do, you will never cease to grow</p>
        <a href="#overview" className="bg-gray-300 font-semibold px-6 py-2 rounded-full mt-3">Explore More</a>
      </div>
    </div>
    
  )
}

export default Hero
