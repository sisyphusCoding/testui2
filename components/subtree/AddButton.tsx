import React, { useEffect, useState  , useRef} from "react";


import {motion ,AnimatePresence, animate} from 'framer-motion'
import {FiPlus , FiMinus} from 'react-icons/fi'
import { count } from "console";
import { eventNames } from "process";



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
  initial: {y:80 , opacity: 0},
  
  animate: {y:0 , opacity: 1 , transition:{damping: 20 , type:'spring' , stiffness:100 }},

  exit: {y:-80, opacity:0}
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


  const parentRef = useRef<HTMLDivElement>(null)
  const draggerRef = useRef<HTMLDivElement>(null)


  const [initialMouse,setInitialMouse] = useState<number>(0) 

  const getThis = (val:any) => {
 

    if(val > initialMouse){
      setTInputValue((inputValue) => inputValue + 1)
    }else{
      setTInputValue((inputValue) => inputValue - 1)
    }
    


  }

  


  return(
      <section>

        <div
            
              ref={parentRef}
            className={`outline-none 
                px-4 overflow-hidden 
                ease transition-colors duration-200 
                py-4 
                rounded-3xl 
                text-stone-300 bg-stone-800 
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
            <AnimatePresence>
              <motion.button 
                variants={minusAnim}
                initial='initial'
                animate='animate'
                exit='exit' 
                onClick={()=>setTInputValue((inputValue) => inputValue - 1)}  
                className="hover:text-red-600" ><FiMinus size={45} /></motion.button>
                
                  <motion.div
                    key={'minus'}
                    ref={draggerRef}
                    drag='x'
                    onDragStart={(e,info)=>setInitialMouse(info.point.x)}
                    onDragEnd={(e,info)=>getThis(info.point.x)}
                    dragSnapToOrigin={true}
                    whileDrag={{scale:1.2 }}
                    dragConstraints={parentRef}
                    dragElastic={false}
                    dragTransition={{bounceDamping:9,bounceStiffness:400}}
                    className="overflow-hidden z-40
                      py-2 px-4 cursor-grab rounded-2xl bg-[rgba(0,0,0,.2)] 
                      backdrop-filter backdrop-blur-[1.5px]   
                      "  
                    >               
                  <motion.h2
                      key={inputValue}
                  variants={countAnim}
                  initial={inputValue > prevValue? 'initial' : 'exit' }
                  animate='animate' 
                  exit={inputValue > prevValue? 'exit' : 'initial' } 
                      className="text-4xl  font-bold font-mono text-center w-10" >{inputValue}
                      </motion.h2>

                    </motion.div> 
              <motion.button
                key={'add'}
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
