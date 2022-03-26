import { motion } from 'framer-motion'
import Head from 'next/head'
import { YinYang } from '../../components/AllSvgs'
import Logo from '../../components/Logo'
import PowerButton from '../../components/PowerButton'
import SocialIcons from '../../components/SocialIcons'
import WorkSwiper from '../../components/WorkSwiper'
import { Work as WorkData } from '../../data/WorkData'

const variants = {
  hidden: { opacity: 0, x: '-1000' },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-1000' },
}

function Work() {
  return (
    <>
      <Head>
        <title>Minu&apos;s Portfolio</title>
      </Head>
      <main className='overflow-hidden'>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'linear', duration: 1.2 }}
          className='relative bg-dark h-[100vh] flex justify-center items-center'
        >
          <PowerButton />
          <Logo theme='dark' />
          <SocialIcons theme='dark' />
          <h1 className='fixed text-[calc(2rem+5vw)] sm:text-[calc(3rem+5vw)] lg:text-[calc(5rem+5vw)] z-0 top-[14%] left-[5%] 
          text-[rgb(255,255,255,0.2)] uppercase font-source-san-pro font-bold'
          >
            Projects
          </h1>
          <div className={`fixed bottom-8 right-8 border-none outline-none bg-transparent
            flex flex-col justify-center items-center transition-all duration-1000 ease-in-out`}
          >
            <YinYang
              className={`animate-[spin_1.5s_linear_infinite] w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]`}
              fill='#FCF6F4'
            />
          </div>

          <div className='container'>
            <div className='px-12'>
              <WorkSwiper dataSource={WorkData} />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  )
}

export default Work