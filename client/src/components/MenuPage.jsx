import React, {useState, useEffect} from 'react'
import img2 from "../images/food2.jpeg"
import img3 from "../images/img4.jpeg"
import { useNavigate } from 'react-router-dom'

const MenuPage = ({menuData}) => {
  const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate()

    //get all menus

  return (
    <div className='menus-page'>
    <div className="heading">
     <h1>List of Best Menus</h1>
    </div>
    <div className="cards-section" >
     {menuData && menuData.map((item) =>{
      return (
        <div className="menus-card">
      <img src={img2} alt="" onClick={() => navigate("/menudetails")} / >
        <h3>{item.name}</h3>
        <h4 style={{"color" : "green" , "margin" : "0"}}>Price : ${item.price}</h4>
        <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button className='addtocart' onClick={() => navigate('/cart')}>Add to cart</button>
      </div>
      )
     })}
    

      

      

      
    </div>
    </div>
  )
}

export default MenuPage