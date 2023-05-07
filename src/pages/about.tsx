import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image';
import profilePicture from '../image/z4278935528358_c9460b6b17575b98bbc5c041eed0c9c5.jpg';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const about = () => {
    return (
        <>
            <Head>
                <title>Tien Dat | About Page</title>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16 bg-inherit'>
                    <h1 className='font-semibold text-7xl py-6 w-full mb-4 text-center'>Passion Fuels Purpose!</h1>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-semibold uppercase text-black'>Biography</h2>
                            <p className='font-medium mb-4'>
                                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.

                            </p>
                            <p className='font-medium mb-4'>
                                I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.

                            </p>
                            <p className='font-medium mb-4'>
                                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-3 h-max relative bg-white -z-10 border-2 border-solid border-black rounded-xl p-4 '>
                            {/* <div className='absolute top-0 bg-black -right-2 -z-50 w-[102%] h-[103%] rounded-xl' /> */}
                            <Image src={profilePicture} alt='avatar' className='w-full h-auto rounded-xl drop-shadow-2xl' />
                        </div>
                    </div>
                    {/* <Experience /> */}
                </Layout>
                <Skills />
                <Education />
            </main>
        </>
    )
}

export default about