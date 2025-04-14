"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("maneknap");

  if (state.succeeded) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-white">
        <p className="text-green-400 text-xl">Thanks for reaching out!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16" id="form">
      <form
        onSubmit={handleSubmit}
        className="text-white shadow-lg rounded-lg p-8 bg-gradient-to-r from-[#1a0b2e] to-[#560ba1]"
      >
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-white">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border text-black rounded-md border-gray-300"
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border text-black rounded-md border-gray-300"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-white">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 border text-black rounded-md border-gray-300"
            placeholder="1234567890"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-white">Message</label>
          <textarea
            name="message"
            required
            className="w-full px-4 py-2 border text-black rounded-md h-36 resize-none border-gray-300"
            placeholder="Type your message..."
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] text-white rounded-md"
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
