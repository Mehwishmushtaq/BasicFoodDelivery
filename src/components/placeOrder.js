import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./placeOrder.css"; // Import your CSS for styling

const PlaceOrder = () => {
  const location = useLocation();
  const { name, address, location: userLocation, totalPrice } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    user_message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmOrder = async () => {
    // Perform any order confirmation logic here
    
    try {
      const emailData = {
        user_email: formData.user_email,
        user_name: formData.user_name,
        user_message: formData.user_message,
      };

      // Send email using emailjs and pass emailData
      await emailjs.send("service_mbznwbz", "template_8i2ijwx", emailData, "Vi9vGvKFwkOW7Watp");

      // Display a success message
      alert("Your Order has been Placed Successfully");

       //You can also navigate to UserDetails or perform any other action here
       navigate("/userDetails");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <div className="user-info">
        <h3>User Information</h3>
        <p><strong>Name: User</strong> {name}</p>
        <p><strong>Address: Lahore, Pakistan</strong> {address}</p>
        <p><strong>Location: Unknown</strong> {userLocation}</p>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p><strong>Items Total:</strong> ${totalPrice || 0}</p>
        <p><strong>Delivery Fee:</strong> $10</p>
        <p><strong>Delivery Discount:</strong> -$5</p>
        <p><strong>Total Payment:</strong> ${(totalPrice || 0) + 10 - 5}</p> {/* Calculate total payment */}
        {/* Add order summary details here */}
      </div>
      <Form>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          value={formData.user_name}
          onChange={handleInputChange}
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          value={formData.user_message}
          onChange={handleInputChange}
          placeholder="Message…"
          required
        />
        <Button type="button" color="green" onClick={handleConfirmOrder}>
          Confirm Order
        </Button>
      </Form>
    </div>
  );
};

export default PlaceOrder;
