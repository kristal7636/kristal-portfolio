"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("maneknap");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length >= 2
          ? ""
          : "Name must be at least 2 characters";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
      case "phone":
        return /^[0-9]{10}$/.test(value) ? "" : "Phone must be 10 digits";
      case "message":
        return value.trim().length >= 10
          ? ""
          : "Message must be at least 10 characters";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const isFormFilled =
    formValues.name &&
    formValues.email &&
    formValues.phone &&
    formValues.message &&
    !Object.values(errors).some((error) => error !== "");

  if (state.succeeded) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-white">
        <p className="text-green-400 text-xl" data-aos="flip-up">
          Thanks for reaching out! <br />
          We will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16" id="form">
      <form
        data-aos="zoom-in"
        onSubmit={handleSubmit}
        className="text-white shadow-lg rounded-lg p-8 bg-gradient-to-r from-[#1a0b2e] to-[#560ba1]"
      >
        {/* Full Name */}
        <div className="mb-4">
          <label data-aos="fade-right" className="block text-white">
            Full Name
          </label>
          <input
            data-aos="flip-up"
            type="text"
            name="name"
            required
            value={formValues.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-black rounded-md border-gray-300"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label data-aos="fade-right" className="block text-white">
            Email
          </label>
          <input
            data-aos="flip-up"
            type="email"
            name="email"
            required
            value={formValues.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-black rounded-md border-gray-300"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label data-aos="fade-right" className="block text-white">
            Phone Number
          </label>
          <input
            data-aos="flip-up"
            type="tel"
            name="phone"
            required
            value={formValues.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-black rounded-md border-gray-300"
            placeholder="Your phone number"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label data-aos="fade-right" className="block text-white">
            Message
          </label>
          <textarea
            data-aos="flip-up"
            name="message"
            required
            value={formValues.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-black rounded-md h-36 resize-none border-gray-300"
            placeholder="Type your message..."
          ></textarea>
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Submit Button */}
        {isFormFilled && (
          <button
            data-aos="flip-up"
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] text-white rounded-md"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
