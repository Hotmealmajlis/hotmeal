import React from 'react'
import { useParams } from 'react-router-dom'
import ShopDetails from '../../components/ShopDetails'
import "./ShopDetails.scss" 
import {useState, useEffect} from "react"

const ShopDetailsPage = () => {
  
  const {id} = useParams()

  const [shopData, setShopData] = useState()

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

    useEffect(() =>{
      getShops()
    },[])

  return (
    <div>
      <ShopDetails id={id}  shopData={shopData}/>
    </div>
  )
}

export default ShopDetailsPage