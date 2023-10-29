import React, { Suspense } from 'react'
import Header from '../components/Header'
import AnimatedCursor from "react-animated-cursor"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Environment, PresentationControls, PerspectiveCamera, Effects  } from '@react-three/drei'
import Virtualdesk from '../../public/Virtualdesk'

import Footer from '../components/Footer'

function PortfolioPage() {
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
    <div className='container mx-auto text-center mt-[100px]'>
        <div style={{ width: '100%', height: '500px' }} className='mt-10'>
              <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} shadow-mapSize={2048} castShadow />
              {/* <pointLight position={[0, 0, 0]} /> */}
              <directionalLight color="white" position={[0, 0, 5]} />
              <Effects />
              <Suspense fallback={null}>
                  <Virtualdesk  scale={0.02} />
              </Suspense>
              <ContactShadows position={[0, -1.5, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
              <Environment preset="city" />
            </Canvas>
        </div>
        <h2 className='text-2xl text-white my-10'>My experiences</h2>
            <div className="grid grid-cols-1 w-1/2 mx-auto gap-4">
                <div className="bg-[#21252b] text-white flex flex-col justify-center items-center rounded-2xl p-4">
                    <p>5+ Years in Web Development</p>
                    <ul className='list-disc'>
                        <li>Skills : HTML, CSS, JS, ReactJS, Typescript, NodeJS, Tailwind, PHP, SQL</li>
                    </ul>
                </div>
                <div className="bg-[#21252b] text-white flex flex-col justify-center items-center rounded-2xl p-4">
                    <p>ร่วมงานกับ สมาคมโปรแกรมเมอร์ไทย</p>
                    <ul className='list-disc text-left'>
                        <li>Speaker : <a className='text-emerald-500' href="https://www.youtube.com/watch?v=YH9Owp3YYuk&t=243s" target='_blank'>National Coding Day 2023</a></li>
                        <li>Interview : <a className='text-emerald-500' href="https://www.youtube.com/watch?v=cpZAX2v9YIU" target='_blank'>Dev Youtuber : โปรแกรมเมอร์สาย Youtuber</a></li>
                        <li>Instructor : <a className='text-emerald-500' href="https://www.youtube.com/watch?v=Y4ezum3_7_I&t=2972s" target='_blank'>ViteJS คืออะไร แล้วทำไมเราถึงควรใช้</a></li>
                    </ul>
                </div>
                <div className="bg-[#21252b] text-white flex flex-col justify-center items-center rounded-2xl p-4">
                    <p>ร่วมงานกับ GetLinks</p>
                    <ul className='list-disc text-left'>
                        <li>#1 Metaverse Tech Job Fair งานแรกในประเทศไทย : <a className='text-emerald-500' href="https://www.youtube.com/watch?v=reRHNOKmQ7w" target='_blank'>GetLinks Tech City</a></li>
                        <li>#2 Virtual Tech Job Fair โอกาสที่ใช่ กำลังรอคุณอยู่ : <a className='text-emerald-500' href="https://www.youtube.com/watch?v=kk1-5F6FRyA" target='_blank'>Virtual Tech Job Fair </a></li>
                        <li>#3 Coming soon...</li>
                    </ul>
                </div>
                <div className="bg-[#21252b] text-white flex flex-col justify-center items-center rounded-2xl p-4">
                    <p>ร่วมงานกับ Edupluz</p>
                    <ul className='list-disc text-left'>
                        <li><a className='text-emerald-500' href="https://intro.edupluz.com/c3e7baf7-f2ef-422e-8985-7d7dd783e08e" target='_blank'>JavaScript สำหรับมือใหม่ ใครก็ทำได้</a></li>
                        <li><a className='text-emerald-500' href="https://intro.edupluz.com/a6b4e102-a70d-478c-8ce5-08902fcb5132" target='_blank'>ทำเว็บไซต์ได้ง่าย ๆ ด้วย WordPress</a></li>
                        <li><a className='text-emerald-500' href="https://edupluz.com/course/e0da965b-8744-452f-8811-672214cfa250" target='_blank'>เรียนรู้วิธีการจัดการ Data ด้วย SQL ตั้งแต่เริ่มต้นจนถึงใช้งานได้จริง</a></li>
                    </ul>
                </div>
                <div className="bg-[#21252b] text-white flex flex-col justify-center items-center rounded-2xl p-4">
                    <p>ร่วมงานกับ Devhub.in.th</p>
                    <ul className='list-disc text-left'>
                        <li><a className='text-emerald-500' href="https://devhub.in.th/blog/patiphan-phengpao-mindset-to-success" target='_blank'>แนวคิดมุ่งสู่ความสำเร็จโดย Patiphan Phengpao (จารย์โอม)</a></li>
                    </ul>
                </div>
                <div className="bg-[#21252b] text-white flex flex-col justify-center items-center rounded-2xl p-4">
                    <p>โปรเจคเคยที่พัฒนา</p>
                    <ul className='list-disc text-left'>
                        <li>VScode Extension : <a className='text-emerald-500' href="https://marketplace.visualstudio.com/items?itemName=PatrickPan.miler-coding-time-tracker" target='_blank'>Coding Time Tracker</a></li>
                        <li>VScode Extension : <a className='text-emerald-500' href="https://marketplace.visualstudio.com/items?itemName=PatrickPan.ck-motivation" target='_blank'>CK Motivation</a></li>
                        <li>WordPress Theme : <a className='text-emerald-500' href="https://www.youtube.com/watch?v=V98rwmlPzoE" target='_blank'>Bizium Theme</a></li>
                    </ul>
                </div>
            </div>
    </div>
    <Footer />
    </>

  )
}

export default PortfolioPage