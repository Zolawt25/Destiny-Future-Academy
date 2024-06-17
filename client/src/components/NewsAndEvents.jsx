import { useEffect, useState } from 'react'
import axios from 'axios'







const NewsAndEvents = () => {
    const [newsApi, setNewsApi] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/news/`)
            setNewsApi(res.data)
            console.log(res.data)
        }
        fetchData()
    },[])
    return (
        <div className='flex justify-center'>
            <div className='px:5 sm:px-20 max-w-[1400px] w-full'>
                <h2 className='text-center font-bold md:text-3xl text-2xl text-gray-900 mb-12'>Our News & Events</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        newsApi.map((item, index)=>{
                            return <div key={index} className=' shadow-[4px_8px_6px_1px_#777] rounded py-3 px-5 '>
                                <p className='font-bold capitalize text-gray-900'>{item.type_of_news}</p>
                                <div className=' rounded-xl overflow-hidden'>
                                    <img src={item.img_link} alt="" />
                                </div>
                                <h3 className='text-2xl py-1 font-semibold text-gray-900'>{item.title}</h3>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default NewsAndEvents
