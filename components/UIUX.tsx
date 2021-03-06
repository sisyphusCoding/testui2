import React from 'react'
import AddButton from './subtree/AddButton'
import Drag from './subtree/Drag'
import NavbarFollow from './subtree/NavbarFollow'
import PlayerSlider from './subtree/PlayerSlider'

const UIUX: React.FC = () => {
return(
    <main 
      className='
        min-h-screen min-w-full
        flex flex-col items-center justify-around
        bg-neutral-300'>
    <section className='overflow-hidden drop-shadow-[black_0px_10px_20px] filter'>  
        <AddButton />
    </section> 
     

      <NavbarFollow/>

    </main>
)
}


export default UIUX
