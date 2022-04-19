import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import{Link} from 'react-scroll';
import CV from '../assets/cv/cv.pdf';
const Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-[#0a192f]'>
    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi,My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sahil Ramjali</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend and Flutter Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm enthusiastic in developing android applications and website frontend.
         I am at final semester in Bachelor in CSIT at ACHS college affiliated to Tribhuvan University.
            Currently, I am learning Flutter for mobile application development and react js for web development.
            
        </p>
        <div>
       <a href={CV} rel="noreferrer">
       <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View my CV
            </button>
       </a>
        </div>
        <div>
           <Link to="Projects" smooth={true} duration={500}>
           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
           </Link>
        </div>
    </div>
   
    </div>
  )
}

export default Home