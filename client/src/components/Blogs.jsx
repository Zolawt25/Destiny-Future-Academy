import React, { useState } from 'react'
import { blogs } from '../assets/blog'







const Blogs = () => {
    const [blogsApi, setBlogsApi] = useState(blogs)
    return (
        <div className='px-20 grid grid-cols-2 gap-4'>
            {
                blogsApi.map((item, index)=>{
                    return <div key={index} className=' bg-gray-50 shadow-lg'>
                        <div className='h-[280px] overflow-hidden rounded shadow-lg'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='px-4 py-3'>
                            <p className='text-sm font-bold text-gray-600'>{item.date}</p>
                            <h2 className='text-3xl font-semibold text-gray-900 py-1'>{item.title}</h2>
                            <p className='text-sm font-bold text-gray-600'>By one of our brightest, {item.name}</p>
                            <p className='text-sm mt-2'>{item.description}</p>
                        </div>
                        
                    </div>
                })
            }
        </div>
    )
}

export default Blogs
