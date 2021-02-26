import Head from 'next/head'
import {ExperienceBar}  from '../components/Experience'

export default function Home() {
  return (
    <div className="container">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
      </Head>

    <ExperienceBar/>
       </div>
    
  )
}
