import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F96106] flex justify-center'>
        <div className='max-w-[1400px] w-full'>
            <div className='flex px-5 md:px-20 py-6 justify-between flex-wrap text-gray-50'>
                <div>
                    <img src="/imgs/footer_logo.png" alt="" />
                    <p className='font-semibold mt-2'>“The whole purpose of education is to turn mirrors into windows”</p>
                    <p className='font-semibold mt-2'>School Hours: Morning 8:00AM ~ Afternoon 3:00PM</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className="text-xl font-semibold text-gray-50 mb-2 mt-3 lg:mt-0">Links</h4>
                    <a href="/blog" className='text-sm font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500 mt-2'>Blog</a>
                    <a href="/academics" className='text-sm font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500 mt-2'>Academics</a>
                    <a href="/gallery" className='text-sm font-semibold hover:text-blue-500 hover:border-b-2 border-blue-500 mt-2'>Gallery</a>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-gray-50 mb-2 mt-3 lg:mt-0">Contact info</h4>
                    <p className='font-bold text-gray-50'>Address</p>
                    <p className='text-sm'>Midway, Gofa to German Square,</p>
                    <p className='text-sm'>Addis Ababa, Ethiopia</p>
                    <p className='font-bold text-gray-50'>Phone</p>
                    <p className='text-sm'>+251 118 39 16 28</p>
                    <p className='font-bold text-gray-50'>Email</p>
                    <p className='text-sm'>info@destinyfuture.com</p>
                </div>
            </div>
            <hr />
            <p className='text-center text-gray-50 text-sm py-2 bg-[#F96106]'>Copyright  &copy; 2024 Destiny Future Academy</p>
        </div>
        
    </div>
  )
}

export default Footer
