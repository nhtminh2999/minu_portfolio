import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, YouTube } from './AllSvgs'

const SocialIcons = ({ theme = 'light', home = false }) => {
  const [fillColor, setFillColor] = useState('')
  const [bgColor, setBgColor] = useState('')

  useEffect(() => {
    if (home) {
      if (theme === 'light') {
        setFillColor('fill-dark')
        setBgColor('bg-dark')
      } else {
        setFillColor('fill-dark lg:fill-light')
        setBgColor('bg-dark lg:bg-light')
      }
    } else {
      if (theme === 'light') {
        setFillColor('fill-dark')
        setBgColor('bg-dark')
      } else {
        setFillColor('fill-light')
        setBgColor('bg-light')
      }
    }
  }, [theme, home])

  return (
    <div className='fixed flex flex-col items-center left-4 lg:left-8 bottom-0 z-[3]'>
      <motion.div
        className='my-[0.5rem]'
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a href='https://github.com/nhtminh2999' target='_blank' rel='noopener noreferrer' >
          <Github className={`w-5 h-5 lg:w-[25px] lg:h-[25px] ${fillColor}`}
          />
        </a>
      </motion.div>
      <motion.div
        className='my-[0.5rem]'
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a href='https://www.facebook.com/minhnguyen2999' target='_blank' rel='noopener noreferrer' >
          <Facebook className={`w-5 h-5 lg:w-[25px] lg:h-[25px] ${fillColor}`}
          />
        </a>
      </motion.div>
      {/* <motion.div
        className='my-[0.5rem]'
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a href='/' target='_blank' rel='noopener noreferrer' >
          <YouTube className={`w-5 h-5 lg:w-[25px] lg:h-[25px] ${fillColor}`}
          />
        </a>
      </motion.div> */}
      <motion.div
        className='my-[0.5rem]'
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a href='https://www.linkedin.com/in/minh-nguyễn-012603217/' target='_blank' rel='noopener noreferrer'>
          <Linkedin className={`w-5 h-5 lg:w-[25px] lg:h-[25px] ${fillColor}`}
          />
        </a>
      </motion.div>
      <motion.div
        className={`inline-block w-[2px] max-h-20 lg:max-h-32 ${bgColor}`}
        initial={{ height: 0 }}
        animate={{ height: '8rem' }}
        transition={{ type: 'spring', duration: 1, delay: 0.4 }}
      />
    </div>
  )
}

export default SocialIcons