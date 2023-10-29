import React, { Suspense, useState } from 'react'
import * as THREE from 'three'
import Typewriter from 'typewriter-effect';
import MilerChar from '../assets/img/miler-char.png'
import { useRandomReveal } from 'react-random-reveal'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Environment, PresentationControls, Effects  } from '@react-three/drei'
import Scene from '../../public/Scene'
import Scifi from '../../public/Scifi'

function About() {

    const [position, setPosition] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([0, 0, 0]);

    const characters = useRandomReveal({
        isPlaying: true,
        duration: 2,
        characters: 'Hi, my name is Miler',
    })

    const handleCanvasEnter = () => {
        setPosition([0, -1, 0]);
        setRotation([-1.5, 0, 0]);
        console.log("mouse enter canvas")
    }

    const handleCanvasLeave = () => {
        setPosition([0, 0, 0]);
        setRotation([0, 0, 0]);
        console.log("mouse leave canvas")
    }
  
  return (
    <div className='flex justify-center items-center flex-col mt-16'>
        <div style={{ width: '100%', height: '550px' }} className='py-10'>
        <Canvas onPointerEnter={handleCanvasEnter} onPointerLeave={handleCanvasLeave}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
        {/* <pointLight position={[0, 0, 0]} /> */}
        <directionalLight color="white" position={[0, 0, 5]} />
        <Effects />
        <PresentationControls
           config={{ mass: 2, tension: 500 }}
           snap={{ mass: 4, tension: 1500 }}
           polar={[-Math.PI / 3, Math.PI / 3]}
           azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
        <Suspense fallback={null}>
            <Scene scale={1.8} position={position} rotation={rotation} />
        </Suspense>
        </PresentationControls>
        <ContactShadows position={[0, -2, 0]} opacity={0.75} scale={10} blur={10} far={10} />
        <Environment preset="city" />
        </Canvas>
        </div>
        <div className='text-center'>
            <h1 className='text-5xl text-white'>{characters}</h1>
            <div className='text-xl text-white flex justify-center mt-2'>
                <p className='mr-1'>
                    I'm a            
                </p>
                <Typewriter
                    options={{
                        strings: ['Developer', 'Entrepreneur', 'Instructor', 'Youtuber'],
                        autoStart: true,
                        loop: true,
                    }}
                /> 
            </div>
            <div className='space-x-2'>
                <a href="https://www.youtube.com/channel/UCeKE6wQHTt5JpS9_RsH4hrg/" target='_blank' className='text-white bg-[#21252a] px-5 py-2 mt-3 inline-block rounded-full hover:bg-[#2c3239]'>Start Learning</a>
                <a href="https://www.facebook.com/patiphannn" target='_blank' className='text-white bg-[#21252a] px-5 py-2 mt-3 inline-block rounded-full hover:bg-[#2c3239]'>Get in touch</a>
            </div>
        </div>
    </div>
  )
}

export default About