import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function SignupPage() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async(e) => {
    e.preventDefault();
    // TODO: Handle signup logic
    const res = await fetch("http://localhost:4000/auth/register",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
          username,password,email
    })
    
  })
  const data = await res.json()
      console.log(data)
      navigate("/login")

  }

  return (
    <div className='loginForm'>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
     
       
          <input className='inputField' placeholder='UserName' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
     
        <br />
        
          <input className='inputField' placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <br />
       
          <input className='inputField' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
        <br />
        <div className="btn-section">

        <button className='submitBtn' type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
