import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Link href='/' className='w-16 h-16 bg-black text-lime-50 rounded-full text-2xl font-bold justify-center items-center'>
                TD</Link>
        </div>
    )
}

export default Logo