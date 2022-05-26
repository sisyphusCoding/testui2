import React, { useEffect, useState  , useRef} from "react";


import {motion ,AnimatePresence, animate} from 'framer-motion'
import {FiPlus , FiMinus} from 'react-icons/fi'
import { count } from "console";



const addText:any = {
  initial: {y:-50 , opacity: 0 ,transiton: {duration :10} } ,
  animate : {y:0 , opacity: 1 , transition:{type:'spring'} } ,
  exit: {y:-50 , opacity: 0 ,transiton: {duration :10} } ,

}

const childAnim:any = {
  initial: {opacity:0}, transition:{staggerChildren: .35},
  animate:{opacity:1 , transition:{staggerChildren: .1}} ,
  exit:{opacity:0, transition:{staggerChildren: .35}}
}

const minusAnim:any = {
  initial: {x:-50,opacity:0},
  animate:{x:0,opacity:1 } ,
  exit:{x:50,opacity:0}
}

const addAnim:any = {
  initial: {x:50,opacity:0},
  animate:{x:0,opacity:1 } ,
  exit:{x:50,opacity:0}
}


const countAnim = {
  initial: {y:50 , opacity: 0},
  
  animate: {y:0 , opacity: 1},

  exit: {y:-50, opacity:0}
}

const AddButton = () => {

  const [toggle,setToggle] = useState<boolean>(false)

  const [inputValue, setTInputValue] = useState<number>(1)

  useEffect(()=>{

    if(inputValue === 0) {
      setToggle(false)
    
    setTInputValue(1)
    }

  },[inputValue])  

 function usePrevious(data:number){
  const ref = React.useRef<number>();
  React.useEffect(()=>{
    ref.current = data
  }, [data])
  return ref.current
}

 const prevValue:any = usePrevious(inputValue)


  return(
      <section>

        <div
            className={`outline-none 
                px-4  overflow-clip
                ease transition-colors duration-200 
                py-4 
                rounded-[2rem] shadow-[inset_-8px_-8px_8px_#848484_,_inset_8px_8px_8px_#ffffff]
                bg-slate-200
                w-56 row 
                flex items-center h-20
                ${toggle? 'justify-between' : 'justify-center' }   `}
        >
  

<AnimatePresence exitBeforeEnter>                            
          {!toggle? 
          <motion.button 
              variants={addText} 
              initial='initial' animate='animate' exit='exit'
              onClick={()=>{setToggle(true)}}
              className="      
                hover:text-red-500
                transition-colors ease duration-200
                font-bold 
                text-center 
                font-mono
                text-4xl"
              >ADD</motion.button>
        : 
            
             <AnimatePresence exitBeforeEnter>
              <motion.button 
                variants={minusAnim}
                initial='initial'
                animate='animate'
                exit='exit' 
                onClick={()=>setTInputValue((inputValue) => inputValue - 1)}  
                className="hover:text-red-600" ><FiMinus size={45} /></motion.button>
                
                <AnimatePresence exitBeforeEnter>
                  <motion.h2
                      key={inputValue}
                  variants={countAnim}
                  initial='initial' animate='animate'exit='exit' 
                      className="text-4xl font-bold font-mono text-center w-10" >{inputValue}</motion.h2>       
                  </AnimatePresence>  
              <motion.button
                variants={addAnim}
                initial={inputValue > prevValue? 'initial' : 'exit' }                 
                animate='animate'
                exit={inputValue > prevValue? 'exit' : 'initial' } 
                onClick={()=>setTInputValue((inputValue) => inputValue + 1)}  
                className="hover:text-green-700" ><FiPlus size={45}/></motion.button>
            
          </AnimatePresence> 
        
         }
  </AnimatePresence>   
   
           </div>
      </section>
  )
}


export default AddButton
