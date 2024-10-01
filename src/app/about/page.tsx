import React from 'react'
import Link from 'next/link'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import {GitHubLogoIcon} from '@radix-ui/react-icons'
function about() {
  return (
    <><div className='bg-sky-900 p-7'>
      h
    </div><section className='w-full h-full flex-wrap font-bold  '>
        <div className='pt-44'>

          <h1 className='text-center text-6xl'>


            This Is

            <br className='' />
            <span className='text-center text-6xl text-sky-500 font-bold'>
              About Page </span>
          </h1>
          <p className='text-center mt-12 text-lg'>
            Unlock endless possibilities with Gen AI, where creativity meets technology.      </p>
        </div>
      </section><section className='w-full   flex-center flex-col font-bold mt-14'>
        <h1 className='text-center text-lg'>
          Developed by

          <br className='max-md:hidden ' />
          <span className='text-center text-lg text-sky-500 font-bold'>
            <p>Mohsin Sheikh</p></span>
        </h1>

        <div className='w-full flex justify-center mt-7 '>

          <Link href={'https://www.linkedin.com/in/mohsin-sheikh-m-ajaz-11941b296'} passHref target="_blank" rel="noopener noreferrer" className='flex items-center pr-8'>
            <LinkedInLogoIcon className='text-blue-600 ' /><span className='pl-2'>my linkedin</span>
          </Link>


          <Link href={'https://github.com/DevMohsinSheikh-12'} passHref target="_blank" rel="noopener noreferrer" className='flex items-center'>
            <GitHubLogoIcon /><span className='pl-2'>my GitHub</span>
          </Link>


        </div>
      </section></>
  )
}

export default about