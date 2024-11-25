import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../Icons/ArrowLeft.svg?react'
import Navbar from '../Navbar'
import Facebook from '../../Icons/Social/Facebook.svg?react'
import Instagram from '../../Icons/Social/Instagram.svg?react'
import Linkedin from '../../Icons/Social/Linkedin.svg?react'
import Github from '../../Icons/Social/Github.svg?react'
import Mail from '../../Icons/Social/Mail.svg?react'
import Mobile from '../../Icons/Social/Mobile.svg?react'
import Background1 from '../../Images/Light.jpg'
import Background2 from '../../Images/Dark.jpg'
import { useSelector } from 'react-redux'


const index = () => {
    const Theme = useSelector(items => items.Theme.value)

    const arr = [
        {
            name: "Facebook",
            icon: Facebook,
            link: "https://www.facebook.com/shreyashdhularao.shreyashdhularao?mibextid=ZbWKwL"
        },
        {
            name: "Instagram",
            icon: Instagram,
            link: "https://www.instagram.com/shreyash.dhulrao?igsh=aGM3NjUzbGVseXN2"
        },
        {
            name: "Linkedin",
            icon: Linkedin,
            link: "https://www.linkedin.com/in/shreyash-dhulrao-47b519228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name: "Github",
            icon: Github,
            link: "https://github.com/Shreyash-Dhulrao"
        },
    ]
    return (
        <div>
            <div className=' relative dark:bg-zinc-950 bg-zinc-100 no-scrollbar overflow-y-scroll h-screen scroll-smooth'>
                <div className='fixed h-screen '>
                    {Theme === "dark" ? <img src={Background2} className='md:object-cover min-h-screen min-w-fit' /> :
                        <img src={Background1} className='md:object-cover min-h-screen min-w-fit' />
                    }
                </div>
                <div className='relative min-h-screen scroll-smooth font-Mona'>
                    <Navbar />
                    <div className='flex flex-col items-center pt-4 relative dark:text-white'>
                        <div className='w-full'>
                            <Link to="/" className='flex md:gap-2 gap md:text-lg text-sm items-center w-fit px-2 '>
                                <ArrowLeft className="md:w-10 md:h-10 w-8 h-8" />Back
                            </Link>
                        </div>
                        <div>
                            <h2 className='text-center font-semibold md:text-5xl text-2xl font-Mona'>Contact Me</h2>
                        </div>

                        {/* contact form */}
                        <div className='flex w-full dark:bg-zinc-900 bg-zinc-50 mt-3 '>
                            <div className='lg:w-1/2 w-full  p-10'>
                                <form action="https://formspree.io/f/xldrvevq" method='post' className='flex flex-col w-full my-3 gap-3'>
                                    <input type="text" name='Username' placeholder='Full Name' className='placeholder:text-current p-3 outline-none bg-transparent border-b-2' />
                                    <input type="email" name='Email' placeholder='Email' className='placeholder:text-current p-3 outline-none bg-transparent border-b-2' />
                                    <textarea name="Message" id="Text message" placeholder='Enter Message' className='placeholder:text-current p-3 outline-none bg-transparent border-b-2' />
                                    <button type='submit' className='dark:bg-zinc-800 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 transition duration-300 py-3 rounded-md dark:text-white'>Submit</button>
                                    </form>
                            </div>
                            <div className='flex-col items-center justify-center gap-3 p-3 lg:flex hidden'>
                                <div className='flex items-center gap-3  justify-center flex-col'>
                                    <p className='flex items-center gap-2'>
                                        <Mobile className="w-8 h-8" />
                                        +91 7057070480</p>
                                    <p className='flex items-center gap-2'>
                                        <Mail className="w-8 h-8" />
                                        shreyashdhulrao@gmail.com</p>
                                </div>
                                <div className='flex items-center gap-3  justify-center border-t w-full'>
                                    {arr.map((Items) => {
                                        return (
                                            <div class="group  md:relative dark:text-white rounded-full  text-violet-500  flex items-center justify-center">
                                                <a target='_blank' href={Items.link} className='flex items-center justify-center'>
                                                    <Items.icon className="md:w-12  md:h-12 w-9 h-9 dark:text-white group-hover:scale-110 duration-200 text-black group-hover:text-violet-500  md:p-3 p-2 group md:rounded-xl rounded-md " />
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='flex items-center gap-3  justify-center '>
                                <p className='tracking-wide'>Connect with me on my social media channels for updates, insights, and more!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
