import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Self from '../../Images/Self.png'
import Background1 from '../../Images/Light.jpg'
import Background2 from '../../Images/Dark.jpg'
import { useSelector } from 'react-redux'
import Services from './Services'
import AboutMe from './AboutMe'

const Main = () => {
    const Theme = useSelector(items => items.Theme.value)

    return (
        <div className='relative  font-Mona w-full min-h-screen transition duration-300  dark:bg-zinc-900 bg-white flex items-center justify-center'>
            <div className=' dark:bg-black bg-white  h-full transition duration-500'>
                <div className='fixed h-screen '>
                    {Theme === "dark" ? <img src={Background2} className='md:object-cover min-h-screen min-w-fit' /> :
                        <img src={Background1} className='md:object-cover min-h-screen min-w-fit' />
                    }
                </div>
                <div className=' relative no-scrollbar overflow-y-scroll h-screen scroll-smooth'>
                    <div className='main dark:text-white  '>
                        <Navbar />
                        <div className='md:px-20 px-8 md:py-10 py-8 flex flex-col gap-5'>
                            <h2 className='font-semibold md:text-5xl sm:text-3xl text-2xl text-center tracking-wide  '>FrontEnd Web Developer.</h2>
                            <p className=' text-center md:text-lg text-xs font-light tracking-wide opacity-60 font-Petit'>I craft elegantly simple designs and code with precision, driven by a deep passion for my work.</p>
                        </div>
                        <div className='md:h-80 sm:h-64 h-52 flex justify-center'>
                            <img src={Self} alt="" className='h-full' />
                        </div>
                    </div>
                    <div className='md:my-14 my-10'>
                        <AboutMe />
                    </div>
                    <div>
                        <Services />
                    </div>
                    <div className=' border-t dark:bg-zinc-900/50 bg-zinc-50/50 md:backdrop-blur-md dark:text-white py-10'>
                        <div className='flex flex-col gap-5 items-center justify-center'>
                            <h2 className='font-semibold md:text-3xl text-lg text-center gap-3 font-Mona '>Interested in collaborating with me?</h2>
                            <p className=' text-center md:text-sm text-xs font-light text-zinc-400 font-Petit'>I’m always open to discussing product design work or partnership opportunities.</p>
                            <Link className="group flex h-fit w-fit flex-col items-center justify-center rounded-sm bg-violet-500 md:px-[2em] px-6  md:py-[0.5em] py-2 shadow-[inset_0px_2px_4px_0px_violet-600,inset_0px_-2px_4px_0px_violet-600,0px_-2px_16px_0px_violet-600,0px_2px_16px_0px_violet-600] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_violet-600,inset_0px_2px_4px_0px_violet-500,0px_2px_16px_0px_violet-600,0px_2px_16px_0px_violet-600]">
                                <p className=" duration-200 tracking-wide group-active:translate-y-[5%] text-white">
                                    Start Conversation
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
