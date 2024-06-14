import React from 'react'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex px-20 py-6 justify-between flex-wrap'>
            <div>
                <img src="/imgs/footer_logo.png" alt="" />
                <p className='font-semibold mt-2'>“The whole purpose of education is to turn mirrors into windows”</p>
                <p className='font-semibold mt-2'>School Hours: Morning 8:00AM ~ Afternoon 3:00PM</p>
            </div>
            <div className='flex flex-col'>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Links</h4>
                <a href="/blog" className='text-sm font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500 mt-2'>Blog</a>
                <a href="/academics" className='text-sm font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500 mt-2'>Academics</a>
                <a href="/gallery" className='text-sm font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500 mt-2'>Gallery</a>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact info</h4>
                <p className='font-bold text-gray-800'>Address</p>
                <p className='text-sm'>Midway, Gofa to German Square,</p>
                <p className='text-sm'>Addis Ababa, Ethiopia</p>
                <p className='font-bold text-gray-800'>Phone</p>
                <p className='text-sm'>+251 909 242 510</p>
                <p className='font-bold text-gray-800'>Email</p>
                <p className='text-sm'>zelalemt538@gmail.com</p>
            </div>
        </div>
        <hr />
        <p className='text-center text-gray-600 text-sm py-2'>Copyright  &copy; 2024 Destiny Future Academy</p>
    </div>
  )
}

export default Footer
