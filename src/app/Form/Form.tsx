"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const apiKey = "b2969e34-a0f8-4e87-aff3-82218201f0ff";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Your Website",
      subject: "New Contact Message from Website",
    },
    onSuccess: (msg: any) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg: any) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16" id="form">
      <form
        className="text-white shadow-lg rounded-lg p-8 bg-gradient-to-r from-[#1a0b2e] to-[#560ba1]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Hidden botcheck field */}
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        />

        {/* Name */}
        <div className="mb-4">
          <label className="block text-white">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-2 border text-black rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: {
                value: 80,
                message: "Name cannot exceed 80 characters",
              },
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{`${errors.name.message}`}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className={`w-full px-4 py-2 border text-black rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-white">Phone Number</label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className={`w-full px-4 py-2 border text-black rounded-md ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{`${errors.phone.message}`}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-white">Message</label>
          <textarea
            placeholder="Type your message..."
            className={`w-full px-4 py-2 border text-black rounded-md h-36 resize-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{`${errors.message.message}`}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] text-white rounded-md"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Submit"
          )}
        </button>

        {/* Success or Error Message */}
        {isSubmitSuccessful && isSuccess && (
          <p className="text-green-300 text-sm text-center mt-4">
            {message || "Your message has been sent!"}
          </p>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <p className="text-red-300 text-sm text-center mt-4">
            {message || "Something went wrong. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
}
