import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GitIcon, FacebookIcon } from './Icon'

const CustomLink=({href='string', title='string', classname=''})=>{
    const router=useRouter();
    console.log(router)
    return(
        <Link href={href} className='mr-4 relative group'>{title}
        
        
        <span className={`bg-black inline-block h-[1px] absolute left-0 -bottom-1 
        group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {

  return (
    <header
        className='w-full px-32 py-8 font-medium flex justify-between items-center'
    >
        <nav>
            <CustomLink href='/' title='Home' />
            <CustomLink href='/about' title='About' />
            <CustomLink href='/project' title='Projects' />
            <CustomLink href='/article' title='Article' />
        </nav>
        <Logo/>
        <nav className='flex items-center justify-between flex-wrap'>
            <Link className='hover:-translate-y-1 mr-4 w-8' href='https://twitter.com/?lang=en' target='_blank'><TwitterIcon/></Link>
            <Link className='hover:-translate-y-1 mr-4 w-8' href='https://github.com/' target='_blank'><GitIcon/></Link>
            <Link className='hover:-translate-y-1 mr-4 w-8' href='https://www.facebook.com/' target='_blank'><FacebookIcon/></Link>
        </nav>
    </header>
  )
}

export default Navbar   