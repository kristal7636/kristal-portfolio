"use client";
import React, { useState } from "react";

// Define the types for form data and error messages
type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateField = (name: keyof FormData, value: string): string => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Name is required.";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!emailRegex.test(value)) {
        error = "Invalid email format.";
      }
    } else if (name === "phone") {
      const phoneRegex = /^[0-9]{10}$/; // Adjust regex based on phone format
      if (!value.trim()) {
        error = "Phone number is required.";
      } else if (!phoneRegex.test(value)) {
        error = "Invalid phone number format.";
      }
    } else if (name === "message" && !value.trim()) {
      error = "Message is required.";
    }

    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field
    setErrors({
      ...errors,
      [name]: validateField(name as keyof FormData, value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newErrors: FormErrors = Object.keys(formData).reduce((acc, field) => {
      const fieldName = field as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) acc[fieldName] = error;
      return acc;
    }, {} as FormErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      // Reset the form if needed
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 " id="form">
      <form
        data-aos="zoom-out"
        className="text-white  shadow-lg rounded-lg p-8 bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-white" data-aos="fade-right">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className={`w-full px-4 py-2 border text-black rounded-md " ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white" data-aos="fade-right">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`w-full px-4 py-2 border text-black rounded-md " ${
              errors.email ? "border-red-500" : "border-gray-300"
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
          <label className="block text-white" data-aos="fade-right">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className={`w-full px-4 py-2 border text-black rounded-md " ${
              errors.phone ? "border-red-500" : "border-gray-300"
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
          <label className="block text-white" data-aos="fade-right">
            Message
          </label>
          <textarea
            name="message"
            className={`w-full px-4 py-2 border text-black rounded-md " ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          data-aos="flip-up"
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md bg-gradient-to-r from-[#560ba1] to-[#1a0b2e]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
