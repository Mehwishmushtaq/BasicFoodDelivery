import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./sendEmail.css";

const SendEmail = () => {
  const navigate = useNavigate();
  const form = useRef();
  const location = useLocation();
  const { successMessage } = location.state || {}; // Access the success message from location state


  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    user_message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // Simulate email sending
    console.log("Email sent successfully!");

    try {
      // Simulate sending email or performing form submission logic
      // ...
      const emailData = {
        user_email: formData.user_email,
        user_name: formData.user_name,
        user_message: formData.user_message,

        // Navigate to UserDetails page after successful submission

      };

      // Send email using emailjs and pass emailData
      await emailjs.send("service_mbznwbz", "template_8i2ijwx", emailData, "Vi9vGvKFwkOW7Watp");

      // Navigate to UserDetails page after successful submission
      navigate("/userDetails");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };


  return (
    <div className="SendEmail">
      <Form onSubmit={handleOnSubmit}>
        {/* Display the success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}

        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          value={formData.user_email} // Bind the value to formData state
          onChange={handleInputChange} // Handle input change
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
          value={formData.user_name} // Bind the value to formData state
          onChange={handleInputChange} // Handle input change
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
          value={formData.user_message} // Bind the value to formData state
          onChange={handleInputChange} // Handle input change
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SendEmail;
