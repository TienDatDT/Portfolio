import React from 'react'
import { TextCircle } from './Icon'
import Link from 'next/link'

const HiredMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-52 h-auto flex items-center justify-center relative '>
            <TextCircle className='w-auto h-52 animate-spin-slow' />
            {/* <Link className='absolute rounded-full bg-black text-white w-16 h-16 left-1/2 top-1/2 flex items-center -translate-y-[76%] -translate-x-1/2' href='mailto:tdat2210@gmail.com'>Hire me</Link> */}
        </div>
    </div>
  )
}

export default HiredMe