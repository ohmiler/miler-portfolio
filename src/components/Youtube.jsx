import React from 'react'
import { FaComputer } from 'react-icons/fa6'
import Numbers from './Numbers'

function Youtube() {
  return (
    <>
        <div className='text-white container mx-auto text-center flex flex-col md:flex-row justify-center items-center py-10'>
            <div className="w-full flex justify-center flex-col items-center">
                <FaComputer style={{ fontSize: '3rem' }} />
                <h2 className='text-4xl mb-5'>Improve your coding skills by practicing on my channel.</h2>
                <iframe width="640" height="360" className='rounded-lg my-10' src="https://www.youtube.com/embed/K16E-9nPN9s?si=FMtg7IVYFbsc4Hcf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
        <div className="container mx-auto text-center text-white">
            <Numbers />
        </div>
    </>
  )
}

export default Youtube