import Head from 'next/head'
// import Navbar from '../src/components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Header from '../src/components/Header/Header'
import Farming from '../src/components/Farming/Farming'
import Products from '../src/components/Products/Products'
import Become from '../src/components/Become/Become'
import Footer from '../src/components/Footer/Footer'
import Mobile from '../src/components/Mobile/Mobile'
// import { caset1 } from '/caset1.jpg';


export default function Home() {
  return (
    <div>
      <Head>
        <title>SVAD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <Mobile></Mobile>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <Farming></Farming>
      <Products></Products>
      <Become></Become>
      <Footer></Footer>

    </div>
  )
}
