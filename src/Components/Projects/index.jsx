import React, { useState, useEffect } from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../Icons/ArrowLeft.svg?react'
import Navbar from '../Navbar'
import Background1 from '../../Images/Light.jpg'
import Background2 from '../../Images/Dark.jpg'
import { useSelector } from 'react-redux'

const index = () => {
    const Theme = useSelector(items => items.Theme.value)
    const [data, setData] = useState(Data);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000)); 
          setData(data);
          setIsLoading(false); 
        };
        loadData();
      }, []);

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
                            <h2 className='text-center font-semibold md:text-5xl text-2xl font-Mona'>Projects</h2>
                        </div>
                    </div>
                    {/* pc tab  */}
                    {
                        isLoading ? (
                            <div className="flex justify-center hidden items-center w-full md:grid xl:grid-cols-3 grid-cols-2 xl:gap-10 gap-3 lg:ps ps-8 lg:mt-2 mt-4 lg:p-6">
                                {data.map((_, index) => (
                                    <div
                                        key={index}
                                        className="relative lg:h-[400px] lg:w-[400px] w-[320px] h-[320px] bg-zinc-800 animate-pulse rounded-lg shadow-md"
                                    >
                                        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center dark:text-white">
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='relative hidden w-full md:grid xl:grid-cols-3 grid-cols-2 xl:gap-10 gap-3 lg:ps ps-8 lg:mt-2 mt-4 lg:p-6'>
                                {data.map((items) => {
                                    return (
                                        <div
                                            key={items.id}
                                            className="card bg-blue-300 dark:text-white shadow-[0px_4px_16px_px_#367E08] lg:h-[400px] lg:w-[400px] w-[320px] h-[320px] group lg:rounded-[1.5em] rounded-[1em] relative flex justify-end flex-col overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 h-full w-full bg-zinc-500">
                                                <img src={items.image} alt={items.name} />
                                            </div>
                                            <div className="container lg:gap-2 gap-1 relative flex flex-col dark:bg-zinc-900 bg-zinc-100 lg:py-8 py-6 px-2 md:px-5">
                                                <div className="h-fit w-full flex gap-5 items-center">
                                                    <h1 className="card_heading lg:text-[1.5em] text-[1.2em] tracking-wider font-Mona">
                                                        {items.name}
                                                    </h1>
                                                    <div className='flex gap-3'>
                                                        {items.icons.map((Icon, index) => (
                                                            <img
                                                                key={index}
                                                                src={Icon}
                                                                className="lg:w-10 lg:h-10 w-8 h-8 rounded-lg p-1.5 text-white dark:bg-zinc-950 bg-zinc-50"
                                                                alt=""
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="md:flex hidden justify-center items-center h-fit w-fit md:gap-[0.5em]">
                                                    <div
                                                        className="border-2 border-zinc-500 md:py-2 py-1 px-2 md:px-3 hover:bg-violet-500 rounded-xl hover:text-white duration-300 cursor-pointer"
                                                    >
                                                        <a href={items.link} target='_blank' rel="noopener noreferrer">Website</a>
                                                    </div>
                                                    <div
                                                        className="border-2 border-zinc-500 py-2 px-3 hover:bg-violet-500 rounded-xl hover:text-white duration-300 cursor-pointer"
                                                    >
                                                        <a href={items.github} target='_blank' rel="noopener noreferrer">Github</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="block overflow-y-scroll pb-1 no-scrollbar relative h-[0em] lg:text-lg text-sm dark:bg-zinc-900 bg-zinc-100 md:px-4 px-1 group-hover:h-3/4 duration-500 overflow-hidden">
                                                {items.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    }

                    {/* android */}
                    {
                        isLoading ? (
                            <div className="w-full mt-3">
                                {data.map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex w-full dark:text-white h-32 bg-zinc-800 mb-2 animate-pulse gap-2 p-4 md:hidden inline-flex"
                                    >
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='md:hidden inline-flex mt-3 flex-col gap-2 font-Mona'>
                                {data.map((items) => {
                                    return (
                                        <div key={items.id} className='p-3 flex bg-zinc-200 dark:bg-zinc-900 dark:text-white w-full'>
                                            <div className='w-1/3 h-1/3 '>
                                                <img src={items.image} alt="" className='w-full h-full rounded-xl dark:bg-zinc-600 bg-zinc-100' />
                                            </div>
                                            <div className='w-2/3  mx-4 flex flex-col gap-2'>
                                                <div className=' w-full'>
                                                    <h2 className='text-[1.2em] font-semibold '>{items.name}</h2>
                                                    <div className='flex gap-3 '>
                                                        {items.icons.map((Icon) => {
                                                            return (
                                                                <img src={Icon} className="w-7 h-7 rounded-lg p-1.5 text-white dark:bg-zinc-950 bg-zinc-50" />
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className='text-white flex gap-4'>
                                                    <a href={items.link} className='bg-violet-600 flex px-2 py-1 flex items-center justify-center gap-1 rounded-lg'>Website
                                                    </a>
                                                    <a href={items.github} className='bg-violet-600 flex px-2 py-1 flex items-center justify-center gap-1 rounded-lg'>Github
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default index
