import React from 'react'
import alphatype from './Images/Keyboard.jpg'
import VideoCalling from './Images/VideoCalling.jpg'
import ReactImg from './Images/React.png'
import TailwindImg from './Images/Tailwind.png'
import FirebaseImg from './Images/Firebase.png'


const Work = () => {
    return (
        <div className='min-h-screen h-full pt-20 bg-zinc-50 dark:bg-zinc-900'>
            <div>
                <h2 class="mb-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-Giarek tracking-wider">Work</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-3 p-5 font-["Raleway"]'>
                    <a href="https://alphatype.vercel.app " target='_blank'>
                        <div class="max-w-sm  bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-xl">
                            <img className='w-fill' src={alphatype} alt="" />
                            <div class="p-5">
                                <div className='flex w-full items-center gap-2'>
                                <h5 class="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">Alpha Type </h5>
                                <img src={ReactImg} alt="" className=' h-5' />
                                <img src={TailwindImg} alt="" className=' h-4' />
                                <img src={FirebaseImg} alt="" className=' h-6' />
                                </div>
                                <h5 class="mb-2 md:text-md text-md font-medium text-orange-600 dark:text-orange-500">React Js, Tailwind CSS, Firebase.</h5>
                                <p class="mb-3 md:text-md text-sm font-normal text-gray-700 dark:text-gray-400">Alpha Type is your go-to platform to improve typing speed and accuracy. Whether you're a beginner or looking to refine your skills, Alpha Type provides personalized exercises and progress tracking to help you type faster and more efficiently.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://alphatype.vercel.app " target='_blank'>
                        <div class="max-w-sm  bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-xl">
                            <img className='w-fill' src={VideoCalling} alt="" />
                            <div class="px-5 py-4">
                                <div className='flex w-full items-center gap-2'>
                                <h5 class="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">Video Calling App </h5>
                                <img src={ReactImg} alt="" className=' h-5' />
                                <img src={TailwindImg} alt="" className=' h-4' />
                                </div>
                                <h5 class="mb-2 md:text-md text-md font-medium text-orange-600 dark:text-orange-500">React Js, Tailwind CSS, ZegoCloud.</h5>
                                <p class=" md:text-md text-sm font-normal text-gray-700 dark:text-gray-400">This video calling app leverages ZEGOCLOUD's robust infrastructure to provide seamless, high-quality video communication. Designed for efficiency, the app offers real-time video and audio calls, ensuring smooth interactions with minimal latency.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work
