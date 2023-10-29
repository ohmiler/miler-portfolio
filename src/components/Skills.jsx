import React from 'react'
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa6'
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoPhp } from 'react-icons/bi'
import { TbBrandThreejs } from 'react-icons/tb'

function Skills() {
  return (
    <div className='container mx-auto text-center mt-[100px]'>
        <h2 className='text-white mt-5 text-2xl'>
            Technologies I use & love
        </h2>
        <ul className='flex justify-center space-x-5 text-5xl mt-5'>
            <li><a href="https://react.dev/" target='_blank'><FaReact style={{ color: '#5ed2f2' }} /></a></li>
            <li><a href="https://threejs.org/" target='_blank'><TbBrandThreejs style={{ color: '#fff' }} /></a></li>
            <li><a href="https://nodejs.org/en" target='_blank'><FaNodeJs style={{ color: '#87c148' }} /></a></li>
            <li><a href="https://www.typescriptlang.org/" target='_blank'><BiLogoTypescript style={{ color: '#3074c0' }} /></a></li>
            <li><a href="https://tailwindcss.com/" target='_blank'><BiLogoTailwindCss style={{ color: '#36b6f0' }} /></a></li>
            <li><a href="https://www.php.net/" target='_blank'><BiLogoPhp style={{ color: '#7377ae' }} /></a></li>
            <li><a href="https://sass-lang.com/" target='_blank'><FaSass style={{ color: '#c76494' }} /></a></li>
        </ul>
    </div>
  )
}

export default Skills