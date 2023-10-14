import React from "react";

const ContactFrom = () => {
  return (
    <form className="space-y-4">
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Full name"
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email address"
      />
      <textarea
        className="form-input min-h-[120px]"
        name="message"
        placeholder="Your message"
      ></textarea>
      <button className="font-primary text-xl capitalize border-2 border-primary py-2 px-5 rounded-3xl hover:bg-primary hover:text-white">
        Send message
      </button>
    </form>
  );
};

export default ContactFrom;
