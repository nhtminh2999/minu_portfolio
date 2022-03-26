import { motion } from "framer-motion"
import Image from 'next/image'

const Intro = () => {
  return (
    <motion.div
      className={`absolute flex flex-wrap left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-h-[70vh] z-[1]
        lg:w-[65vw] lg:max-h-[55vh]`}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '70vh' }}
      transition={{ type: 'spring', duration: 3, delay: 1 }}
    >
      <div className='flex border-2 border-solid border-light border-b-0 bg-dark text-light 
        w-full h-1/2
        lg:border-r-0 lg:border-b-2 lg:w-1/2 lg:h-full'
      >
        <div className='flex flex-col justify-evenly text-[calc(1rem+1.5vw)] font-light text-light p-4'>
          <h1 className='font-source-san-pro text-[2em] font-bold'>Hi,</h1>
          <h3 className='font-karla text-[1.17em] font-medium'>I&apos;m Nguyen Minh.</h3>
          <h6 className='font-karla text-[calc(0.5rem+1vw)] lg:text-[calc(0.5rem+1.5vw)] font-light'>
            I am a Front-End Web Developer
          </h6>
        </div>
      </div>
      <div className='relative flex items-end border-2 border-solid border-dark border-t-0 bg-light text-dark w-full h-1/2 
        lg:border-l-0 lg:border-t-2 lg:w-1/2 lg:h-full'
      >
        <motion.div
          className="h-full lg:h-[80%] relative max-w-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Image
            layout='fill'
            src='/images/profile-img.png'
            alt='logo'
            objectFit='scale-down'
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Intro