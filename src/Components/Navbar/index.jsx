import React from 'react'
import Moon from '../../Icons/Moon.svg?react'
import Sun from '../../Icons/Sun.svg?react'
import Document from '../../Icons/Contact/Document.svg?react'
import Projects from '../../Icons/Contact/Projects.svg?react'
import Contact from '../../Icons/Contact/Contact.svg?react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeToggle } from '../../redux/Theme'
import { useState } from 'react'
import Resume  from './Shreyash Dhulrao.pdf'

const index = () => {
    const dispatch = useDispatch()
    const [Theme, setTheme] = useState(useSelector(items => items.Theme.value));
    console.log(Theme)

    dispatch(ThemeToggle(Theme))
    const handleTheme = (e) => {
        e.preventDefault();
        if (Theme === "light") {
            setTheme("dark")
            dispatch(ThemeToggle(Theme))
        }
        else {
            setTheme("light")
            dispatch(ThemeToggle(Theme))
        }

    }
    return (
        <div>
            <div className='navbar flex dark:text-white justify-between md:px-14 pt-5  items-center '>
                <div className='md:px-0 px-5 flex items-center justify-between md:w-1/2 w-full '>
                    <Link className='md:text-5xl text-3xl font-light  font-Plaster'>
                        SD
                    </Link>
                    <button onClick={handleTheme} className=' w-6 h-6 md:hidden block transition duration-300 group'>
                        {Theme === "dark" ? <Sun className="text-violet-500 w-full h-full group-hover duration-300" /> : <Moon className=" text-violet-600 w-full h-full group-hover duration-300" />}
                    </button>
                </div>
                <div className='flex gap-5 px-2 items-center w-fill md:flex hidden'>
                <button onClick={handleTheme} className=' w-16 h-16 md:block hidden transition duration-300 group'>
                        {Theme === "dark" ? <Sun className="text-violet-500 w-full h-full group-hover duration-300" /> : <Moon className=" text-violet-600 w-full h-full group-hover duration-300" />}
                    </button>
                    <a href={Resume} download="Shreyash Dhulrao.pdf" className=' p-3 transition duration-300  tracking-wide opacity-60 hover:opacity-100' target='_blank'>
                        Resume
                    </a>
                    <Link to="/projects" className=' p-3 transition duration-300  tracking-wide opacity-60 hover:opacity-100'>Projects</Link>
                    <Link to="/contact" className="group  ms-3 rounded-md flex h-full w-2/3 bg-blue-300 flex-col items-center justify-center rounded-sm bg-violet-500 px-[2em] py-[0.5em] shadow-[inset_0px_2px_4px_0px_violet-600,inset_0px_-2px_4px_0px_violet-600,0px_-2px_16px_0px_violet-600,0px_2px_16px_0px_violet-600] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_violet-600,inset_0px_2px_4px_0px_violet-500,0px_2px_16px_0px_violet-600,0px_2px_16px_0px_violet-600]">
                        <p className=" duration-200 tracking-wide group-active:translate-y-[5%] text-white">
                            Say Hello
                        </p>
                    </Link>
                </div>

                {/* android_app */}
                <div className='flex gap-5 items-center justify-center md:hidden fixed bottom-0 backdrop-blur-lg w-full px-2 bg-zinc-200/70 dark:bg-zinc-950/50'>
                    <a href={Resume} download="Shreyash Dhulrao.pdf" className=' p-2 flex flex-col items-center justify-center text-sm' target='_blank'>
                    <Document className="w-5 h-5"/> Resume
                    </a>
                    <Link to="/projects" className=' p-2 flex flex-col items-center justify-center text-sm'>
                        <Projects className="w-5 h-5"/> Projects
                    </Link>
                    <Link to="/contact" className=' p-2 flex flex-col items-center justify-center text-sm'>
                        <Contact className="w-5 h-5"/> Contact
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default index