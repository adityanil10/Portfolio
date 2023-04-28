import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" 
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{
            scale:1.3,
            backgroundColor:["#121212", "rgba(0,0,128,1)", "rgba(136,8,8,1)", "#121212"]
        }}
        >
          A
        </MotionLink>
    </div>
  )
}

export default Logo