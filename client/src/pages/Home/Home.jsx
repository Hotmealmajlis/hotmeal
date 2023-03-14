import React from 'react'
import AboutPage from '../../components/AboutPage'
import AboutRegister from '../../components/AboutRegister'
import Hero from '../../components/Hero'
import MenuPage from '../../components/MenuPage'
import ShopsPage from '../../components/ShopsPage'
import './Home.scss'


const Home = () => {
   
  return (
    <>

    <Hero/>
    <AboutPage/>
    <AboutRegister/>
    <ShopsPage/>
    <MenuPage/>
    </>
    
  )
}

export default Home