import React, {useState,useEffect} from 'react'
import foodImg from "../images/food.jpeg"
import MenuPage from './MenuPage'
import { useNavigate } from 'react-router-dom';



const ShopDetails = ({id, shopData}) => {

  const navigate = useNavigate()
  const [ShopDetail,setShopDetail] = useState([])

//   console.log("shop data:)",shopData)
//   console.log(id)
//   // if(shopData){
     
//   // }
// //  { shopData &&
// if(shopData){

//   const detailofthisshop =  shopData.filter((data) => {
//     return data._id === id
    
//   })
//   console.log("filterd",detailofthisshop)
// }

//}



const getShopDetails = async(e) =>{

const res = await fetch(`http://localhost:4000/merchant/view/${id}`,{
  method: "GET",
  headers: {
    "Content-Type" : "application/json",
  },
 
})
const data = await res.json()
console.log("individualdata",data)


if(res.status === 422 || !data){
 
  console.log("err")
}else{
  setShopDetail(data)
  console.log("merchant datas getted succesfully")
}
}

useEffect(() =>{
  getShopDetails()
},)

    

  const addMenu = () =>{
    navigate(`/menuregistration/${id}`)
  }

  const handleButtonClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
    
    <div className='shop-details'>
       <div className="left-section">
       <img src={foodImg} alt="" />
       </div>
       <div className="right-section">
       <div className="detail">
       
      <>
      
      <h2>Shop Name :{ShopDetail.name}</h2>
      <h4>Details about the shop</h4>
      <p>I'm happy to provide you with some details of a restaurant shop!

      A restaurant, also known as an eatery or a dining establishment, is a place where food and drinks are served to customers. Restaurant shops come in all shapes and sizes, from small cafes to large chain restaurants</p>
      <h4>Phone Number : {ShopDetail.phoneNumber}</h4>
      <button onClick={handleButtonClick}>View Menu</button>
      <button onClick={addMenu}>Add Menu</button>
      </>
      
      

       </div>
       </div>
    </div>
    <MenuPage/>
    </>
  )
}

export default ShopDetails