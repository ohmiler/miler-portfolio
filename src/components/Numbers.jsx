import React from 'react'
import CountUp from 'react-countup';
import { FaUsers, FaPlay, FaEye } from 'react-icons/fa6'

function Numbers() {
  return (
    <div className='mb-10'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <li className='flex flex-col mt-5'>
                <span className='text-5xl'><CountUp end={120000} duration={10} />+</span>
                <span className='mt-3 text-2xl flex items-center justify-center'><FaUsers style={{ marginRight: '10px' }} /> Subscribers</span>
            </li>
            <li className='flex flex-col mt-5'>
                <span className='text-5xl'><CountUp end={2200} duration={10} />+</span>
                <span className='mt-3 text-2xl flex items-center justify-center'><FaPlay style={{ marginRight: '10px' }} /> Videos</span>
            </li>
            <li className='flex flex-col mt-5'>
                <span className='text-5xl'><CountUp end={18000000} duration={10} />+</span>
                <span className='mt-3 text-2xl flex items-center justify-center'><FaEye style={{ marginRight: '10px' }} /> Views</span>
            </li>
        </ul>
    </div>
  )
}

export default Numbers