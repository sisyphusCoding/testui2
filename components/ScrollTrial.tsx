import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
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
          title: 'Members' ,
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
   
  const triggerClick = () => {

    if(currentRef.current && followerRef.current){
       
      followerRef.current.style.left =  `${currentRef.current.offsetLeft}px`
      followerRef.current.style.width = `${currentRef.current.offsetWidth}px`

      }
  }

  
  const triggerHover = () => {
    if(unUsedRef.current && followerRef.current){
        
      followerRef.current.style.left =  `${unUsedRef.current.offsetLeft}px`
      followerRef.current.style.width = `${unUsedRef.current.offsetWidth}px`
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
        flex-col
        lg:flex-row relative px-2 py-1 bg-neutral-800 rounded-xl w-fit text-neutral-300 
        flex items-center justify-center"

        >

        <span 
            ref={followerRef}
            className={`
              h-[6px] bg-red-500 marker top-1  transition-all duration-500 ease rounded-xl absolute `}
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
                className={`flex 
                  ${active ==i ? 'text-red-500' : ''}
                  items-center justify-center relative  gap-4 navItem overflow-hidden`}> 
                <Icon size={'4vmin'} />  
                 <h3 className="pointer-events-none">{e.title}</h3>
                { active === i ? 
                 <span 
                  className="absolute bottom-2 bg-red-500 h-1 w-1 rounded-xl" ></span> 
                : null}
              </div>
          )
        })}
        

  
       


      </ul>
      


    </main>
  )


}

export default ScrollTrial
