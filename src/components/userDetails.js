import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import AdminHome from "./adminHome";
import UserHome from "./userHome";
import ProductCard from "./productCard";
import CartModel from "./cartModel";
import "./userDetails.css"; // Import your UserDetails.css file



import "./userDetails.css";

export default function UserDetails() {
  const [userData, setUserData] = useState({
    userType: "User",
    products: [
      {
        id: 1,
        name: "Product 1",
        image: 'images/menu-1.png',
        price: 19.99,
        details: "This is the details of Product 1.",
      },
      {
        id: 2,
        name: "Product 2",
        image: "/images/menu-2.png",
        price: 29.99,
        details: "This is the details of Product 2.",
      },
      {
        id: 3,
        name: "Product 3",
        image: "/images/menu-3.png",
        price: 15.99,
        details: "This is the details of Product 3.",
      },
      {
        id: 4,
        name: "Product 4",
        image: "/images/menu-4.png",
        price: 24.99,
        details: "This is the details of Product 4.",
      },
      {
        id: 5,
        name: "Product 5",
        image: "/images/menu-5.png",
        price: 9.99,
        details: "This is the details of Product 5.",
      },
      {
        id: 6,
        name: "Product 6",
        image: "/images/menu-6.png",
        price: 34.99,
        details: "This is the details of Product 6.",
      },
      {
        id: 7,
        name: "Product 7",
        image: "/images/service-1.jpg",
        price: 28.99,
        details: "This is the details of Product 7.",
      },
      {
        id: 8,
        name: "Product 8",
        image: "/images/service-2.jpg",
        price: 42.99,
        details: "This is the details of Product 8.",
      },

      // Add more products as needed
    ],
  });

  const [admin, setAdmin] = useState(userData.userType === "Admin");
  const [cart, setCart] = useState([]);
  const [isCartModelOpen, setIsCartModelOpen] = useState(false); // New state


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogout = () => {
    // Redirect to the sign-in page
    window.location.href = "./sign-in"; // Replace with your actual sign-in URL
  };

  const toggleCartModel = () => {
    setIsCartModelOpen(!isCartModelOpen);
  };

  return (
    <div>
      {admin ? (
        <AdminHome />
      ) : (
        <div>
          <div className="user-actions">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="product-container">
            {userData.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          <div className="cart-icon" onClick={toggleCartModel}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cart.length}</span>
          </div>
          {isCartModelOpen && <CartModel cartItems={cart} onClose={toggleCartModel} />}
        </div>
      )}
    </div>
  );
}
