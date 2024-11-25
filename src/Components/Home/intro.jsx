import React from 'react'
import { motion, AnimatePresence } from "motion/react"

const index = () => {
  const line1 = "Shreyash Dhulrao Portoflio"
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      }
    },
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    },

    exit: { hidden: { opacity: 0 }, transition: { duration: 0.5 } }
  };

  return (
    <div className='bg-red-300'>
      <div className='w-full h-screen flex items-center justify-center bg-zinc-950' >
        <AnimatePresence>
          <motion.h2
            className='load-screen--message'
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {
              line1.split("").map((item, index) => (
                <motion.span key={item + "-" + index} variants={letter} className='font-regular font-Mona text-xl tracking-wide text-white'>
                  {item}
                </motion.span>
              ))
            }
          </motion.h2>
        </AnimatePresence>
      </div>
      <div>

      </div>
    </div>
  )
}

export default index
