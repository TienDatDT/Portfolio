import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import profile from '../image/download-removebg-preview.png'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex text-black min-h-screen flex-col items-center justify-between p-24">
      <Layout className='pt-0 bg-inherit'>
        <div className='flex items-center justify-between w-full'>
          <div>
            <Image src={profile} alt='TIENDAT' className='w-full h-auto'></Image>
          </div>
          {/* <AnimatedText/> */}
          <div className='w-1/2'>
            <h1 className='font-semibold text-5xl py-6 w-full'>Turning Vision Into Reality With Code And Design. </h1>
            <p className='py-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            <div className='flex items-center'>
              <Link className='bg-black text-white p-2.5 px-6 text-lg rounded-lg font-semibold hover:text-black 
              hover:bg-white border border-solid border-transparent hover:border-black' href='/cv.pdf' target='_blank'>Resume</Link>
              <Link className='ml-4 text-lg font-medium capitalize hover:text-xl ease-in duration-100' href='mailto:tdat2210@gmail.com' target='_blank'>Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
