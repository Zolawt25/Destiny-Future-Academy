import React from 'react'
import BellSchedule from '../components/BellSchedule'
import Library from '../components/Library'
import SpecialProgram from '../components/SpecialProgram'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'







const AcademicsPage = () => {
  return (
    <div>
      <div className='bg-[image:url(/imgs/banner.png)] bg-cover bg-[#111111a4] bg-blend-darken bg-center py-12'>
        <h1 className='text-center text-gray-200 text-5xl sm:text-6xl font-semibold mb-3'>#Academics</h1>
        <p className='text-center text-gray-200 text-[14px] sm:text-lg font-semibold'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
      </div>
      <br /><br />
      <div>
        <BellSchedule/>
      </div>
      <br /><br />
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-7 sm:px-28 md:px-16 lg:px-32 max-w-[1400px] w-full'>
          <Link to="/library" className=' bg-gray-50 hover:scale-105 duration-100 shadow-lg'>
                <div className='overflow-hidden rounded shadow-lg'>
                    <img src="/imgs/library.png" alt="" className='aspect-[2/1] w-full'/>
                </div>
                <div className='px-4 py-3'>
                    <h2 className='text-2xl sm:text-3xl font-semibold text-gray-900 py-1'>Our Library and Resources</h2>
                </div>
                
            </Link>
            <Link to="/special" className=' bg-gray-50 hover:scale-105 duration-100 shadow-lg'>
                <div className='overflow-hidden rounded shadow-lg'>
                    <img src="/imgs/special_kids.png" alt="" className='aspect-[2/1] w-full'/>
                </div>
                <div className='px-4 py-3'>
                    <h2 className='text-2xl sm:text-3xl font-semibold text-gray-900 py-1'>Our Special Academic Programs</h2>
                </div>
            </Link>
          </div>
      </div>
      <br/><br />
      <hr />
      <Footer/>
    </div>
  )
}

export default AcademicsPage
