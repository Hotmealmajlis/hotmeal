import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function LoginPage() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    // const response = await fetch('http://localhost:4000/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const data = await response.json();
    // console.log(data);
    // setMessage(data.message);
    // navigate("/")

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log(data)

      setLoggedIn(true);
      navigate('/home')
    } catch (error) {
      console.error(error);
    }

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
      
      {message && <p style={{color: "orange"}}>{message}</p>}
    </div>
  );
}

export default LoginPage;
