import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({ ...props }) => {
  return (
    <motion.div className='flex px-8 py-2 items-center justify-center rounded-xl font-semibold text-lg bg-black text-white
    cursor-pointer absolute'
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: props.x, y: props.y }}
      transition={{ duration: 1.5 }}
    >
      {props.name}

    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-7xl text-center w-full '>Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <div className='rounded-full text-2xl bg-black text-white
          hover:w-24 hover:h-24 ease-out duration-200 cursor-pointer w-20 h-20 font-bold flex items-center justify-center '>
          Web
        </div>
        <Skill name='CSS' x='-20vw' y='2vw' />
        <Skill name='HTML' x='-30vw' y='-10vw' />
        <Skill name='JavaScript' x='-35vw' y='8vw' />
        <Skill name='Figma' x='-10vw' y='-15vw' />
        <Skill name='ReactJS' x='20vw' y='8vw' />
        <Skill name='NextJS' x='10vw' y='-8vw' />
        <Skill name='TailwindCSS' x='8vw' y='12vw' />
      </div>
    </>
  )
}

export default Skills