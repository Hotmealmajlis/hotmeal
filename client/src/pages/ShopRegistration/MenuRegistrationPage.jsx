import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./shopregister.scss"

function MenuRegistrationPage() {
  // Declare state variables for the form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate()

  const {merchantId}= useParams()
  console.log(merchantId)

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Code to submit form data to server or store in state
    const response = await fetch('http://localhost:4000/product/add', {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        merchantId,
         }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data.message)
    // setMessage(data.message);
    navigate("/")
  };

  return (
    <div className="menu-register">

      <div className="left-section">
      
      </div>
      <div className="right-section">
      <h1>About Your Menu Item</h1>
      <form onSubmit={handleSubmit}>
      <div>
        
        <input
          type="text"
          className="inputField"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <textarea
        className="inputField"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        
        <input
        className="inputField"
        placeholder="Price"
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <button className="btn" type="submit">Add Item</button>
    </form>
      </div>

    </div>
    
  );
}

export default MenuRegistrationPage;