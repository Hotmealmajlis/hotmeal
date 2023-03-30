import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()
    // const goToSeller = () =>{
    //      navigate('/seller')
    // }
  return (
    <div className='homepage'>
      <div className='links'>

      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/register')}>Signup</button>
      </div>
      <div className='left-section'>
        <div className="side-line"></div>
        <h1>Health </h1>
        
        <h1>Tasty Launch </h1>
        <h4>For Healthy Life</h4>
        <button className='btn-explore'>Let's Explore </button>
      </div>
      <div className='right-section'>right</div>
        
        
    </div>
  )
}

export default Hero