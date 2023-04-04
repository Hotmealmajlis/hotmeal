import React, {useState, useEffect} from 'react'
import img2 from "../images/food2.jpeg"
import { useParams, useNavigate } from "react-router-dom";
import './MenuPage.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MenuPage = () => {
  const { merchantId } = useParams();
  
  const [merchant, setMerchant] = useState(null);
  // console.log(merchant && merchant.name);

    useEffect(() => {
    const fetchMerchant = async () => {
      try {
        const response = await fetch(`http://localhost:4000/merchant/view/${merchantId}`);
        const data = await response.json();
        setMerchant(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        console.log("error :(")
      }
      };
      fetchMerchant();
    },[merchantId]);

  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    const getMenuData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/product/view/${merchantId}`);
        const data = await response.json();
        setMenuData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        console.log("error :(")
      }
      };
      getMenuData();
    },[merchantId]);

  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);


  // add product to cart
  const addToCart = async (product, quantity, buttonIndex) => {
     try {
      setLoading(true);
      setClickedButtonIndex(buttonIndex);
      const { name, price } = product;
      const totalPrice = price * quantity;
      const response = await fetch("http://localhost:4000/cart/add", {
        method: "POST",
        body: JSON.stringify({
          items: [{
          product: {
            name,
            price,
          },
          quantity,
          totalPrice,
        }],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //   alert('Item added to cart');
      setLoading(false);
      setClickedButtonIndex(null);
      if (response.ok) {
        toast.success('Item added to cart', {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
      } else {
        // alert('Error adding item to cart');
        toast.error('Error adding item to cart', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
      }
    } catch (error) {
      console.error(error);
      // alert('Error adding item to cart');
      toast.error('Error adding item to cart', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
    setLoading(false);
    setClickedButtonIndex(null);
    }

  };

  return (
        <div className="menus-page">
      <div className="heading">
        <h1>Menu</h1>
        {/* <p className="merchant-id">{merchantId}</p> */}
        {merchant && <p>{merchant.name}</p>}
      </div>
      <ToastContainer/>
      <div className="cards-section">
        {menuData &&
          menuData.map((item, index) => {
            return (
              <div className="menus-card" key={item._id}>
                <div className="image-container">
                  <img
                    src={img2}
                    alt=""
                    className="menu-image"
                    onClick={() => navigate("/menudetails")}
                  />
                </div>
                <div className="menu-details">
                  <h3 className="menu-name">{item.name}</h3>
                  <h4 className="menu-price">${item.price}</h4>
                    {/* eslint-disable-next-line react/prop-types */}
                  <div className="quantity-selector"> 
                    <button
                      className="quantity-button"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity === 1}
                    >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="icon icon-tabler icon-tabler-minus" 
                      width="25" 
                      height="25" 
                      viewBox="0 0 24 24" 
                      stroke-width="2" 
                      stroke="#899499" 
                      fill="none" 
                      stroke-linecap="round" 
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    </button>
                    <p className="quantity-label">{quantity}</p>
                    <button
                      className="quantity-button"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                    
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="#899499" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    </button>
                  </div>
                  {/* <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(item, quantity)}
                  >
                    Add to Cart
                  </button> */}
                  {/* <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(item, quantity)}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      "Add to cart"
                    )}
                  </button> */}
                  <button
                    className={`add-to-cart-button${clickedButtonIndex === index ? ' clicked' : ''}`}
                    onClick={() => addToCart(item, quantity, index)}
                    disabled={loading && clickedButtonIndex === index}
                  >
                    {loading && clickedButtonIndex === index ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      "Add to cart"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>

  );
};

export default MenuPage