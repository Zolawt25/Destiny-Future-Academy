import React, { useState } from 'react'
import { gallerys } from '../assets/gallery'







const Gallery = () => {
    const [gallery, setGallery] = useState(gallerys)
    return (
        <div className='flex justify-center'>
            <div className='max-w-[1400px] w-full'>
                <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our Gallery</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 px-7 md:px-20 lg:px-32'>
                    {
                        gallery.map((item, index)=>(
                            <div key={index} className='shadow-[7px_7px_5px_1px_#999] bg-transparent'>
                                <img src={item} alt="" className=' aspect-[1/1.5] rounded-lg'/>
                            </div>
                        )) 
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Gallery
