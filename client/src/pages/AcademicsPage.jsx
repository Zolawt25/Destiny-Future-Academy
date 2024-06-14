import React from 'react'
import BellSchedule from '../components/BellSchedule'
import Library from '../components/Library'
import SpecialProgram from '../components/SpecialProgram'
import Footer from '../components/Footer'







const AcademicsPage = () => {
  return (
    <div>
      <div className='bg-[image:url(/imgs/banner.png)] bg-cover bg-[#111111a4] bg-blend-darken bg-center py-12'>
        <h1 className='text-center text-gray-200 text-6xl font-semibold mb-3'>#Academics</h1>
        <p className='text-center text-gray-200 text-lg font-semibold'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
      </div>
      <br /><br />
      <div className='px-20'>
        <h2 className='text-center font-bold text-3xl text-gray-900 mb-9'>Curriculum Details</h2>
        <div className='flex items-center text-right'> 
            <div>
                <h3 className='text-3xl font-semibold text-gray-900'>SCHOOL CURRICULUM</h3> 
                <p className='ml-10'>The new curriculum has been implemented from 1st to 8th grade in our academy since the start of the new academic year 2015 EC.</p> 
            </div>
            <div>
                <img src="/imgs/curriculum.jpg" alt="" />
            </div>
        </div>
      </div>
      <br /><br />
      <div>
        <BellSchedule/>
      </div>
      <br /><br />
      <div>
        <Library/>
      </div>
      <br /><br />
      <div>
        <SpecialProgram/>
      </div>
      <br/><br />
      <hr />
      <Footer/>
    </div>
  )
}

export default AcademicsPage
