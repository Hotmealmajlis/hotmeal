import React from 'react'
import img1 from '../images/loginimage.jpeg'
import { useNavigate } from 'react-router-dom'

const ShopsPage = () => {
    const navigate = useNavigate()
  return (
    <div className='shops-page'>
    <div className="heading">
     <h1>List of Best Restaurents</h1>
    </div>
    <div className="card-section">
      <div className="card" onClick={() => navigate('/shopdetails')}>
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>


      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>

      <div className="card">
      <img src={img1} alt="" />
        <h3>NameHere</h3>
        <button>See more</button>
      </div>
    </div>
    </div>
  )
}

export default ShopsPage