import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import {FaHome, FaTrophy, FaHeadSideMask } from 'react-icons/fa'
import{GoGraph} from 'react-icons/go'
import { GiGreekTemple, GiHockey,} from 'react-icons/gi'
import {IoSettingsSharp} from 'react-icons/io5'



const ScrollTrial: React.FC = () => {

  const navData:any = [
          {
            title: 'Home',icon: FaHome,
          },
          {
           title: 'Projects' , icon : FaTrophy, 
          },
          {
      title: 'Billing' , icon : GiGreekTemple,
          },
          {
          title: 'Members with Mask' ,
          icon : FaHeadSideMask ,
        },
        {
          title: 'Stats' ,
          icon: GoGraph ,
        },
        {
          title:'Settings' , icon: IoSettingsSharp , 
        }
  ]


    const [active,setActive] = useState<number>(0)
   
    const[hover,setHover] = useState<number>(0)

    const followerRef = useRef<HTMLSpanElement>(null)
    const currentRef = useRef<HTMLDivElement>(null)
    const unUsedRef = useRef<HTMLDivElement>(null) 
  
    const verticalRef = useRef<HTMLDivElement>(null)

  const triggerClick = () => {

    if(currentRef.current && followerRef.current && verticalRef.current){
       
      followerRef.current.style.left =  `${currentRef.current.offsetLeft}px`
      followerRef.current.style.width = `${currentRef.current.offsetWidth}px`


      verticalRef.current.style.top = `${currentRef.current.offsetTop}px`
      verticalRef.current.style.height = `${currentRef.current.offsetHeight}px`
      }
  }

  
  const triggerHover = () => {
    if(unUsedRef.current && followerRef.current && verticalRef.current){
        
      followerRef.current.style.left =  `${unUsedRef.current.offsetLeft}px`
      followerRef.current.style.width = `${unUsedRef.current.offsetWidth}px`


      verticalRef.current.style.top = `${unUsedRef.current.offsetTop}px`
      verticalRef.current.style.height = `${unUsedRef.current.offsetHeight}px`


    }
  }

    useEffect(()=>{
          triggerClick()       
          triggerHover()
    },[active , hover])


      
    
    
    
    


    return(
      <main 
        className="
        min-h-screen min-w-full font-ostrich font-bold tracking-widest
        flex flex-col items-center justify-center
        bg-zinc-300"  
        >
    
      <ul
        className="navBar overflow-hidden

        flex-col shadow-[rgba(0,0,0,1)_0_10px_50px]
        md:flex-row relative px-10 md:px-10 py-1 bg-neutral-800 rounded-xl w-fit text-neutral-300 
        flex md:items-center items-start justify-center"

        >

        <span
            
            ref={followerRef}
            className={` z-20
            hidden md:inline-block
            bg-red-500 
            h-[5px]  marker top-1  transition-all duration-1000 follow rounded-xl absolute `}
            >
          
        </span>

      <span
          ref={verticalRef}
        className=" follow
          transition-all duration-1000
          inline-block md:hidden
          top-0 h-10 rounded-lg
          left-2 absolute w-2 bg-red-500"    
        >

        </span>


        {navData.map((e:any,i:number)=>{
          const Icon = e.icon
          return(
              <div
                ref={active ===i? currentRef : hover === i ? unUsedRef : null}
                key={e.title}
                onClick={()=>setActive(i)}
                onMouseEnter={()=>setHover(i)}
                onMouseLeave={()=>setHover(active)}
                className={`flex z-30
                  ${active ==i ? 'text-red-500' : ''}
              items-center justify-start md:justify-center relative  gap-[1vw] max-w-[80%]`}> 
                <Icon size={'4vmin'} />  
                 <h3 className="pointer-events-none md:w-fit w-1/2 ">{e.title}</h3>
                { active === i ? 
                 <span 
                  
                  className="absolute bottom-2 bg-red-500 h-[.1px] md:h-1 w-full md:w-1 rounded-xl " ></span> 
                : null}
              </div>
          )
        })}
        

  
       


      </ul>
      


    </main>
  )


}

export default ScrollTrial
