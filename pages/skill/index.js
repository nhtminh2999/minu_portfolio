import Head from 'next/head'
import Logo from '../../components/Logo'
import PowerButton from '../../components/PowerButton'
import SocialIcons from '../../components/SocialIcons'
import ParticlesEffect from '../../components/ParticlesEffect'
import particleConfig from "../../config/particlesjs-snow-config.json";
import { motion } from 'framer-motion'
import { Develope } from '../../components/AllSvgs'

const variants = {
  hidden: { opacity: 0, y: 1000 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 1000 },
}

function Skill() {
  return (
    <>
      <Head>
        <title>Minu&apos;s Portfolio</title>
      </Head>
      <main className='overflow-hidden'>
        <motion.div
          className='relative bg-transparent w-full h-auto md:h-[100vh] py-[8rem] md:py-0 flex items-center justify-center bg-skill'
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
          <div className="container px-[60px]">
            <div className="grid grid-cols-1 lg:w-1/2 mx-auto">
              <motion.div
                className='p-8 backdrop-blur-[4px] bg-white text-dark leading-[1.5] font-ubuntu-mono text-xl
                  border-2 border-solid border-[#48dbfb] overflow-hidden'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100%' }}
                transition={{ type: 'tween', duration: 3, delay: 1 }}
              >
                <h2 className='flex justify-center items-center text-[calc(1em+1vw)] font-bold font-ubuntu-mono mb-10'>
                  <Develope className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mr-4' />
                  Web Developer
                </h2>
                <div>
                  <strong>Languages: </strong>
                  <span>English, Vietnamese</span>
                </div>
                <br />
                <div>
                  <strong>Skills: </strong>
                  <span>HTML, CSS, SASS, TailwindCSS, JavaScript, React, Next, AntDesign, ExpressJS</span>
                </div>
                <br />
                <div>
                  <strong>Source version control: </strong>
                  <span>Github, Gitlab</span>
                </div>
                <br />
                <div>
                  <strong>Tool: </strong>
                  <span>VSCode</span>
                </div>
                <br />
                <div>
                  <strong>Certificate: </strong>
                  <span>SCRUM CERTIFICATE (Axon Active Vietnam)</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  )
}

export default Skill