import React from 'react'
import Self from './Images/Self.jpg'
import { Link } from 'react-router-dom'
import Contact from './Icons/Contact.svg?react'
import Linkedin from './Icons/Linkedin.svg?react'
import Instagram from './Icons/Instagram.svg?react'
import Github from './Icons/Github.svg?react'
import Paper from './Icons/Paper.svg?react'
import Resume from './Resume.pdf'
import About from './Images/Image.png'
import HomeIcon from './Icons/HomeIcon.png'
import Profile from './Icons/avatar.png'
import Email from './Icons/Email.png'
import Phone from './Icons/phone.png'
import VSCode from './Images/VScode.jpg'
import Figma from './Images/Figma.jpg'
import GithubIcon from './Images/github.jpg'
import Photoshop from './Images/Photoshop.jpg'

const Homepage = () => {
  return (
    <div>
      <div className='flex h-full data-twe-easing lg:flex-row flex-col lg:items-center items-center justify-evenly lg:justify-around bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white transition duration-300 ease-in-out'>
        <div className='lg:text-right text-center lg:gap-5 gap-2 lg:mt-0 md:mt-20 mt-[55px] flex flex-col xl:w-3/4 w-fit m-4 text-lg'>
          <p className='text-md'>Heyy, I'm</p>
          <h2 className='font-Giarek md:tracking-wider text-orange-400 font-medium sm:text-4xl text-2xl' >SHREYASH DHULRAO</h2>
          <p className='sm:text-lg text-sm'>Web Developer | Front-End Developer</p>
        </div>
        <div className=' xl:w-2/3 w-9/12 lg:h-screen lg:pt-16 lg:mt-1 h-1/4 flex items-center justify-center  mx-1 '>
          <img src={Self} alt="Shreyash Image" className='lg:h-full h-1/2'  />
        </div>
        <div className='xl:w-2/3 md:w-8/12 w-11/12 m-4 md:p-0 p-3 lg:text-left text-center '>
          <h2 className=' font-medium md:text-2xl text-lg text-orange-400'>Howdy folks! Let's explore together.</h2>
          <p className='font-["Raleway"] sm:text-lg text-sm' >Brief description with the insights into myself, my vocational journey and what I engage in professional journey.</p>
          <div className='flex md:flex-row sm:w-auto w-full flex-col items-center justify-center gap-3 md:m-3 m-0 my-2'>
            <Link to='/contact' className='flex items-center bg-zinc-200 dark:bg-zinc-900 sm:text-md text-sm group justify-center md:py-2 py-0 md:px-4 px-2 gap-3 rounded-2xl hover:text-orange-500 md:w-2/3 w-1/2 '>
              <Contact className="text-black dark:text-zinc-100 sm:w-6 w-5 dark:hover:text-orange-500 group-hover:text-current" />Contact</Link>
            <a href={Resume} download="Resume.pdf" className='flex items-center border-zinc-200 sm:text-md text-sm dark:border-zinc-900 border-2 group justify-center md:py-2 py-0 md:px-4 px-2 gap-3 rounded-2xl hover:text-orange-500 md:w-2/3 w-1/2 ' target='_blank'>
              <Paper className="text-black dark:text-zinc-100 sm:w-6 w-5 dark:hover:text-orange-500 group-hover:text-current" />Resume
            </a>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <a href="https://www.linkedin.com/in/shreyash-dhulrao-47b519228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank'>
              <Linkedin className="text-black dark:text-zinc-100 w-7 dark:hover:text-orange-500 hover:text-orange-500" />
            </a>
            <a href="https://github.com/Shreyash-Dhulrao" target='_blank'>
              <Github className="text-black dark:text-zinc-100 w-6 dark:hover:text-orange-500 hover:text-orange-500" />
            </a>
            <a href="https://www.instagram.com/shreyash.dhulrao?igsh=aGM3NjUzbGVseXN2" target='_blank'>
              <Instagram className="text-black dark:text-zinc-100 w-7 dark:hover:text-orange-500 hover:text-orange-500" />
            </a>
          </div>
        </div>
      </div>
      <div className='h-full lg:flex-row flex-col xl:py-5 py-2 lg:items-center items-center justify-evenly lg:justify-around bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white transition duration-300 ease-in-out'>
        <div className='text-center text-orange-400 tracking-wider gap-5 lg:mt-0 xl:mt-10 flex flex-col w-full my-2 text-lg'>
          <h2 className='font-Giarek sm:text-4xl text-2xl'>ABOUT ME</h2>
          </div>
        <div className='flex justify-evenly items-center'>
          <div className=' w-2/5 lg:h-1/2 h-2/3 xl:block hidden flex items-center justify-center  mx-1 '>
            <img src={About} alt="About icon" className='h-full' />
          </div>
          <div className=' xl:w-auto lg:w-11/12 w-5/6'>
            <div className='flex flex-col gap-1 my-2'>
              <p className='text-2xl font-semibold'>Personal Information</p>
              <p className='font-["Raleway"] text-center md:text-start'>Hi there! I'm here to help you with anything you need, from developing an website, or designing.</p>
            </div>
            <div className='flex md:flex-row flex-col lg:gap-0 gap-3 items-center justify-around py-2'>
              <div className='flex gap-3'>
                <img src={Profile} alt="" className='w-6' />
                <p>Shreyash Dhulrao</p>
              </div>
              <div className='flex gap-3'>
                <img src={Phone} alt="" className='w-6' />
                <p>+91-7057070480</p>
              </div>
            </div>
            <div className='flex md:flex-row flex-col lg:gap-0 gap-3 items-center justify-around pb-2'>
              <div className='flex gap-3'>
                <img src={Email} alt="" className='w-6' />
                <p>shreyashdhularao@gmail.com</p>
              </div>
              <div className='flex gap-3'>
                <img src={HomeIcon} alt="" className='w-6' />
                <p>Solapur, Maharashtra</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 my-2'>
              <p className='text-2xl font-semibold'>Languages</p>
              <p className='font-["Raleway"] text-center md:text-start'>English, Hindi, Marathi.</p>
            </div>
            <div className='flex flex-col gap-1 my-2'>
              <p className='text-2xl font-semibold'>Courses</p>
              <p className='font-["Raleway"] text-center md:text-start'>React js: Dream Technology</p>
              <p className='font-["Raleway"] text-center md:text-start'>Web Development: Dream Technology</p>
              <p className='font-["Raleway"] text-center md:text-start'>Adobe Photoshop: Udemy</p>
            </div>
            <div className='flex flex-col gap-1 my-2'>
              <p className='text-2xl font-semibold'>Skills</p>
              <p className='font-["Raleway"] text-center md:text-start'>HTML, CSS, Javascript, React, Tailwind CSS, Git, Github, Firebase.</p>
            </div>
            <div>
              <p className='text-2xl font-semibold'>Tools</p>
              <div className='flex w-full  items-center justify-evenly '>
                <div className='flex lg:flex-row flex-col  gap-3 items-center justify-around  w-full p-4'>
                <div className='flex flex-col items-center gap-2'>
                  <img src={VSCode} alt="" className='w-10 rounded-lg' />
                  <p className='font-["Raleway"]'>VS Code</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <img src={Figma} alt="" className='w-10 rounded-lg' />
                  <p className='font-["Raleway"]'>Figma</p>
                </div>
                </div>
                <div className='flex lg:flex-row flex-col  gap-3 items-center justify-around  w-full p-4'>
                <div  className='flex flex-col items-center gap-2'>
                  <img src={GithubIcon} alt="" className='w-10 rounded-lg' />
                  <p className='font-["Raleway"]'>Github</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <img src={Photoshop} alt="" className='w-10 rounded-lg' />
                  <p className='font-["Raleway"]'>Photoshop</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full lg:flex-row flex-col xl:py-5 py-2 lg:items-center items-center justify-evenly lg:justify-around bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white transition duration-300 ease-in-out'>
        <div className='text-center text-orange-400 tracking-wider gap-5 lg:mt-0 xl:mt-4 flex flex-col w-full my-2 text-lg'>
          <h2 className='font-Giarek  sm:text-4xl tracking-wider text-2xl'>SERVICES</h2>
        </div>
        <div className='flex md:flex-row flex-col justify-evenly gap-5 lg:w-full md:p-3 p-10'>
          <div className='border border-orange-400 text-center p-5 md:w-1/3 w-full gap-3 flex flex-col rounded-3xl'>
            <h2 className='sm:text-3xl text-xl font-semibold'>Web Designer</h2>
            <p className='font-["Raleway"] text-justify sm:text-lg text-sm '>I believe that a well-designed website is more than just a pretty face. It's a powerful tool that can help you connect with your audience and achieve your business objectives. I'll help to design websites that are both visually stunning and functionally effective.</p>
          </div>
          <div className='border border-orange-400 text-center p-5 md:w-1/3 w-full gap-3 flex flex-col rounded-3xl'>
            <h2 className='sm:text-3xl text-xl font-semibold'>Web Developer</h2>
            <p className='font-["Raleway"] text-justify sm:text-lg text-sm '>Partner with you to understand your unique business needs and develop tailored web applications. From concept to deployment, I'm dedicated to delivering exceptional results that exceed your expectations.</p>
          </div>
          <div className='border border-orange-400 text-center p-5 md:w-1/3 w-full gap-3 flex flex-col rounded-3xl'>
            <h2 className='sm:text-3xl text-xl font-semibold'>Photo Editor</h2>
            <p className='font-["Raleway"] text-justify sm:text-lg text-sm '>Transform your images into stunning works of art with my expert image editing skills. I specialize in [specific techniques, e.g., retouching, color correction, compositing] to deliver pixel-perfect results.</p>
          </div>
        </div>
      </div>
      <div className='items-center flex justify-center '>
        <div className='h-full lg:flex-row w-full  flex-col xl:py-5 text-center py-5 px-5 lg:items-center items-center justify-evenly lg:justify-around bg-orange-50 dark:bg-zinc-900 text-black dark:text-white transition duration-300 ease-in-out'>
          <h2 className='md:text-2xl text-md font-["Raleway"] font-semibold'>Transform your online presence with a professionally designed and developed website. </h2>
          <div className='flex justify-center w-full my-2'>
          <Link to='/contact' className='flex items-center border-2 border-orange-400 group justify-center sm:py-2 py-0 sm:px-6 gap-3 rounded-lg text-orange-500 md:w-fit w-1/2 '>
          <Contact className="sm:w-6 w-5 text-orange-500" />Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
