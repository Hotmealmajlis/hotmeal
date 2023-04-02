import React from 'react'
import foodImg from "../images/food.jpeg"
import MenuPage from './MenuPage'
import { useNavigate } from 'react-router-dom';


const ShopDetails = () => {
  const navigate = useNavigate()

  const addMenu = () =>{
    navigate('/menuregistration')
  }
  return (
    <>
    
    <div className='shop-details'>
       <div className="left-section">
       <img src={foodImg} alt="" />
       </div>
       <div className="right-section">
       <div className="detail">
         <h2>ShopName</h2>
         <h4>Details about the shop</h4>
         <p>I'm happy to provide you with some details of a restaurant shop!

         A restaurant, also known as an eatery or a dining establishment, is a place where food and drinks are served to customers. Restaurant shops come in all shapes and sizes, from small cafes to large chain restaurants</p>

         <button>View Menu</button>
         <button onClick={addMenu}>Add Menu</button>

       </div>
       </div>
    </div>
    <MenuPage/>
    </>
  )
}

export default ShopDetails