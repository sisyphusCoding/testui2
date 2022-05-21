
import React  from "react";
import {BsChevronDoubleDown} from 'react-icons/bs'
import {FaShip} from 'react-icons/fa'
const VideoHeader : React.FC = () => {

  return (
      <main 

          className="min-h-screen  min-w-full flex items-center justify-center sticky ">

      <video autoPlay muted loop playsInline className="absolute h-full w-full object-cover" >
        <source src='./waves.mp4' />
      </video>


          <section className="text-white drop-shadow-[0_5px_18px_rgba(0,0,0,1)] z-10" >
            <h1 className="text-[clamp(2rem,8vmin,4rem)] text-[rgba(255,255,255,.75)] uppercase">
              The Formal Exposure
            </h1> 
          </section>
           
            <span className="absolute drop-shadow-[0_5px_18px_rgba(0,0,0,1)] top-0 text-5xl text-[rgba(255,255,255,.75)]" >
              <FaShip />
            </span>


          <span className="hover:animate-[none] cursor-pointer transition-all 500ms ease absolute bottom-0 text-5xl text-[rgba(255,255,255,.75)] drop-shadow-[0_5px_18px_rgba(0,0,0,1)] animate-bounce " >
              <BsChevronDoubleDown onClick={()=>{window.scrollBy(0,window.innerHeight)}} />
            </span>
      </main>
  )

}



export default VideoHeader


