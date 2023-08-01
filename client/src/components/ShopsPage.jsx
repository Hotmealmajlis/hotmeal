import React from 'react'
import img1 from '../images/shop.jpeg'

import { useNavigate } from 'react-router-dom'

const ShopsPage = ({shopData}) => {
    const navigate = useNavigate()

    
    
  return (
    <div className="shops-page">
      <div className="heading">
        <h1>List of Best Restaurents</h1>
      </div>
      <div className="card-section">
        {shopData &&
          shopData.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => navigate(`/shopdetails/${item._id}`)}
            >
              <div className="image-container">
                <img src={img1} alt="" />
              </div>
              <h3>{item.name}</h3>
              <div className="buttons-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `tel:${item.phoneNumber}`;
                  }}
                >
                  Call
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/menu/${item._id}`);
                  }}
                >
                  View Menu
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShopsPage