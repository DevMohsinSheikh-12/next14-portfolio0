import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
  
    <section  className="bg-screen bg-cover bg-center  backdrop-blur-md  bg-blend-saturation  bg-opacity-95 border border-slate-700 text-white rounded-lg  "    style={{backgroundImage:
      "url('../images/md.jpg') " }}>
        <main className='1 bg-no-repeat  bg-transparent backdrop-blur-md bg-opacity-25 border border-slate-700 text-white rounded-lg p-5 flex flex-col justify-center items-center '>
   <h1 className='text-center text-6xl align-center font-bold  text-white mt-9 animate-appear'>Front-end Projects</h1>
    
           
     
        
      
 

        <div className="lg:flex min-h-screen animate-appear  items-center justify-center gap-10">
   <div className=' '>

   <h1 className='text-center text-5xl justify-center  text-white font-serif  mt-10'> E-TRON A.I (UI)</h1> <p className='text-xl italic tracking-wider '><br /> A Next.js project that seamlessly <br /> integratesShadCN UI components,
     with <br />  the revelingcomponents effects <br /> as the main interactive highlight feature</p>
    <br />
     <p className='text-2xl font-serif mb-4'>TechStack :</p>
     <p className='text-xl italic tracking-wider pb-12 md:mb-10'>Nextjs , Tailwind CSS , TypeScript , ShadCN UI</p>
   </div>
         
     
                <div className="group relative items-center  border border-slate-500 rounded-lg justify-center overflow-hidden cursor-pointer">
                    <div className=' h-96 w-98 '>
                    <video 
        src="videos/etronweb.mp4"
      
       controls
       autoPlay
       loop
       muted
        className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 "/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/6 group-hover:to-black/70  "></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className='text-3xl font-bold text-white'>Want to see more</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Go Visit my github </p>
                            <Link href={'https://github.com/DevMohsinSheikh-12'} passHref target="_blank" rel="noopener noreferrer"  className='rounded-full bg-slate-800 px-2 py-3.5 text-sm text-white'>
                               My github
                            </Link>
                    </div>
                    </div>
                    </div>











        <div className="md:flex  items-center animate-appear justify-center gap-32">

                <div className="group relative items-center  border border-slate-500 rounded-lg justify-center overflow-hidden cursor-pointer">
                    <div className='h-96 w-98'>
                    <video 
        src="videos/art-webdev.mp4"
      
       controls
       autoPlay
       loop
       muted
        className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/6 group-hover:to-black/70  "></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className='text-3xl font-bold text-white'>Visit my Github</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            For more Projects
                        </p>
                            <Link href={'https://github.com/DevMohsinSheikh-12'}passHref target="_blank" rel="noopener noreferrer"  className='rounded-full bg-slate-800 px-2 py-3.5 text-sm text-white'>
                               My github
                            </Link>
                    </div>
                    </div>
                    <div className='flex-col pr-16  space-y-4'>

   <h1 className='text-center text-5xl justify-center   text-white lg:mr-40 mt-3 font-serif pt-10'> Web-ARTIST</h1> <p className='text-xl italic tracking-wider'><br /> A Next.js project that seamlessly integrates <br />Aceternity UI components,
     with  the moving <br />globe as the main interactive highlight feature</p>
    <br />
     <p className='text-2xl font-serif'>TechStack :</p>
     <p className='text-xl italic tracking-wider pb-11'>Nextjs , Tailwind CSS , TypeScript , Aceternity UI</p>
  
                    </div>
                </div>







        <div className="lg:flex min-h-screen animate-appear items-center animate-appear justify-center gap-10 ml-9">

        <div className='flex-col'>

<h1 className='text-center text-5xl justify-center  text-white mr-40 font-serif'> DIVE INTO META</h1> <p className='text-xl italic tracking-wider'><br /> A meta gamimg project that seamlessly<br /> integrates simplicity,Futuristic design
  <br /> as the main interactive highlight feature</p>
 <br />
  <p className='text-2xl font-serif'>TechStack :</p>
  <p className='text-xl italic tracking-wider mt-6 pb-9 md:pb-10 '>   HTML , CSS</p>
</div>         
     
                <div className="group relative items-center  border border-slate-500 rounded-lg justify-center overflow-hidden cursor-pointer">
                    <div className=' h-96 w-98 '>
                    <video 
        src="videos/meta-themeweb.mp4"
      
       controls
       autoPlay
       loop
       muted
        className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/6 group-hover:to-black/70  "></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className='text-3xl font-bold text-white'>Visit my GitHub</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>  For more Projects</p>
                            <Link href={'https://github.com/DevMohsinSheikh-12'} passHref target="_blank" rel="noopener noreferrer"  className='rounded-full bg-slate-800 px-2 py-3.5 text-sm text-white'>
                               My github 
                            </Link>
                    </div>
                    </div>
                    </div>
        <div className="md:flex mb-16  items-center justify-center animate-appear gap-28">

                <div className="group relative items-center  border border-slate-500 rounded-lg justify-center overflow-hidden cursor-pointer">
                    <div className=' h-96 w-98 '>
                    <video 
        src="videos/simpleweb.mp4"
      
       controls
       autoPlay
       loop
       muted
        className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/6 group-hover:to-black/70  "></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className='text-3xl font-bold text-white'> Visit my Github </h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                           For more Projects
                            
                        </p>
                            <Link href={'https://github.com/DevMohsinSheikh-12'} passHref target="_blank" rel="noopener noreferrer"  className='rounded-full bg-slate-800 px-2 py-3.5 text-sm text-white'>
                               My github
                            </Link>
                    </div>
                    </div>
                    <div className='flex-col animate-appear'>

<h1 className='text-center text-5xl justify-center  text-white mr-40 font-serif pt-9 md:pt-10'> FIRST PORTF</h1> <p className='text-xl italic tracking-wider'><br /> A project that seamlessly integrates <br />Aceternity UI components,
  with  the moving <br />globe as the main interactive highlight feature</p>
 <br />
  <p className='text-2xl font-serif'>TechStack :</p>
  <p className='text-xl italic tracking-wider mt-6'>HTML , CSS</p>
</div>                </div>
         
    


    <p className='text-2xl font-semibold text-white text-center '>
         Visit the Projects and <Link href="/contact" className='text-sky-300'>Contact me</Link> 
         
    </p>
   


        
    </main> 

        </section>
       
  )
}

export default Projects
