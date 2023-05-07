import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

const Details = ({ ...props }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{props.position}</h3>
                <span className='capitalize font-medium text-black'>
                    {props.time} | {props.school}
                </span>
                <p className='font-medium w-full'>
                    {props.major}
                </p>
            </div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>

            <div className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-black origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Student at four years"
                        time='2019-2023'
                        school='Sai Gon University'
                        major='Infomation Systems'
                    />
                    <Details
                        position="Completed F8 courses"
                        school='fullstack.edu.vn'
                        major='HTML/CSS- JavaScript'
                    />
                </ul>
            </div>

        </div>
    )
}

export default Education