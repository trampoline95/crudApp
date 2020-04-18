import Head from 'next/head'
import Employee from './employee/Employee'
import EachEmployee from './employee/EachEmployee'
import CreateEmployee from './employee/CreateEmployee'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <CreateEmployee/>
      
    </div>
  )
}
