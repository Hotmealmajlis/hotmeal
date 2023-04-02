import React from 'react'
import AboutPage from '../../components/AboutPage'
import AboutRegister from '../../components/AboutRegister'
import Hero from '../../components/Hero'
import MenuPage from '../../components/MenuPage'
import ShopsPage from '../../components/ShopsPage'
import './Home.scss'
import { useState, useEffect } from 'react'


const Home = () => {
  const [shopData, setShopData] = useState()
  const [menuData, setMenuData] = useState()

    const getShops = async(e) =>{
    
    const res = await fetch("http://localhost:4000/merchant/view",{
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
      },
     
    })
    const data = await res.json()
    console.log(data)
   

    if(res.status === 422 || !data){
     
      console.log("err")
    }else{
      setShopData(data)
      console.log("merchant datas getted succesfully")
    }
  }
  

const getMenus = async(e) =>{

const res = await fetch("http://localhost:4000/product/view",{
  method: "GET",
  headers: {
    "Content-Type" : "application/json",
  },
 
})
const data = await res.json()
console.log("menus",data)


if(res.status === 422 || !data){
 
  console.log("err")
}else{
  setMenuData(data)
  console.log("menu datas getted succesfully")
}
}

    useEffect(() =>{
      getShops()
      getMenus()
    },[])
   
  return (
    <>

    <Hero/>
    <AboutPage/>
    <AboutRegister/>
    <ShopsPage shopData={shopData} />
    <MenuPage menuData={menuData}/>
    </>
    
  )
}

export default Home