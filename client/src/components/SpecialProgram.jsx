import React from 'react'







const SpecialProgram = () => {
  return (
    <div className='px-20'>
        <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Special Academic Programs</h2>
        <div className='flex items-center gap-6 flex-row-reverse'>
        <div className="w-[500px]">
            <img src="/imgs/laboratory.png" alt="" className=' rounded shadow-lg'/>
        </div>
        <div className="flex-1 pl-24">
            <h1 className="text-4xl font-bold text-gray-900 text-end">We have special classes for our special students.</h1>
            <p className='text-gray-700 mt-2 text-end'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores quidem modi debitis, asperiores harum id temporibus suscipit aperiam eos accusantium tenetur maxime dolorum excepturi alias! Libero.</p>
        </div>
      </div>
    </div>
  )
}

export default SpecialProgram
