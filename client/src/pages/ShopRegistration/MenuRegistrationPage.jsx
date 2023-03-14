import React, { useState } from "react";

import "./shopregister.scss"

function MenuRegistrationPage() {
  // Declare state variables for the form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Code to submit form data to server or store in state
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