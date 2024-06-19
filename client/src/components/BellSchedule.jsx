import React, { useEffect, useState } from 'react'
import { schedule } from '../assets/schedule'







const BellSchedule = () => {
    const [scheduleApi, setScheduleApi] = useState(schedule.nursery)
    const [schedules, setSchedules] = useState("nursery")

    useEffect(()=>{
        if(schedules === "nursery"){
            setScheduleApi(schedule.nursery)
        }else if(schedules === "grade_1_to_4"){
            setScheduleApi(schedule.grade_1_to_4)
        }else{
            setScheduleApi(schedule.grade_5_to_8)
        }
    },[schedules])
    return (
        <div className='flex justify-center'>
                <div className='max-w-[1400px] w-full'>
                <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our Bell Schedule</h2>
                <div className='flex justify-center flex-col items-center'>
                    <div className='w-full md:w-[85%] lg:w-[70%] mb-4 pl-5 md:pl-0'>
                        <p className='mb-1 font-bold text-gray-900'>Grades:</p>
                        <select onChange={(e)=>setSchedules(e.target.value)} className='w-[200px] py-1 px-1 outline-none text-gray-600 font-semibold border-2 rounded-lg'>
                            <option value="nursery">Nursery</option>
                            <option value="grade_1_to_4">Grade 1 to 4</option>
                            <option value="grade_5_to_8">Grade 5 to 8</option>
                        </select>
                    </div>
                    <div className='px-5 md:px-0 mt-3 w-full md:w-[85%] lg:w-[70%] overflow-x-scroll max-w-[1400px]'>
                        <table className='text-center border-2 [&>*:nth-child(odd)]:text-gray-200 [&>*:nth-child(odd)]:bg-[#F96106] [&>*:nth-child(even)]:bg-orange-100 text-gray-900 text-sm w-full min-w-[650px]'>
                            <tr className=''>
                                <th>Bell</th>
                                <th>Local Time</th>
                                <th>Schedule</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                            {
                                scheduleApi.bell.map((item, index)=>{
                                    return <tr key={index}>
                                        <td>{item}</td>
                                        <td>{scheduleApi.localTime[index]}</td>
                                        <td>{scheduleApi.Schedule[index]}</td>
                                        <td>{scheduleApi.monday[index]}</td>
                                        <td>{scheduleApi.thursday[index]}</td>
                                        <td>{scheduleApi.wednesday[index]}</td>
                                        <td>{scheduleApi.thursday[index]}</td>
                                        <td>{scheduleApi.friday[index]}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                    
                </div>
                </div>
        </div>
        
    )
}

export default BellSchedule
