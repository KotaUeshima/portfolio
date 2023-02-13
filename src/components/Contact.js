import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="pt-20 w-full min-h-screen bg-primary text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="header">CONTACT</p>
          <p className="subheader">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/dfe9a9e9-6b9c-433a-9867-96d178be9e94"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 border-2 rounded-md text-black tracking-wider focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 border-2 rounded-md text-black tracking-wider focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Any message to connect!"
              rows="10"
              className="p-2 border-2 rounded-md text-black tracking-wider focus:outline-none"
            ></textarea>
            <button className="text-black bg-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
