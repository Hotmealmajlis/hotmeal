import React from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const goToSeller = () =>{
         navigate('/seller')
    }
  return (
    <div className='homepage'>
      <div className='links'>

      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/register')}>Signup</button>
      </div>
        <div>

        <button onClick={goToSeller}>Seller</button>
        </div>
        <div>

        <button onClick={() => navigate('/buyer')}>Buyyer</button>
        </div>
        
    </div>
  )
}

export default Home