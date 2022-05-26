import Image from "next/image";
import React, { useState } from "react";

import {Squeeze as Hamburger} from 'hamburger-react'

import{motion,AnimatePresence} from 'framer-motion'
import { exit } from "process";

const Trial: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [whichImage,setWhichImage] = useState<number>(0)

  const[showImage , setShowImage] = useState<boolean>(false)

  const cubic:string = 'cubic-bezier(1,-0.02,0,.99)'
  const dark:string ='#222831'
  
  const menuItem:string[] = ['Vision' , 'Project' , 'Studio' , 'Career' ] 

  const imageCar:string[] = ['./vision.jpg' , './project.jpg' , './studio.jpg', './career.jpg']



  const container:any = {
    
    hidden:{x:100,opacity:0} ,

    show: {
      x:0,opacity:1,
      transition: {
        type:'spring',
        duration:1.5, 
        staggerChildren : 0.3,
        ease:[.6,.01,-.05,.95] ,
      }
    },

   
  exit: {x:-200, opacity:0 ,transition: {staggerChildren:0.25 , duration : 1} }
  }


  const imageAnim:any = {
    hidden: {x:100,opacity:0},
    show:{x:0,opacity:1 , transition:{  duration:.6 , type: 'spring', bounce : .3 , restDelta: 0.5 }},
    exit:{x:100,opacity:0 , transition:{duration: .4}}
  }

  const childAnim:any = {
    hidden: {x:-100 , opacity: 0} , 
    
    show: {x:0 , y:0 ,opacity :1 , 
          transition: {
              ease:[.6,.01,-.05,.95] , 
              duration:1.6 , type: 'spring', bounce: 0.40 ,
      },},
    
    exit: {x:500 , opacity:0 , 
            transition: { 
        ease:[.6,.01,-.05,.95] , duration:1, type :'spring' , 
            },
          }
    }

  return(
    <main
      className=" 
      text-[#222831] 
      relative
      overflow-hidden
      min-h-screen min-w-full 
      flex items-center justify-start
       bg-[#B91646] z-20"
    >
      <section
        className={`
relative
transition-all duration-[2s]  
ease=[${cubic}]
flex flex-col items-end justify-end lg:justify-start
min-h-screen px-5
border-r-4 border-gray-800
${isOpen? 'w-[100vw] flex-shrink-0 bg-[#222831] ' : 'w-[10vw]' }  `} 

      >
       
<AnimatePresence onExitComplete={exit}>            
        {isOpen?
       
        <motion.div 
         variants={container} initial='hidden' animate='show' exit='exit'   
          className="
          flex items-center justify-between
          text-white 
          w-[100vw] h-[50vh]
          flex-grow 
           self-center">
    
            <ul  
              className="flex px-10 flex-col gap-10 text-5xl lg:text-9xl text-[#32E0C4]" >
             {menuItem.map((item,index:number) =>(         
       
           <div  key={index} className="overflow-hidden">    
          <motion.li    
              onMouseEnter={()=>{setWhichImage(index)}}
              onHoverStart={()=>{setShowImage(true)}}
              onHoverEnd={()=>{setShowImage(false)}}
              key={index} 
              variants={childAnim} 
              className="cursor-pointer
                      hover:bg-gray-400 hover:text-gray-800 
                      transition-colors ease px-2 py-2 rounded-md "
               >{item}</motion.li>
                </div> 
             ) )} 
          </ul>

        <AnimatePresence exitBeforeEnter>        
        {showImage? 
          <motion.div 
                  key={whichImage}
                  variants={imageAnim} 
                  initial='hidden'
                  animate='show'
                  exit='exit'
                  className="h-[100vh] w-[50vw]" >
             
              <img 
                alt='image-prop'
                className="h-full w-full object-cover"
                src={`${imageCar[whichImage]}`} />           

                </motion.div>
                :'' }
         </AnimatePresence>
          </motion.div>
        : '' }
      
    </AnimatePresence> 

        <div className={`
transition-all duration-1000 ease-[${cubic}] 
lg:mt-16 lg:mb-0 mb-16 mt-0 
absolute
transform

will-change-transform
hover:-rotate-90
${isOpen ? 
' text-[#32E0C4] mr-10 right-5 translate-x-0 rotate-[360deg] scale-150 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ' 
:  'text-[#222831] right-1/2 translate-x-1/2 rotate-90 scale-100'} `} >  
          <Hamburger
            toggled={isOpen}  
            onToggle={()=>{setIsOpen(!isOpen)}}
            size={50} /> 
        </div>
      </section>

      <section
        className={` 
transition-all duration-[2s]  
ease=[${cubic}]
px-10    
relative
lg:flex-row flex-col
flex items-start justify-between 
w-full h-fit
${isOpen? 'translate-x-full absolute' :'' } `}
      >
        <h1 className="

          max-w-md
          transition-all ease duration-300  
          text-[clamp(3.5rem,12vmin,14rem)] uppercase" >  
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

