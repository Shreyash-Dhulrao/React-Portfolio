import React from 'react';
import Facebook from '../../../Icons/Social/Facebook.svg?react'
import Instagram from '../../../Icons/Social/Instagram.svg?react'
import Linkedin from '../../../Icons/Social/Linkedin.svg?react'
import Github from '../../../Icons/Social/Github.svg?react'
import Mail from '../../../Icons/Social/Mail.svg?react'
import Mobile from '../../../Icons/Social/Mobile.svg?react'

const Button = () => {
    const arr = [
        {
            name:"Facebook",
            icon: Facebook,
            link: "https://www.facebook.com/shreyashdhularao.shreyashdhularao?mibextid=ZbWKwL"
        },
        {
            name:"Instagram",
            icon: Instagram,
            link: "https://www.instagram.com/shreyash.dhulrao?igsh=aGM3NjUzbGVseXN2"
        },
        {
            name:"Linkedin",
            icon: Linkedin,
            link:"https://www.linkedin.com/in/shreyash-dhulrao-47b519228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name:"Github",
            icon: Github,
            link: "https://github.com/Shreyash-Dhulrao"
        },
    ]
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5 justify-center '>
            {arr.map((Items)=>{
                return (
                    <div class="group  md:relative dark:text-white rounded-full  text-violet-500  flex items-center justify-center">
            <span class="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg  bg-white dark:bg-black py-2 text-sm  transition-all duration-300 ease-in-out group-hover:scale-100">{Items.name}<span>
            </span></span>
                <a target='_blank' href={Items.link} className='flex items-center justify-center'>
                   <Items.icon className="md:w-12  md:h-12 w-9 h-9  md:opacity-80 md:group-hover:opacity-100 dark:text-white group-hover:scale-110 text-white duration-200 group-hover:text-violet-500 border border-zinc-300 hover:bg-white md:p-3 p-2 group md:rounded-xl rounded-md "/>
                   </a>
            </div>
                )
            })}
            </div>
            <div className='flex items-center justify-cetner flex-col gap-3'>
                <h2 className='md:text-2xl text-lg font-medium'>Contacts</h2>
                <div className='text-center md:opacity-80 items-center justify-center flex md:flex-row flex-col md:gap-4 gap-2 '>
                    <p className='flex items-center gap-2'>
                        <Mobile className="w-6 h-6"/>
                        +91 7057070480</p>
                    <p className='flex items-center gap-2'>
                        <Mail className="w-6 h-6"/>
                        shreyashdhularao@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Button;
