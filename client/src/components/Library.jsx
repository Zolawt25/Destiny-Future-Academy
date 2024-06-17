import React, { useState } from 'react'
import { books } from '../assets/books'








const Library = () => {
  const [booksApi, setBooksApi] = useState(books)
  return (
    <div className='flex justify-center'>
        <div className='px-5 md:px-20  max-w-[1400px] w-full'>
          <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Library and Resources</h2>
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
                    <a href={item.link} target="_blank" className='px-4 py-2 bg-[#F96106] rounded-lg font-semibold text-gray-50'>Download</a>
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
