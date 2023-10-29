import React, { Suspense, useState } from 'react'
import Header from '../components/Header'
import ProfilePic from '../assets/img/handsome.jpg'
import AnimatedCursor from "react-animated-cursor"
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa6'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Environment, PresentationControls, Effects  } from '@react-three/drei'

import Wolfstatue from '../../public/Wolfstatue'
import Goku from '../../public/Goku'
import Gokufull from '../../public/Gokufull'
import Footer from '../components/Footer'

function AboutPage() {

  const [power, setPower] = useState(false);

  const handleEnter = () => {
    setPower(true);
  }

  const handleLeave = () => {
    setPower(false);
  }


  return (
    <>
    <AnimatedCursor
      innerSize={20}
      outerSize={10}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
        <Header />
        <div className='container mx-auto text-center flex justify-center flex-col items-center mt-16'>
            {/* <img width={300} className='rounded-full mt-10 shadow-lg' src={ProfilePic} alt="" /> */}
            <div style={{ width: '100%', height: '500px' }} className='mt-10'>
              <Canvas onPointerEnter={handleEnter} onPointerLeave={handleLeave}>
              {/* <OrbitControls /> */}
              {/* <ambientLight intensity={1.5} /> */}
              <spotLight position={[0, 0, 0]} angle={0.5} penumbra={1} shadow-mapSize={2048} castShadow />
              <pointLight position={[0, 0, 0]} />
              <directionalLight color="white" position={[1, 0, 0]} />
              <Effects />
              <Suspense fallback={null}>
                  <Goku scale={0.7} power={power} />
              </Suspense>
              <ContactShadows position={[0, -3, 0]} opacity={0.75} scale={10} blur={5} far={3} />
              <Environment preset="sunset" />
              </Canvas>
            </div>

            <h2 className='text-2xl text-white mt-5 mb-3'>About Me</h2>
            <p className='text-white'>Hi, my name is Patiphan Phengpao</p>
            <p className='w-1/2 text-white'>I'm a passionate developer who loves creating web applications and exploring new technologies. I enjoy coding, relish learning new technologies, and I'm enthusiastic about training in Muay Thai.</p>

            <h2 className='text-2xl text-white mt-5 mb-3'>Why I love coding?</h2>
            <p className='w-1/2 text-white'>Many people often ask why I love coding. In reality, when you code, it's as if you possess a superpower in your hands. You can utilize your coding skills to educate others and contribute to making the world a better place. That's why I love coding.</p>

            <h2 className='text-2xl text-white mt-5 mb-3'>Why Goku?</h2>
            <p className='w-1/2 text-white'>"He's the best. He knows how to improve himself and learn from others, no matter what obstacles he faces; he will get through them."</p>

            <h2 className='text-2xl text-white mt-5 mb-3'>Connected with me</h2>
            <ul className='flex justify-center space-x-5 text-3xl mt-5'>
                <li><a href="https://www.youtube.com/channel/UCeKE6wQHTt5JpS9_RsH4hrg" target='_blank'><FaYoutube style={{ color: '#f70000' }} /></a></li>
                <li><a href="https://www.facebook.com/patiphannn" target='_blank'><FaFacebookF style={{ color: '#1973eb' }} /></a></li>
                <li><a href="https://www.instagram.com/ohmilerr/" target='_blank'><FaInstagram style={{ color: '#9655ff' }} /></a></li>
            </ul>

            <div style={{ width: '100%', height: '500px' }} className='mt-10'>
              <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.5} />
              <spotLight position={[0, 0, 0]} angle={0.5} penumbra={1} shadow-mapSize={2048} castShadow />
              <pointLight position={[0, 0, 0]} />
              <directionalLight color="white" position={[1, 0, 0]} />
              <Effects />
              <Suspense fallback={null}>
                  <Gokufull scale={0.7} />
              </Suspense>
              <ContactShadows position={[0, -2, 0]} opacity={0.75} scale={10} blur={5} far={10} />
              <Environment preset="sunset" />
              </Canvas>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default AboutPage