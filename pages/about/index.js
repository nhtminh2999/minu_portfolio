import { motion } from 'framer-motion'
import Head from 'next/head'
import Logo from '../../components/Logo'
import ParticlesEffect from '../../components/ParticlesEffect'
import PowerButton from '../../components/PowerButton'
import SocialIcons from '../../components/SocialIcons'
import particleConfig from "../../config/particlesjs-config.json";

const variants = {
  hidden: { opacity: 0, left: '100vw' },
  enter: { opacity: 1, left: 0 },
  exit: { opacity: 0, left: '100vw' },
}

function About() {
  return (
    <>
      <Head>
        <title>Minu&apos;s Portfolio</title>
      </Head>
      <main className='overflow-hidden'>
        <motion.div
          className='relative bg-light h-[100vh] w-full flex items-center bg-about bg-no-repeat bg-right-top bg-contain'
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'tween', duration: 1.2 }}
        >
          <ParticlesEffect config={particleConfig} />
          <PowerButton />
          <Logo theme='light' />
          <SocialIcons theme='light' />

          <h1 className='fixed font-bold text-[calc(5rem+5vw)] z-0 top-[10%] left-[5%] text-[rgb(255,183,197,0.2)] uppercase font-source-san-pro'>
            About
          </h1>
          <motion.div
            className='absolute border-2 border-solid border-dark px-8 text-justify
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light lg:bg-transparent lg:backdrop-blur-[4px]
            font-ubuntu-mono italic font-bold text-[calc(0.6rem+1vw)]
            w-9/12 lg:w-1/2 overflow-hidden
            lg:left-40 lg:top-40 lg:translate-x-0 lg:translate-y-0'
            initial={{ opacity: 0, paddingTop: 0, paddingBottom: 0 }}
            animate={{ opacity: 1, paddingTop: '6rem', paddingBottom: '6rem' }}
            transition={{ type: 'tween', duration: 2, delay: 1 }}
          >
            <p className=''>
              I&apos;m a front-end developer located in Viet Nam. I love to create simple yet beautiful websites with great user experience.
            </p>
            <br />
            <p>
              I&apos;m interested in the whole frontend stack Like trying new things and building great projects.
            </p>
            <br />
            <p>
              You can connect with me via social links.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}

export default About