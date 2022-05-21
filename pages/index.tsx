import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import VideoHeader from '../components/VideoHeader'
import styles from '../styles/Home.module.css'
import Trial from '../components/Trial'
const Home: NextPage = () => {
  return (
        <main className='min-h-screen min-w-full bg-gray-500'>
              <VideoHeader />
              <Trial / >
        </main>
  ) 
}

export default Home
