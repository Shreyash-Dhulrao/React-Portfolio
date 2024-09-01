import React from 'react'
import Linkedin from './Icons/Linkedin.svg?react'
import Instagram from './Icons/Instagram.svg?react'
import Github from './Icons/Github.svg?react'

const Footer = () => {
  return (
    <div className='bg-zinc-900 text-zinc-400 text-center '>
        <div className='flex items-center justify-center gap-5 p-1'>
            <p className='md:block hidden'>Connect with me on Social Media: </p>
            <a href="https://www.linkedin.com/in/shreyash-dhulrao-47b519228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank'>
              <Linkedin className="w-6 text-orange-500 hover:text-orange-500" />
            </a>
            <a href="https://github.com/Shreyash-Dhulrao" target='_blank'>
              <Github className="w-5 text-orange-500 hover:text-orange-500" />
            </a>
            <a href="https://www.instagram.com/shreyash.dhulrao?igsh=aGM3NjUzbGVseXN2" target='_blank'>
              <Instagram className="w-6 text-orange-500 hover:text-orange-500" />
            </a>

        </div>
        <div className=' w-full pb-5'>
        <p>Copyright © Shreyash Dhulrao. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
