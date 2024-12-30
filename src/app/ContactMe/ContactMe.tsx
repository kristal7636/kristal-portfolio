"use client";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (phone) => {
    // Regular expression for phone number validation
    const phoneRegex =
      /^[+]?[0-9]{1,4}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?[\d\s.-]{7,}$/;
    return phoneRegex.test(phone);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    alert("Thanks, You will be responded soon");
    // Validate Email
    if (!validateEmail(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    // Validate Phone
    if (!validatePhoneNumber(formData.phone)) {
      validationErrors.phone = "Please enter a valid phone number.";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors("");
      // Handle form submission logic (e.g., sending data to the server)
      console.log("Form Submitted", formData);
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 ">
      <form
        className="text-white shadow-lg rounded-lg p-8 bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] "
        onSubmit={handleSubmit}
        z
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-white">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-white">Email</label>
          <input
            type="email"
            name="email"
            className={`w-full px-4 py-2 border text-black border-gray-300 rounded-md ${
              errors.email ? "border-red-500" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={`w-full px-4 py-2 border text-black border-gray-300 rounded-md ${
              errors.phone ? "border-red-500" : ""
            }`}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-white">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md bg-gradient-to-r from-[#560ba1] to-[#1a0b2e  ]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
