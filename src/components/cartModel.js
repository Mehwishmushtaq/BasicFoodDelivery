import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cartModel.css";

export default function CartModel({ cartItems, onClose }) {
  console.log(cartItems); // Add this line

  // Initialize itemCounts with default value of 1 for each item
  const initialItemCounts = cartItems.reduce((counts, item) => {
    counts[item.id] = 1;
    return counts;
  }, {});
  const [itemCounts, setItemCounts] = useState(initialItemCounts); // State to track item counts
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    // Calculate the total price of items
    const total = calculateTotalPrice();
    // Add any logic you need before navigating
    // Pass the total as state when navigating to PlaceOrder
    navigate("/placeOrder", { state: { totalPrice: total } }); // Navigate to the new route
  };

  const handleItemCountChange = (itemId, action) => {
    setItemCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (action === "add") {
        newCounts[itemId] = (newCounts[itemId] || 1) + 1; // Increment by 1 from initial value 1
      } else if (action === "subtract" && newCounts[itemId] > 1) {
        newCounts[itemId] = newCounts[itemId] - 1;
      }
      return newCounts;
    });
  };

  const getTotalItemCount = () => {
    return Object.values(itemCounts).reduce((total, count) => total + count, 0);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemCount = itemCounts[item.id] || 1; // Use initial value 1 if no change
      totalPrice += item.price * itemCount;
    });
    return totalPrice.toFixed(2); // To display the price with two decimal places
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-window">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <div className="item-count">
                <button onClick={() => handleItemCountChange(item.id, "subtract")}>-</button>
                <div className="count-box">
                  <span>{itemCounts[item.id]}</span>
                </div>
                <button onClick={() => handleItemCountChange(item.id, "add")}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-button-container">
          <div className="total-price">
            <p>Total:</p>
            <p className="price">${calculateTotalPrice()}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckoutClick}>
            Check Out ({getTotalItemCount()})
          </button>
        </div>
      </div>
    </div>
  );
}
