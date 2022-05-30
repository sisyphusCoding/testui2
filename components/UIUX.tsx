import React from 'react'
import AddButton from './subtree/AddButton'
import Drag from './subtree/Drag'

const UIUX: React.FC = () => {
return(
    <main 
      className='
        min-h-screen min-w-full
        flex flex-col items-center justify-evenly gap-10
        bg-green-600'>

    <section className='overflow-hidden' >  
        <AddButton />
     
    </section>

     <Drag />
    </main>
)
}


export default UIUX
