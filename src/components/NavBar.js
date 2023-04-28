import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from './Icons'
import Logo from './Logo'
import {motion} from "framer-motion"

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    console.log(router)
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About Me" className='mx-4' />
            <CustomLink href="/projects" title="Projects" className='ml-4' />
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://twitter.com/adityanil10" target={"_blank"} whileHover={{y:-3}} whileTap={{scale:0.9}} className="w-8 mr-4">
                <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com/adityanil10" target={"_blank"} whileHover={{y:-3}} whileTap={{scale:0.9}} className="w-8 mx-4">
                <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/aditya-anil-nair/" target={"_blank"} whileHover={{y:-3}} whileTap={{scale:0.9}} className="w-8 mx-4">
                <LinkedInIcon />
            </motion.a>
            <motion.a href="/" target={"_blank"} whileHover={{y:-3}} whileTap={{scale:0.8}} className="w-8 ml-4">
                <SunIcon />
            </motion.a>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
    </header>
  )
}

export default NavBar