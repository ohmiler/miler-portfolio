import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from "react-animated-cursor"



// Components
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import CTA from './components/CTA'
import Youtube from './components/Youtube'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

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
      <About />
      <Skills />
      <CTA />
      <Youtube />
      <Footer />
      
    </>
  )
}

export default App
