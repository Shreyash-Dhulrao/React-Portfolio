import React from 'react'
import { useState , useEffect} from 'react'
import Home from './Icons/Home.svg?react'
import Work from './Icons/Work.svg?react'
import Contact from './Icons/Contact.svg?react'
import Menu from './Icons/Menu.svg?react'
import Sun from './Icons/Sun.svg?react'
import { Link } from 'react-router-dom'
import useTheme from '../Context/Theme'

const Navbar = () => {
  const [Menuand, setMenuand] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0);
  const { themeMode, lightTheme, darkTheme } = useTheme()
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
      lightTheme()
    } else {
      darkTheme()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);   

    };
  }, []);
  return (
    <div>
      
      <div className='w-screen bg-orange-50/75 backdrop-blur-md dark:bg-zinc-900/50  transition duration-300 fixed dark:text-white flex justify-around'>
        <div className='flex items-center justify-center'>
          <h2 className='md:text-3xl text-xl font-["New_York_Regular"]  '>PORTFOLIO</h2>
        </div>
        <div className=' items-center gap-3 text-center md:inline-flex hidden font-["Raleway"] tracking-wide'>
          <Link to='/' className='group flex items-center dark:hover:text-orange-500 hover:text-orange-500 dark:text-white p-2  gap-2 transition duration-300 linear'>
            <Home className="text-black dark:text-zinc-100 dark:hover:text-orange-500 w-6 group-hover:text-current" />Home
          </Link>
          <Link to='/work' className='group flex items-center dark:hover:text-orange-500 hover:text-orange-500 dark:text-white p-2  gap-2 transition duration-300 linear'>
            <Work className="text-black dark:text-zinc-100 dark:hover:text-orange-500 w-6 group-hover:text-current" />Work
          </Link>
          <Link to='/contact' className='group flex items-center dark:hover:text-orange-500 hover:text-orange-500 dark:text-white p-2  gap-2 transition duration-300 linear'>
            <Contact className="text-black dark:text-zinc-100 dark:hover:text-orange-500 w-6 group-hover:text-current" />Contact Me
          </Link>

          <input type="checkbox" onChange={onChangeBtn} checked={themeMode === 'light'} hidden id='Theme' />
          <label htmlFor="Theme">
            <Sun className="text-black dark:text-white w-9 rounded-3xl outline outline-1 h-auto p-2" />
          </label>
        </div>
        <div className='md:hidden flex gap-3'>
          <input type="checkbox" onChange={onChangeBtn} checked={themeMode === 'light'} hidden id='Theme' />
          <label htmlFor="Theme">
            <Sun className="text-black dark:text-white w-8 my-2 rounded-3xl outline outline-1 h-auto p-2" />
          </label>
          <button onClick={() => { (Menuand === false) ? setMenuand(true) : setMenuand(false) }} className=''>
            <Menu className="text-black dark:text-white w-6" />
          </button>
        </div>
        <div className="fixed top-0 lg:mx-10 lg:mt-0.5 left-0 right-0 h-1 bg-transparent">
      <div className="h-full bg-orange-400 " style={{ width: `${scrollProgress}%` }}>
      </div>
    </div>
        {Menuand && (
          <div
            className={`items-center transition-all ease-in-out duration-700 gap-1 text-center md:hidden flex flex-col absolute right-0 bg-orange-50/75 backdrop-blur-md dark:bg-zinc-800/50 w-1/2 h-screen top-12 transform ${Menuand ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <Link to='/' className='group backdrop-blur-lg flex items-center border-b-2 dark:hover:text-orange-500 border-transparent hover:border-orange-400 hover:text-orange-400 dark:text-white w-full gap-2 bg-orange-100/50 items-center justify-center dark:bg-zinc-600/50'>
              <Home className="text-black dark:text-zinc-100 dark:hover:text-orange-500 w-6 group-hover:text-current" />Home
            </Link>
            <Link to='/work' className='group backdrop-blur-lg flex items-center border-b-2 dark:hover:text-orange-500 border-transparent hover:border-orange-400 hover:text-orange-400 dark:text-white w-full gap-2 bg-orange-100/50 items-center justify-center dark:bg-zinc-600/50'>
              <Work className="text-black dark:text-zinc-100 dark:hover:text-orange-500 w-6 group-hover:text-current" />Work
            </Link>
            <Link to='/contact' className='group backdrop-blur-lg flex items-center border-b-2 dark:hover:text-orange-500 border-transparent hover:border-orange-400 hover:text-orange-400 dark:text-white w-full gap-2 bg-orange-100/50 items-center justify-center dark:bg-zinc-600/50'>
              <Contact className="text-black dark:text-zinc-100 dark:hover:text-orange-500 w-6 group-hover:text-current" />Contact Me
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
