"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("myzzzkrj");

  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-md backdrop-brightness-150 contact-form"
    >
      {/* Full Name */}

      <label htmlFor="full-name">Full Name</label>
      <input id="full-name" type="text" name="full-name" required />
      <ValidationError
        prefix="Full Name"
        field="full-name"
        errors={state.errors}
      />

      {/* Email Address */}
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* Phone Number */}
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        pattern="^\+?[0-9\s\-]+$"
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      {/* Message */}
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* Submit Button */}
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
