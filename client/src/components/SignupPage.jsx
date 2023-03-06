import React, { useState } from 'react';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Handle signup logic
  }

  return (
    <div className='page'>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
     
       
          <input className='inputField' placeholder='UserName' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
     
        <br />
        
          <input className='inputField' placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <br />
       
          <input className='inputField' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
        <br />
        <button className='submitBtn' type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupPage;
