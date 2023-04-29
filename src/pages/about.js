import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/Aditya Anil Nair - Photo - Black BG.jpg'

const about = () => {
  return (
    <>
        <Head>
            <title>Aditya Anil Nair | About Me Page</title>    
            <meta name="description" content="any description" />
        </Head>  
        <main className="flex w-full flex-col items-center justify-center">
          <Layout className="pt-16">
            <AnimatedText text="Pushing Boundaries Creatively!" className="mb-16"/>
            <div className="grid w-full grid-cols-8 gap-16">
              <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-xl font-bold uppercase text-dark/75">About Me</h2>
                <p className="font-medium text-lg">
                  I am Aditya Anil Nair, a proficient full-stack web developer with a strong passion for machine learning. My experience in developing dynamic web applications, combined with my interest in machine learning algorithms, allows me to bridge the gap between creativity and technology. I am constantly exploring novel ways to integrate machine learning into web development to come up with innovative solutions.
                </p>
                <p className='my-4 font-medium text-lg'>
                  As a full-stack web developer and machine learning enthusiast, I believe that these two technologies have enormous potential in solving real-world problems. By combining the power of web development and machine learning, we can create intelligent applications that can revolutionize various industries. I am excited about the possibilities and eager to contribute to the development of these groundbreaking solutions.
                </p>
                <p className='font-medium text-lg'>
                  My methodical approach to problem-solving enables me to identify and address issues efficiently, allowing me to focus on delivering high-quality results. Once I commit to a project, I prioritize it as my top priority, working tirelessly to ensure that the project meets the intended outcomes and objectives. I'm excited about the prospect of utilizing my skills and knowledge in your upcoming project to help drive its success.
                </p>
              </div>
              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image src={profilePic} alt="Aditya Anil Nair" className="w-full h-auto rounded-2xl" />
              </div>
              <div>
                <div>
                  <span>
                    
                  </span>
                </div>
              </div>
            </div>
          </Layout>
        </main>  
    </>
  )
}

export default about