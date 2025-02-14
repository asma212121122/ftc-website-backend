import React, { useState } from "react";
import "./contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/send-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Reset form
      } else {
        const data = await response.json();
        setStatus(data.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
    }
  };

  return (
    <div id="ContactUs" className="ContactUs">
      <div className="title">Contact Us</div>
      <div className="subtitle">Reach us here</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-input input flex">
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">SEND MESSAGE</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
