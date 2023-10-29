import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition';

function Header() {

    const TEXTS = ['Ohmiler', 'Learn', 'Create', 'Inspire'];
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

  return (
    <div className='fixed top-0 left-0 right-0 z-10 bg-white shadow-md'>
        <header className='bg-[#21252b] h-14 px-5 flex justify-between items-center'>
            <a href="#" className='text-white'>
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </a>

            <ul className='flex text-white space-x-5 items-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><a href='https://milerdevpro.com' target='_blank'>Courses</a></li>
                <li><a href="https://www.facebook.com/patiphannn" target='_blank'>Contact</a></li>
            </ul>
        </header>
    </div>

  )
}

export default Header