import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 tetx-lg font-medium border-solid border-black'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; Copy Rights</span>
            <div>
               Build by <Link className='underline' href='/'>TienDat</Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer