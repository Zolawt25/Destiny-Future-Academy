import React, { useEffect, useState } from 'react'
import { blogs } from '../assets/blog'
import axios from 'axios'







const Blogs = () => {
    const [blogsApi, setBlogsApi] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/blog/`)
            setBlogsApi(res.data)
        }
        fetchData()
    },[])
    return (
        <div className='flex justify-center'>
            <div className='px-5 sm:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] w-full'>
                {
                    blogsApi.map((item, index)=>{
                        return <div key={index} className=' bg-gray-50 shadow-lg'>
                            <div className='overflow-hidden rounded shadow-lg'>
                                <img src={item.img_link} alt="" className='aspect-[2/1]'/>
                            </div>
                            <div className='px-4 py-3'>
                                <p className='text-sm font-bold text-gray-600'>{item.date}</p>
                                <h2 className='text-2xl sm:text-3xl font-semibold text-gray-900 py-1'>{item.title}</h2>
                                <p className='text-sm font-bold text-gray-600'>By one of our brightest, {item.name}</p>
                                <p className='text-sm mt-2'>{item.description}</p>
                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
        
    )
}

export default Blogs
