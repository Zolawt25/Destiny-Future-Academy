import React from 'react'
import SpecialProgram from '../components/SpecialProgram'
import Footer from '../components/Footer'







const SpecialProgramPage = () => {
    window.scrollTo(0,0)
    return (
        <div>
        <div className='bg-[image:url(/imgs/banner.png)] bg-cover bg-[#111111a4] bg-blend-darken bg-center py-12'>
            <h1 className='text-center text-gray-200 text-5xl sm:text-6xl font-semibold mb-3'>#Special</h1>
            <p className='text-center text-gray-200 text-[14px] sm:text-lg font-semibold'>The only person who is educated is the one who has learned how to learn …and change.</p>
        </div>
        <br /><br />
        <div>
            <SpecialProgram/>
        </div>
        <br /><br />
        <hr />
        <Footer/>
        </div>
    )
}

export default SpecialProgramPage
