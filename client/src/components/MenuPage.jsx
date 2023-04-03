import React, {useState, useEffect} from 'react'
import img2 from "../images/food2.jpeg"
import { useParams, useNavigate } from "react-router-dom";


const MenuPage = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
      const getMenuData = async () => {
        try {
          const response = await fetch(`http://localhost:4000/products/view/${userId}`);
          const data = await response.json();
          setMenuData(data);
        } catch (error) {
          console.error(error);
        }
      };
      getMenuData();
    },);

  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // add product to cart
  const addToCart = async (product, quantity) => {
     try {
      const { name, price } = product;
      const totalPrice = price * quantity;
      const response = await fetch("http://localhost:4000/products/add", {
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
      if (response.ok) {
        alert('Item added to cart');
      } else {
        alert('Error adding item to cart');
      }
    } catch (error) {
      console.error(error);
      alert('Error adding item to cart');
    }

  };

  return (
    <div className="menus-page">
      <div className="heading">
        <h1>List of Best Menus</h1>
        <p>{userId}</p>
      </div>
      <div className="cards-section">
        {menuData &&
          menuData.map((item) => {
            return (
              <div className="menus-card">
                <img
                  src={img2}
                  alt=""
                  onClick={() => navigate("/menudetails")}
                />
                <h3>{item.name}</h3>
                <h4 style={{ color: "green", margin: "0" }}>
                  Price : ${item.price}
                </h4>
                <p>Quantity: {quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                <button
                  className="addtocart"
                  onClick={() => addToCart(item, quantity)}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MenuPage