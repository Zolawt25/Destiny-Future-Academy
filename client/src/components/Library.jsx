import React, { useState } from 'react'
import { books } from '../assets/books'








const Library = () => {
  const [booksApi, setBooksApi] = useState(books)
  return (
    <div className='flex justify-center'>
        <div className='px-5 md:px-20  max-w-[1400px] w-full'>
          <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Library and Resources</h2>
          {/* <div className='flex items-center gap-6'>
              <div className="w-[500px]">
                  <img src="/imgs/library.png" alt="" className=' rounded shadow-lg'/>
              </div>
              <div className="flex-1 pr-24">
                  <h2 className="text-4xl font-bold text-gray-900">We have the best library for all greade students and more.</h2>
                  <p className='text-gray-700 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores quidem modi debitis, asperiores harum id temporibus suscipit aperiam eos accusantium tenetur maxime dolorum excepturi alias! Libero.</p>
              </div>
          </div> */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:px-32 gap-4'>
            {
              booksApi.map((item, index)=>{
                return <div key={index} className=''>
                  <div className='flex w-full justify-center bg-[#f95f06] rounded-lg'>
                    <img src={item.img} alt="" className=' aspect-[1/1.4]'/>
                  </div>
                  <br />
                  <div className='w-full'>
                    <h3 className='text-2xl font-semibold text-gray-900'>{item.title}</h3>
                    <br />
                    <a href={item.link} target="_blank" className='px-4 py-2 bg-[#F96106] rounded-lg font-semibold text-gray-800'>Download</a>
                  </div>
                  
                </div>
              })
            }
          </div>
      </div>
    </div>
    
  )
}

export default Library
