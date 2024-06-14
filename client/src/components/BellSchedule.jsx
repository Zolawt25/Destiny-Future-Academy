import React from 'react'







const BellSchedule = () => {
  return (
    <div>
      <h2 className='text-center font-bold text-3xl text-gray-900 mb-12'>Our Bell Schedule</h2>
      <div className='flex justify-center'>
        <table className='text-center border-2 w-[70%] even:bg-black [&>*:nth-child(odd)]:bg-blue-100 [&>*:nth-child(even)]:bg-gray-50 text-gray-900 text-sm'>

            <tr className=''>
                <th>Bell</th>
                <th>Local Time</th>
                <th>Schedule</th>
            </tr>
            <tr>
                <td>First Bell</td>
                <td>1:00 LT</td>
                <td>School Gates Open</td>
            </tr>
            <tr>
                <td>Second Bell</td>
                <td>1:45 LT</td>
                <td>Teachers Sign in</td>
            </tr>
            <tr>
                <td>Assembly Bell</td>
                <td>2:00 LT</td>
                <td>School Gates Close</td>
            </tr>
            <tr>
                <td>Assembly End</td>
                <td>2:30 LT</td>
                <td>Students to their Classes</td>
            </tr>
            <tr>
                <td>1st Period</td>
                <td>3:15 LT</td>
                <td>End of 1st Period</td>
            </tr>
            <tr>
                <td>2nd Period</td>
                <td>3:50 LT</td>
                <td>End of 2nd Period</td>
            </tr>
            <tr>
                <td>3rd Period</td>
                <td>4:25 LT</td>
                <td>End of 3rd Period</td>
            </tr>
            <tr>
                <td>Break</td>
                <td>4:45 LT</td>
                <td>End of Break</td>
            </tr>
            <tr>
                <td>4th Period</td>
                <td>5:25 LT</td>
                <td>End of 4th Period</td>
            </tr>
            <tr>
                <td>5th Period</td>
                <td>6:00 LT</td>
                <td>End of 5th Period</td>
            </tr>
            <tr>
                <td>Lunch Break</td>
                <td>7:20 LT</td>
                <td>End of Lunch Break</td>
            </tr>
            <tr>
                <td>6th Period</td>
                <td>8:00 LT</td>
                <td>End of 6th Period</td>
            </tr>
            <tr>
                <td>7th Period</td>
                <td>8:35 LT</td>
                <td>End of 7th Period</td>
            </tr>
            <tr>
                <td>End of School Day</td>
                <td>9:05 LT</td>
                <td>End of 8th Period</td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default BellSchedule
