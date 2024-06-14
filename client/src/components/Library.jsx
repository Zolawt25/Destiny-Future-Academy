import React from 'react'








const Library = () => {
  return (
    <div className='px-20'>
        <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Library and Resources</h2>
        <div className='flex items-center gap-6'>
            <div className="w-[500px]">
                <img src="/imgs/library.png" alt="" className=' rounded shadow-lg'/>
            </div>
            <div className="flex-1 pr-24">
                <h2 className="text-4xl font-bold text-gray-900">We have the best library for all greade students and more.</h2>
                <p className='text-gray-700 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores quidem modi debitis, asperiores harum id temporibus suscipit aperiam eos accusantium tenetur maxime dolorum excepturi alias! Libero.</p>
            </div>
        </div>
    </div>
  )
}

export default Library
