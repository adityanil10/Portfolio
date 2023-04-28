import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;
          <Link href="https://www.linkedin.com/in/aditya-anil-nair/" className="underline underline-offset-2" target={"_blank"}>Aditya</Link>
        </div>
        <Link href="mailto:adityanil10@gmail.com" className="underline underline-offset-2" target={"_blank"}>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer