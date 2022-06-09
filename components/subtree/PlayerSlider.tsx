import React, { useEffect, useRef, useState } from 'react'

import {motion, useMotionValue} from 'framer-motion'
import { setValues } from 'framer-motion/types/render/utils/setters'
import { useMotion } from 'react-use'



const PlayerSlider: React.FC = () => {

  let  min = 0 
  let max = 100

  const parentRef = useRef<HTMLElement>(null)

  const handleRef = useRef<HTMLParagraphElement>(null)

  const progressRef = useRef<HTMLDivElement>(null)

  const {current: sliderButton} = handleRef
  const {current:prog} = progressRef

  const [value,setValue] = useState<number>(0)
  const handleX =useMotionValue(0)


  useEffect(()=>{

    if(prog) {

    let newProgress = value / (max - min)

    let progressBounds = prog.getBoundingClientRect()
  
      console.log(progressBounds.width)
        
     handleX.set(newProgress * progressBounds.width ) 
    }
  },[handleX , min , max ,value ])

  const handleDrag = () => {

      console.log('ref')      

    if(sliderButton && prog ){
      let handleBounds = sliderButton.getBoundingClientRect()
      let middleOfHandle = handleBounds.x + handleBounds.width /2
      let progressBounds = prog.getBoundingClientRect()
      let newProgress:number = (middleOfHandle - progressBounds.x) / progressBounds.width 
      console.log(Math.round(newProgress *100) )
      let finalProgress = Math.round(newProgress*(max-min))
      setValue(finalProgress)
    }   }
  

  const handleSize = 24

  return(
    <main
      style={{
        boxShadow:'inset 6px 6px 12px #191919,inset -6px -6px 12px #333333'
      }}
      className='py-14 px-10 
      rounded-3xl  flex-col
      flex items-center justify-between
        '
      >   

      <section 
      ref={parentRef}
       
      className='w-[60vw] filter
      relative flex flex-row items-center justify-start'>
        
      <div
          data-test = 'slider-bg'
        style={{
            boxShadow:'inset 6px 6px 6px #191919,inset -6px -6px 6px #191919'
          }}
          className='absolute w-full bg-stone-800 h-10 rounded-3xl'
          />  

      <div 
          ref={progressRef}
          data-test='slider-progress'
          style={{left:handleSize /2,right:handleSize /2}}
          className='absolute opacity-60 bg-neutral-500 h-4 rounded-3xl'
            />
         <motion.p
          ref={handleRef}
          drag='x'
          dragConstraints={parentRef}
          dragElastic={false}
          dragMomentum={false}
          onDrag={()=>handleDrag()}
          data-text='slider-handle'
          className=' 
            opacity-70
            cursor-grab
            bg-neutral-600 shadow-[black_0_0_20px] rounded-xl z-20'    
            style={{
            width:handleSize , height: handleSize * 3
            ,x:handleX
              }}
            />
    </section>


          <h1 className='text-6xl text-neutral-400' >{value}</h1>
  </main>

  )


}




export default PlayerSlider
