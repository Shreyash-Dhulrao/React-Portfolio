import React from 'react'
import Social from './Social/Index'

const index = () => {
    return (
        <div>
            <div className='bg-violet-600 flex flex-col items-center justify-center md:py-20 py-10 md:mb-0.5  mb-12  gap-5 text-white'>
                <div className='text-center flex gap-2 flex-col'>
                <p className='md:text-2xl text-md font-medium'>Building, breaking, and debugging</p>
                <p className='md:text-lg text-md'>growing stronger with every line of code.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Social />
                </div>
                <div >
                    <p>HandCrafted by Me © Twenty Twenty Five </p>
                </div>
            </div>
        </div>
    )
}

export default index
