import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className='loginForm'>
      <h1>Login Page</h1>
      <div className="form">
      
      <div>
        
        <input className='inputField' placeholder='Email' type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        
        <input className='inputField' type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
      </div>
      <div className='btn-section'>
      <button className='submitBtn' onClick={handleSubmit}>Login</button>
      </div>
      </div>
      
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPage;
