import React, { useState } from 'react'
import { gallerys } from '../assets/gallery'







const Gallery = () => {
    const [gallery, setGallery] = useState(gallerys)
    return (
        <div>
            <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our Gallery</h2>
            <div className='grid grid-cols-4 gap-5 px-32'>
                {
                    gallery.map((item, index)=>(
                        <div key={index} className='h-[347px] overflow-hidden rounded-xl shadow-[7px_7px_5px_1px_#999]'>
                            <img src={item} alt=""/>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}

export default Gallery
