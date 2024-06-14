import React, { useState } from 'react'
import { news } from '../assets/news'







const NewsAndEvents = () => {
    const [newsApi, setNewsApi] = useState(news)
    return (
        <div className='px-20 '>
        <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our News & Events</h2>
        <div className='grid grid-cols-3 gap-5'>
            {
                newsApi.map((item, index)=>{
                    return <div key={index} className=' shadow-[4px_8px_6px_1px_#777] rounded py-3 px-5 '>
                        <p className='font-bold capitalize text-gray-900'>{item.type}</p>
                        <div className=' rounded-xl overflow-hidden'>
                            <img src={item.img} alt="" />
                        </div>
                        <h3 className='text-2xl py-1 font-semibold text-gray-900'>{item.title}</h3>
                        <p className='text-sm'>{item.description}</p>
                    </div>
                })
            }
        </div>
        </div>
    )
}

export default NewsAndEvents
