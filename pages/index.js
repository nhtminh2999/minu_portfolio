import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { YinYang } from '../components/AllSvgs'
import Logo from '../components/Logo'
import PowerButton from '../components/PowerButton'
import SocialIcons from '../components/SocialIcons'
import { motion } from 'framer-motion'
import Intro from '../components/Intro'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

function Home() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Head>
        <title>Minu&apos;s Porfolio</title>
      </Head>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear', duration: 1 }}
      >
        <div className="relative bg-light dark:bg-dark w-[100vw] h-[100vh] overflow-hidden">
          <div className={`absolute top-0 right-0 lg:right-1/2 w-1/2 h-full bg-dark z-[1] transition-w-h
            ${click ? 'h-1/2 lg:h-full' : 'h-0'} 
            ${click ? 'w-full lg:w-1/2' : 'w-0'}`}
          >
          </div>
          <div className="p-8">
            <PowerButton />
            <Logo theme={click ? 'dark' : 'light'} />
            <SocialIcons theme={click ? 'dark' : 'light'} home={true} />

            {click ? <Intro /> : null}
            <div className={`absolute ${click ? 'top-[90%] lg:top-[85%]' : 'top-1/2'} ${click ? 'left-[90%] lg:left-[92%]' : 'left-1/2'} 
               -translate-y-1/2 -translate-x-1/2  border-none outline-none bg-transparent cursor-pointer
               flex flex-col justify-center items-center transition-all duration-1000 ease-in-out`}
            >
              <YinYang
                onClick={handleClick}
                className={`animate-[spin_1.5s_linear_infinite]
                  ${click ? 'w-10 h-10 lg:w-[150px] lg:h-[150px]' : 'w-[150px] h-[150px]'}`}
                fill='currentColor'
              />
              <span className={`${click ? 'hidden' : 'inline-block'} pt-4`}>click here</span>
            </div>

            <a
              href='mailto:nhtminh2999@gmail.com' rel='noopener noreferrer'
              className={`absolute top-[2rem] right-[calc(1rem+2vw)] z-[3] ${!click ? 'text-dark' : 'text-light lg:text-dark'}`}
              target='_blank'
            >
              <motion.h2
                className='text-[1.17em]'
                initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Say hi..
              </motion.h2>
            </a>
            <Link href='/about'>
              <a className={`${!click ? 'text-dark' : 'text-light [text-shadow:0_0_4px_rgb(0,0,0)]'} 
                absolute top-1/2 -translate-y-1/2 rotate-90 right-[calc(1rem+2vw)] translate-x-1/2 z-[3]`}
              >
                <motion.h2
                  className='text-[1em] lg:text-[1.5em]'
                  initial={{
                    y: -200,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                    y: 0,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About
                </motion.h2>
              </a>
            </Link>
            <Link href='/work'>
              <a className={`${!click ? 'text-dark' : 'text-light [text-shadow:0_0_4px_rgb(0,0,0)]'} 
                absolute top-1/2 -translate-y-1/2 
                rotate-[270deg] left-[calc(1rem+2vw)] -translate-x-1/2 z-[3]`}
              >
                <motion.h2
                  className='text-[1em] lg:text-[1.5em]'
                  initial={{
                    y: -200,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                    y: 0,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Projects
                </motion.h2>
              </a>
            </Link>
            <div className='flex justify-evenly items-center absolute left-0 bottom-4 w-full z-[3]'>
              <Link href='/skill'>
                <a className={`${!click ? 'text-dark' : 'lg:text-light lg:[text-shadow:0_0_4px_rgb(0,0,0)]'} `}>
                  <motion.h2
                    className='text-[1em] lg:text-[1.5em]'
                    initial={{
                      y: 200,
                      transition: { type: 'spring', duration: 1.5, delay: 1 }
                    }}
                    animate={{
                      y: 0,
                      transition: { type: 'spring', duration: 1.5, delay: 1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    My skills.
                  </motion.h2>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  )
}

export default Home