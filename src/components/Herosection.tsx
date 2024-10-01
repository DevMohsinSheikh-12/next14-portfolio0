'use client'
import Link from 'next/link';
import React from 'react'
import {useTypewriter,Cursor,  } from "react-simple-typewriter"

const Herosection = () => {
  const [text]:any = useTypewriter({
 words:["frontend developer","Web designer"],
 loop:true,
 typeSpeed:130,
 deleteSpeed: 40,  
 delaySpeed: 1000,
  });
  return (
    <section   className="bg-screen bg-center h-screen glass-blend-bottom"    style={{backgroundImage:
      "url('../images/strt.jpg')"}}>
        <main className='1  ml-28 '>

    <div className="text-white pt-48">
    <h1 className='text-4xl mb-4 '>
        Hey devs!</h1>
    <h1 className='text-6xl '>I'm<span className="nameintro text-6xl  font-semibold"> Mohsin
          </span>
          </h1>
      <br / >
      <h1 className='text-6xl'>

        <span className=''>
        a {text}
        </span>

          <span><Cursor /></span>
      </h1>

    
        
    <p className='pt-4'>Who's exploring endless possibilities with GEN-A.I
       </p>
        <div className="btn-box mt-6  ">
            <Link href="https://www.linkedin.com/in/mohsin-sheikh-m-ajaz-11941b296" passHref target="_blank" rel="noopener noreferrer" className="btn-1 pt-2 pb-2 pl-4 pr-4 border-2 mr-5 bg-white text-black ease-in-out hover:bg-transparent hover:text-white hover: transition duration-500">Hire me</Link>
            <Link href='https://www.linkedin.com/in/mohsin-sheikh-m-ajaz-11941b296' passHref target="_blank" rel="noopener noreferrer" className="btn-2 pt-2 pb-2 pl-4 pr-4 border-2 ease-in-out hover:bg-slate-100 hover: hover:text-black hover: transition duration-500">Experience</Link>
           
      </div>
</div>
        </main> 
        <main className='2'>
  
        </main>
        
</section>
  )
}

export default Herosection