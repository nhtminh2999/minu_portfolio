import { motion } from 'framer-motion'
import React from 'react'
import { Github } from './AllSvgs'

const Card = ({ name, description, demo, github, tags = [] }) => {
  return (
    <motion.div
      initial={{ transform: 'scale(0)' }}
      animate={{ transform: 'scale(1)' }}
      transition={{ type: 'tween', duration: 1, delay: 1 }}
      className='flex bg-light flex-col justify-between items-stretch border-[1px] border-solid border-dark h-full
        transition-all duration-200 ease-in rounded-tr-[50px] rounded-bl-[50px] p-6 lg:py-6 lg:px-8'
    >
      <h2 className='text-[calc(1em+0.5vw)] font-source-san-pro font-bold'>
        {name}
      </h2>
      <h4 className='text-[calc(0.8em+0.3vw)] py-10 font-medium'>
        {description}
      </h4>
      <div className='border-t-2 border-solid border-dark flex flex-wrap pt-2 pb-10'>
        {tags && tags.map((t, index) => (
          <span key={index} className='mr-4 text-[calc(0.8em+0.3vw)]'>
            #{t}
          </span>
        ))}
      </div>
      <div className='flex justify-between'>
        <a href={demo} target='_blank' rel='noopener noreferrer' className='btn-visit'>
          <span className='relative z-[2]'>Visit</span>
        </a>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <Github className='w-[30px] h-[30px]' />
        </a>
      </div>
    </motion.div>
  )
}

export default Card