import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center bg-[#2b6777] w-full h-full"
    >
      <form
        method="POST"
        action="https://getform.io/f/da7a55c2-074c-4f0c-9200-15872520e376"
        className="flex flex-col max-w[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF5733] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300l py-4">
            Submit the form below or send me an email at
            josemonagas212@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6]    p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6]   p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#FF5733] hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
