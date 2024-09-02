import React from 'react'
import ContactMe from './Images/Contact.png'

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-white dark:bg-zinc-800 dark:text-white'>
      <div className='md:w-11/12 w-full flex items-center justify-center bg-orange-50 dark:bg-zinc-900 '>
        <div>
            <img src={ContactMe} alt="" className='w-11/12 p-10 lg:flex hidden' />
        </div>
        <div className=' md:w-4/5 w-full p-10 md:p-12 h-full'>
            <h2 className='lg:text-4xl text-3xl font-Giarek'>Let's Work Together</h2>
            <p className='font-Raleway lg:text-lg text-md'>I'm here to help you on your Project! Feel free to contact me using the FORM</p>
            <form action="https://formspree.io/f/xldrvevq" method='post' className='flex flex-col w-full my-3 gap-3'>
                <input type="text" name='Username' placeholder='Full Name' className='placeholder:text-current p-3 outline-none bg-transparent border-b-2' />
                <input type="email" name='Email' placeholder='Email'  className='placeholder:text-current p-3 outline-none bg-transparent border-b-2'/>
                <textarea name="Message" id="Text message" placeholder='Enter Message' className='placeholder:text-current p-3 outline-none bg-transparent border-b-2'/>
                <input type="submit" value="Send Message" className=' py-5 rounded-xl bg-white dark:bg-zinc-800'/>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Contact
