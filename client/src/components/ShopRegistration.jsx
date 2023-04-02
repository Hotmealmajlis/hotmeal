import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ShopRegistration = () => {

  const navigate = useNavigate()

  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const [message, setMessage] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    // code to submit form data goes here
    const response = await fetch('http://localhost:4000/merchant/add', {
      method: 'POST',
      body: JSON.stringify({
        name: shopName,
        email: email,
        phoneNumber: contactNumber 
         }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data.message)
    setMessage(data.message);
    navigate("/shopdetails")
  };

  return (
    <div className="shop-register">

    <div className="left-section">
      <div className="content-section">
        <h3>Its time to bring your business online</h3>
      </div>
    </div>
    <div className="right-section">
    
    <form onSubmit={handleSubmit}>
      <input
      className='inputField'
        type="text"
        id="shopName"
        value={shopName}
        placeholder="Shop Name"
        onChange={(e) => setShopName(e.target.value)}
        required
      />
<br />
      <input
      className='inputField'
        type="text"
        id="ownerName"
        placeholder='Owner Name'
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        required
      />
<br />
      <input
      className="inputField"
        type="tel"
        id="contactNumber"
        placeholder='Contact Number'
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        required
      />
<br />
      <input
      className="inputField"
        type="email"
        id="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
<br />
      <textarea
      className="inputField"
        id="address"
        placeholder='Address '
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

     
      <br />

      <label htmlFor="openingTime">Opening:</label>
      <input
        type="time"
        id="openingTime"
        value={openingTime}
        onChange={(e) => setOpeningTime(e.target.value)}
        required
      />

      <label htmlFor="closingTime">Closing:</label>
      <input
        type="time"
        id="closingTime"
        value={closingTime}
        onChange={(e) => setClosingTime(e.target.value)}
        required
      />
<br />
      <button className='btn' type="submit">Register</button>
    </form>
  {message && <p style={{color:"orange"}}>{message}</p>}
    </div>
    
    </div>
  );
};

export default ShopRegistration;
