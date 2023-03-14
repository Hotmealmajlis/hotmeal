import React from 'react'
import img2 from "../images/signupimage.jpeg"
import { useNavigate } from 'react-router-dom'

const MenuPage = () => {
    const navigate = useNavigate()
  return (
    <div className='shops-page'>
    <div className="heading">
     <h1>List of Best Menus</h1>
    </div>
    <div className="card-section" onClick={() => navigate("/menudetails")}>
      <div className="card">
      <img src={img2} alt="" />
        <h3>FoodName</h3>
        <h4 style={{"color" : "green" , "margin" : "0"}}>$500</h4>
      </div>

      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>


      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img2} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>
    </div>
    </div>
  )
}

export default MenuPage