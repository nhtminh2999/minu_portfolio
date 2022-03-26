import Link from 'next/link'
import { PowerOffSvg } from './AllSvgs'

function PowerButton() {
  return (
    <Link href='/'>
      <a className='fixed top-8 left-1/2 -translate-x-1/2 flex justify-center items-center bg-light p-[0.3rem] rounded-full  
        border-[1px] border-solid border-black w-8 h-8 z-[3] cursor-pointer 
        lg:w-[2.5rem] lg:h-[2.5rem]
        hover:bg-[rgba(0,255,0,0.4)] hover:shadow-[0_0_8px_6px_rgba(0,255,0,0.2)]'>
        <PowerOffSvg width={30} height={30} fill='currentColor' />
      </a>
    </Link>
  )
}

export default PowerButton