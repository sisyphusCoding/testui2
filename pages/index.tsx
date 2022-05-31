import type { NextPage } from 'next'
import Head from 'next/head'


import VideoHeader from '../components/VideoHeader'
import Trial from '../components/Trial'

import UIUX from '../components/UIUX'




const Home: NextPage = () => {
  return (
        <main className='min-h-screen min-w-full bg-gray-500 relative'>
      
             <Head>
              <title>anish testing UIUX</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <UIUX />





          

        </main>

  ) 
}

export default Home
