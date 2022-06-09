import type { NextPage } from 'next'
import Head from 'next/head'


import VideoHeader from '../components/VideoHeader'
import Trial from '../components/Trial'

import UIUX from '../components/UIUX'
import PlayerSlider from '../components/subtree/PlayerSlider'
import Micro from '../components/Micro'
import Carousel from '../components/Carousel'




const Home: NextPage = () => {
  return (
        <main className='min-h-screen min-w-full bg-neutral-800 relative'>
      
             <Head>
              <title>anish testing UIUX</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <UIUX />
    
            <Carousel/>




          

        </main>

  ) 
}

export default Home
