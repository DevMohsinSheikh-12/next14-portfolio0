import React from 'react'
import Herosection from './Herosection'
import AboutSkills from './AboutSkills'
import Projects from './Projects'

function Header() {
  return (
    <>
      
      
    <Herosection />
    <div className="  p-4 bg-blend-saturation 
     bg-screen bg-cover bg-center text-center border-none overflow-hidden   " style={{backgroundImage:
      "url('../images/md.jpg')"}
    }> 
    <h1 className='text-6xl  bg-cover mt-9 mb-9 w-full h-full backdrop-blur-md bg-opacity-45 text-white'>Core <span className="nameintro text-6xl mb-3 font-semibold">Competencies</span></h1>
    <AboutSkills />
    </div>

<div className='bg-sky-900 p-7 ' style={{backgroundImage:
      "url('../images/md.jpg')"}
    }>

    <Projects />
</div>

    </>
  )
}

export default Header