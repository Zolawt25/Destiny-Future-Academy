import React from 'react'







const Articles = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[1400px] w-full'>
            <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our Articls</h2>
            <div className='px-5 md:px-16 lg:px-32 flex flex-col justify-center'>
                <div className='flex items-center gap-6 justify-center flex-col-reverse sm:flex-row'>
                    <div>
                        <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left sm:mr-6 text-gray-900'>Our Teachers play with our students to make them feel free.</h3>
                        <p className='font-[500] text-gray-600 text-center sm:text-left text-sm sm:text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores.</p>
                    </div>
                    <div>
                        <img src="/imgs/playing_kids.png" alt=""  className='w-[300px] rounded shadow'/>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='flex items-center gap-6 justify-center flex-col-reverse sm:flex-row'>
                    <div>
                        <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left sm:mr-6 text-gray-900'>We teach our students with dedication and love.</h3>
                        <p className='font-[500] text-gray-600 text-center sm:text-left text-sm sm:text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores.</p>
                    </div>
                    <div>
                        <img src="/imgs/students_lerning.png" alt=""  className='w-[300px] rounded shadow'/>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='flex items-center gap-6 justify-center flex-col-reverse sm:flex-row'>
                    <div>
                        <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left sm:mr-6 text-gray-900'>We have sport period to make our students strong and healthy.</h3>
                        <p className='font-[500] text-gray-600 text-center sm:text-left text-sm sm:text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores.</p>
                    </div>
                    <div>
                        <img src="/imgs/students_playing.png" alt=""  className='w-[300px] rounded shadow'/>
                    </div>
                </div>
                <br />
                <hr />
                <br />
            </div>
        </div>
    </div>
    
  )
}

export default Articles
