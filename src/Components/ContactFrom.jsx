import React from "react";

const ContactFrom = () => {
  return (
    <form className="space-y-4">
      <input
        className="w-full py-2 px-5 text-md rounded-md"
        type="text"
        name="name"
        placeholder="Full name"
      />
      <input
        className="w-full py-2 px-5 text-md rounded-md"
        type="email"
        name="email"
        placeholder="Email address"
      />
      <textarea
        className="w-full py-2 px-5 text-md rounded-md min-h-[120px]"
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
