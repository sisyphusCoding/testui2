
import React, { useState } from "react";

import {Squeeze as Hamburger} from 'hamburger-react'
import {VscAdd} from 'react-icons/vsc'

import{motion,AnimatePresence} from 'framer-motion'

const Trial: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)

  const cubic:string = 'cubic-bezier(1,-0.02,0,.99)'
  const dark:string ='#222831'


  return(
    <main
      className=" 
      text-[#222831]
      relative
      overflow-hidden
      min-h-screen min-w-full 
      flex items-center justify-start
      shadow-[0_-5px_12rem_rgba(0,0,0,1)] bg-[#B91646] z-20"
    >
      <section
        className={`

relative
transition-all duration-[2s]  
ease=[${cubic}]
flex flex-col items-end justify-end lg:justify-start
min-h-screen px-5
border-r-4 border-[${dark}]
${isOpen? 'w-[100vw] flex-shrink-0 bg-[#222831] ' : 'w-[10vw]' }  `} 

      >
        {isOpen?
        <AnimatePresence exitBeforeEnter >
        <motion.div 
        
        className="
          flex items-center justify-center
          text-white 
          w-[100vw] h-[50vh]
          border-white border-4
          flex-grow 
           self-center">
          <ul 


          className="flex flex-col gap-10 text-5xl lg:text-6xl text-[#32E0C4]" >
              <li >ANISH KANNA</li>
              <li  >FRONTEND DEV</li>
          </ul>
        </motion.div>
     </AnimatePresence>
        : '' }
        <div className={`
transition-all duration-1000 ease-[${cubic}] 
p-10
absolute
transform
will-change-transform
hover:-rotate-45
${isOpen ? 
' text-[#32E0C4] right-5 translate-x-0 rotate-[360deg] scale-150' 
:  'text-[#222831] right-1/2 translate-x-1/2 rotate-90 scale-100'} `} >  
          <Hamburger
            toggled={isOpen}  
            onToggle={()=>{setIsOpen(!isOpen)}}
            size={40} /> 
        </div>
      </section>

      <section
        className={` 
transition-all duration-[2s]  
ease=[${cubic}]
px-10    
relative
cursor-pointer
lg:flex-row flex-col
flex items-start justify-between 
w-full h-fit
${isOpen? 'translate-x-full absolute' :'' } `}
      >
        <h1 className="

          max-w-md
          transition-all ease duration-300  
          text-[clamp(3rem,10vmin,14rem)] uppercase" >  
          THE <br/> Formal <br/> Exposure
        </h1>

        <h5 
          className="
          text-sm md:text-md lg:text-lg 
          uppercase  right-0 top-0 text-left lg:text-right"
        >
          digital experience
          <br />
          design studio
        </h5>  



      </section> 


    </main>
  )

}

export default Trial

