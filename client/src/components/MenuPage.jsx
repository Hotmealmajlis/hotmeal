import React, {useState} from 'react'
import img2 from "../images/food2.jpeg"
import img3 from "../images/img4.jpeg"
import { useNavigate } from 'react-router-dom'

const MenuPage = () => {
  const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate()
  return (
    <div className='menus-page'>
    <div className="heading">
     <h1>List of Best Menus</h1>
    </div>
    <div className="cards-section" >
      <div className="menus-card">
      <img src={img2} alt="" onClick={() => navigate("/menudetails")} / >
        <h3>FoodName</h3>
        <h4 style={{"color" : "green" , "margin" : "0"}}>Price : $500</h4>
        <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button className='addtocart' onClick={() => navigate('/cart')}>Add to cart</button>
      </div>
      <div className="menus-card">
      <img src={img3} alt="" onClick={() => navigate("/menudetails")} / >
        <h3>FoodName</h3>
        <h4 style={{"color" : "green" , "margin" : "0"}}>Price : $500</h4>
        <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button className='addtocart' onClick={() => navigate('/cart')}>Add to cart</button>
      </div>
      <div className="menus-card">
      <img src={img2} alt="" onClick={() => navigate("/menudetails")} / >
        <h3>FoodName</h3>
        <h4 style={{"color" : "green" , "margin" : "0"}}>Price : $500</h4>
        <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button className='addtocart' onClick={() => navigate('/cart')}>Add to cart</button>
      </div>
      <div className="menus-card">
      <img src={img2} alt="" onClick={() => navigate("/menudetails")} / >
        <h3>FoodName</h3>
        <h4 style={{"color" : "green" , "margin" : "0"}}>Price : $500</h4>
        <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button className='addtocart' onClick={() => navigate('/cart')}>Add to cart</button>
      </div>

      

      

      
    </div>
    </div>
  )
}

export default MenuPage