import React from 'react'







const SpecialProgram = () => {
  return (
    <div className='flex justify-center'>
        <div className='md:px-20 sm:px-10 px-5  max-w-[1400px] w-full'>
          <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Special Academic Programs</h2>
          <div className='flex items-center gap-6 flex-col lg:flex-row text-center lg:text-left'>
              <div className="md:w-[500px]">
                  <img src="/imgs/special_kids.png" alt="" className=' rounded shadow-lg'/>
              </div>
              <div className="flex-1 lg:pr-24">
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Inclusive Education Program</h1>
                  <p className='text-gray-700 mt-2'>Our Inclusive Education Program integrates students with special needs into mainstream classrooms, providing them with the support they need to thrive alongside their peers. Special education teachers and aides work collaboratively with general education teachers to ensure all students receive a high-quality education.</p>
              </div>
            </div>
            <br /><br /><br />
            <div className='flex items-center gap-6 flex-col lg:flex-row-reverse text-center lg:text-end'>
              <div className="md:w-[500px]">
                  <img src="/imgs/autism_kids.png" alt="" className=' rounded shadow-lg'/>
              </div>
              <div className="flex-1 lg:pl-24">
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Autism Support Program</h1>
                  <p className='text-gray-700 mt-2'>Our Autism Support Program provides a structured and nurturing environment for students on the autism spectrum. The program focuses on developing communication, social skills, and academic abilities through evidence-based practices.</p>
              </div>
            </div>
            <br /><br /><br />
            <div className='flex items-center gap-6 flex-col lg:flex-row text-center lg:text-left'>
              <div className="md:w-[500px]">
                  <img src="/imgs/blind_kids.png" alt="" className=' rounded shadow-lg'/>
              </div>
              <div className="flex-1 lg:pr-24">
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Vision Support Program</h1>
                  <p className='text-gray-700 mt-2'>Our Vision Support Program is dedicated to providing comprehensive educational services for students who are blind or visually impaired. The program ensures that these students have equal access to the curriculum and school activities through specialized instruction and resources.</p>
              </div>
            </div>
      </div>
    </div>
    
  )
}

export default SpecialProgram
