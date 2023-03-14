
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import BuyyerHome from './pages/BuyyerHome/BuyyerHome';
import SellerHome from './pages/SellerHome/SellerHome';
import ShopDetailsPage from './pages/ShopDetails/ShopDetailsPage';
import MenuDetailspage from './pages/ShopDetails/MenuDetailspage';
import ShopRegistrationPage from './pages/ShopRegistration/ShopRegistrationPage';
import MenuRegistrationPage from './pages/ShopRegistration/MenuRegistrationPage';


function App() {
  return (
    <div className="App">

      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Signup/>}/>
       <Route path='/buyer' element={<BuyyerHome/>} />
       <Route path='/seller' element={<SellerHome/>} />
       <Route path='/shopdetails' element={<ShopDetailsPage/>} />
       <Route path='/menudetails' element={<MenuDetailspage/>} />
       <Route path='/shopregistration' element={<ShopRegistrationPage/>} />
       <Route path='/menuregistration' element={<MenuRegistrationPage/>} />


      </Routes>
     
    </div>
  );
}

export default App;
