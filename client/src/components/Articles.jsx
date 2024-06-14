import React from 'react'







const Articles = () => {
  return (
    <div>
        <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our Articls</h2>
        <div className=' px-32 flex flex-col justify-center'>
            <div className='flex items-center gap-6 justify-center'>
                <div>
                    <h3 className='text-4xl font-semibold mr-6 text-gray-900'>Our Teachers play with our students to make them feel free.</h3>
                    <p className='font-[500] text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores.</p>
                </div>
                <div>
                    <img src="/imgs/playing_kids.png" alt=""  className='w-[300px] rounded shadow'/>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className='flex items-center gap-6 justify-center'>
                <div>
                    <h3 className='text-4xl font-semibold mr-6 text-gray-900'>We teach our students with dedication and love.</h3>
                    <p className='font-[500] text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores.</p>
                </div>
                <div>
                    <img src="/imgs/students_lerning.png" alt=""  className='w-[300px] rounded shadow'/>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className='flex items-center gap-6 justify-center'>
                <div>
                    <h3 className='text-4xl font-semibold mr-6 text-gray-900'>We have sport period to make our students strong and healthy.</h3>
                    <p className='font-[500] text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed, nihil quibusdam maiores.</p>
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
  )
}

export default Articles
