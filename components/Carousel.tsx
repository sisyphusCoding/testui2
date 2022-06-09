import { setConfig } from "next/config";
import React, { useState } from "react";

import {BsFillCaretLeftFill , BsFillCaretRightFill} from 'react-icons/bs'

import {motion , AnimatePresence} from 'framer-motion'

import {usePrevious} from 'react-use'

const Carousel: React.FC = () => {

    let [count,setCount] = useState<number>(0)
    
    let prevCount = usePrevious(count)
      

 
    let direction = count > prevCount?  'inc' : 'dec'

    console.log(direction === 'inc') 

let variants = { 
  hidden: (direction:any) => ({x: direction ==='inc'? '150%' : '-150%'}),
  show:{x:0},
  exit: (direction:any) => ({x: direction ==='inc'? '-150%' : '150%'}),
  
}
 

  return(
      <main 
        className="min-h-screen min-w-full bg-neutral-900 text-neutral-500
          flex items-center justify-evenly flex-col
          p-8"
        >
  
      <text
       className="flex flex-col px-10 items-end"
         >
      <h1 
       className="text-4xl uppercase"
       >Carousel 
      </h1>
         <small 
           >
          made with framer-motion 
        </small>
    </text>
       <section
        className="w-full lg:w-[100vmin]
        px-4 py-10 rounded-lg shadow-xl
        bg-neutral-700 text-neutral-300
        flex items-center justify-around"
         >
      
      <button 
         onClick={()=>setCount(count-1)}
         >
          <BsFillCaretLeftFill size={'5vmin'} />

        </button>  
 
        <div 
          className="
          relative
          rounded-md bg-neutral-800 overflow-hidden 
          flex items-center justify-center    
          w-[44vmin] h-[44vmin]"

          >
        
          <AnimatePresence
             custom={direction}
              >
            <motion.div
              key={count}
              variants={variants}
              transition={{duration:1.5}}         
              initial='hidden'
              animate='show'
              exit='exit'
              custom={direction}
              className={` 
                absolute
                ${colors[Math.abs(count) % 4]}
                w-[36vmin] h-[36vmin] 
                flex justify-center items-center`}
               >
            <h1 className="text-3xl w-full text-center">
                {count}
            </h1>
            </motion.div>
        </AnimatePresence>
        </div>

      <button
         onClick={()=>setCount(count+1)}
         > 
          <BsFillCaretRightFill size={'5vmin'} />
        </button>  

      </section> 

    </main>
  )

}


let colors = ['bg-red-600' , 'bg-green-700' , 'bg-cyan-900' , 'bg-purple-600']

export default Carousel
