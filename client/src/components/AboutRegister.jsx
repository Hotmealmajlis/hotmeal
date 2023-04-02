import React from 'react'
import {useNavigate} from "react-router-dom"


const AboutRegister = () => {
  const navigate = useNavigate()

  const registerShop = () => {
    navigate("/shopregistration")
  }

  return (
    <div className='about-register'>
       <div className="left-section">
        
       </div>

       <div className="right-section">
       <div className="heading-section">
       
       <h1>Do you have a Restaurent ? <br></br>Then register here <br></br> to publish..</h1>
       </div>

       <div className="content-section">
       
       <p> <span style={{"color": 'white', "fontSize" : "22px" ,"fontWeight": 'bold'}}>Join</span> us at our HotMeal application and indulge in a dining experience like no other - register now to make sure you don't miss out!</p>
       <p style={{"marginTop" : "-15px"}}>Restaurants typically have menus that offer a variety of food and drink options, and customers can either order a la carte or choose from set menus or specials.</p>
       </div>
       <div className="btn-section-aboutregister">
         <button className="btn-register" onClick={registerShop}>Clik To Register</button>
       </div>
       </div>
    </div>
  )
}

export default AboutRegister