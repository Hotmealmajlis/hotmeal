import React from 'react'
import foodImage from "../images/biriyani.jpeg"

const MenuDetails = () => {
  return (
    <div className='shop-details'>
       <div className="left-section">
       <img src={foodImage} alt="" />
       </div>
       <div className="right-section">
       <div className="detail">
         <h2>Food Name</h2>
         <h4>Details about the Food</h4>
         <p>I'm happy to provide you with some details of a restaurant shop!

         A restaurant, also known as an eatery or a dining establishment, is a place where food and drinks are served to customers. Restaurant shops come in all shapes and sizes, from small cafes to large chain restaurants</p>
         <h5>$500</h5>
         <button>Buy</button>
       </div>
       </div>
    </div>
  )
}

export default MenuDetails