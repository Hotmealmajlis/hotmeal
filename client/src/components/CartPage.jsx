import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import './cart.css';
import { v4 as uuidv4 } from "uuid";
// import { CartItem } from '../../../server/models/CartModel';


function Cart() {
  // const { id } = useParams();
  // const [items, setItems] = useState([]);

  const [orderId, setOrderId] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserId(data.userId);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user details:", error);
  //     });
  // }, []); // Empty dependency array ensures this effect runs only once on mount

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:4000/cart/view/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       const cart = await response.json();
  //       setItems(
  //         savedCartItems.map((product) => ({
  //           id: product._id,
  //           name: product.product.name,
  //           merchant: product.product.merchant,
  //           image: product.product.image,
  //           price: product.product.price,
  //           quantity: product.quantity,
  //         }))
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchCart();
  // }, [id]);
  const [cart, setCart] = useState({ user: {}, products: [] });
  const [savedCartItems, setSavedCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchCart = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:4000/cart/`, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     });
    //     const data = await response.json();
    //     setCart(data);
    //     console.log(data);
    //     setCart(data);
    //     setSavedCartItems(data.savedCartItems);
    //     console.log(data.savedCartItems);
    //     console.log("cart data");
    //     // console.log(cart.products.price)
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchCart();
    fetch("http://localhost:4000/cart/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data.cart);
        setSavedCartItems(data.savedCartItems);
        setLoading(false);
        console.log("data loaded")
      })

      .catch((error) => {
        console.error("Error fetching cart details:", error);
      });
  }, [cart]);
  // console.log(savedCartItems)
  // useEffect(() => {
  //   // console.log(cart);
  //   // console.log("cart");
  //   const cartItems = cart.products
  //   setCartItems(cartItems)
  // }, [cart]);

  console.log(savedCartItems);
  console.log("cart",cart);
  console.log(savedCartItems ? savedCartItems : []);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = {
      ...cart,
      products: savedCartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      }),
    };
    setCart(updatedCart);

  };

  const handleRemoveItem = (id) => {
    const updatedCart = savedCartItems.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handlePlaceOrder = async () => {
    const orderId = uuidv4();
    setOrderId(orderId);
    const qrCodeDataUrl = await QRCode.toDataURL(orderId);
    setQrCodeUrl(qrCodeDataUrl);
    setIsOrderPlaced(true);
    setCart([]);

    // Send the order data to the backend using an API call
    const response = await fetch("http://localhost:4000/order/add", {
      method: "POST",
      body: JSON.stringify({
        orderId: orderId,
        items: savedCartItems,
        total: Number(total),
        qrCodeUrl: qrCodeDataUrl,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      alert("Order placed successfull : )");
      console.log("Order placed successfully:", data);
    } else {
      handlePlaceOrder();
    }
  };

  const handleDownloadQrCode = () => {
    const qrCodeImg = document.querySelector(".qr-code img");
    const link = document.createElement("a");
    link.href = qrCodeImg.src;

    // Set the download attribute and file name
    link.download = `order-${orderId}.png`;
    link.click();
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    alert("Order ID Copied to Clipboard!");
  };
  const reloadCart = () => {
    setIsOrderPlaced(false);
    window.location.reload();
  };
  // const total = cart.products.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );
  const total =
    savedCartItems && savedCartItems.length > 0
      ? cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;


    if (loading) {
      return <div>Loading...</div>;
    }
    // console.log(savedCartItems);

  return (
    //
    <>
      {savedCartItems && savedCartItems.length > 0 ? (
        <div className="cart">
          {/* // rest of the code */}
          <div className="cart">
            <h1>My Cart</h1>
            <div className="cart-items">
              {savedCartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.product.image} alt={item.name} />
                  <div className="cart-item-quantity">
                    <h3>{item.product.name}</h3>
                    {/* <h4>{item.merchant}</h4> */}
                    <div className="quantity-remove">
                      <input
                        className="cart-item-quantity-input"
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                      />
                      <div className="cart-item-buttons">
                        <button
                          className="remove-button"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <svg
                            // eslint-disable-next-line react/prop-types

                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke-width="1.7"
                            stroke="tomato"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-details">
                    <p>₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <p>Total: ₹{total.toFixed(2)}</p>
              {!isOrderPlaced && (
                <button
                  className="place-order-button"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              )}
            </div>
            {isOrderPlaced && (
              <div className="order-popup">
                <div className="order-popup-content">
                  <h2>Order Placed Successfully!</h2>
                  <p>Your Order ID:</p>
                  <div className="order-id">
                    <span>{orderId}</span>
                    <button className="copy-button" onClick={handleCopyOrderId}>
                      Copy
                    </button>
                  </div>
                  <div className="qr-code">
                    <img src={qrCodeUrl} alt="Order ID QR Code" />
                    <button
                      className="download-button"
                      onClick={handleDownloadQrCode}
                    >
                      Download QR Code
                    </button>
                  </div>
                  <button className="close-button" onClick={reloadCart}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>No items in cart</div>
      )}
    </>
  );
}
export default Cart;