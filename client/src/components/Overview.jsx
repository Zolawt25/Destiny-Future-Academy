import React from 'react'







const Overview = () => {
  return (
    <div className='flex justify-center'>
        <div id='overview' className='md:px-20 sm:px-10 px-5 max-w-[1400px] w-full'>
          <h2 className='text-center font-bold md:text-3xl text-2xl text-gray-900'>What We Offer</h2>
          <br /><br />
          <div className='flex items-center gap-6 flex-col lg:flex-row text-center lg:text-left'>
            <div className="md:w-[500px]">
                <img src="/imgs/overview.jpg" alt="" className=' rounded shadow-lg'/>
            </div>
            <div className="flex-1 lg:pr-24">
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">We teach our students with love</h1>
                <p className='text-gray-700 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores quidem modi debitis, asperiores harum id temporibus suscipit aperiam eos accusantium tenetur maxime dolorum excepturi alias! Libero.</p>
            </div>
          </div>
          <br /><br /><br />
          <div className='flex items-center gap-6 flex-col lg:flex-row-reverse text-center lg:text-end'>
            <div className="md:w-[500px]">
                <img src="/imgs/overview2.png" alt="" className=' rounded shadow-lg'/>
            </div>
            <div className="flex-1 lg:pl-24">
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">We do our best to keep our students happy.</h1>
                <p className='text-gray-700 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores quidem modi debitis, asperiores harum id temporibus suscipit aperiam eos accusantium tenetur maxime dolorum excepturi alias! Libero.</p>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Overview
