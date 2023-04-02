import React from 'react'
import img1 from '../images/shop.jpeg'

import { useNavigate } from 'react-router-dom'

const ShopsPage = ({shopData}) => {
    const navigate = useNavigate()

    
    
  return (
    <div className='shops-page'>
    <div className="heading">
     <h1>List of Best Restaurents</h1>
    </div>
    <div className="card-section">
    { shopData && shopData.map((item) => 
       
         
         
         <div className="card" onClick={() => navigate(`/shopdetails/${item._id}`)}>
         <img src={img1} alt="" />
           <h3>{item.name}</h3>
           <button onClick={() => {
    window.location.href = `tel:${item.phoneNumber}`; // replace with your phone number
  }}>call</button>
         </div>
         
      
    )}

      
    </div>
    </div>
  )
}

export default ShopsPage