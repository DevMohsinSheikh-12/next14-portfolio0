import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ArrowRightIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
const Nav = () => {
  return (
    <section className=' bg-indigo-950 bg-opacity-90 bg-blend-saturation text-white' >
        <nav className='flex justify-between p-6 font-bold text-lg  w-full backdrop-blur-md fixed z-50 border-b border-slate-700   '>
            <div className="ml-0 md:ml-28 mb-4 md:mb-0">
            {/* flex justify-between p-6 bg-slate-500 font-bold text-lg
            border-b-2 */}
            <Link href={'/'} className='pr-11 hover:text-xl hidden md:block'>
            <div className=''  >
  
                Logo
            </div>
                </Link>
            </div>

            <ul className='flex items-center'>
                <Link href={'/'}>
                <li className='pr-11  hover:text-xl'>Home</li>
                </Link>
                <Link href={'/about'}>
                <li className='pr-11 hover:text-xl'>About</li>
                </Link>
                <Link href={'/'}>
                <li className='pr-11 hover:text-xl'>Projects</li>
                </Link>
                <Link href={'/contact'}>
                <li className='pr-11 hover:text-xl '>Contact Us </li>
                </Link>
                  
            </ul>
        </nav>
    </section>
  )
}

export default Nav