import React from "react";
import Header from "../header";
function ContactMe() {
  return (
    <div className="text-white text-center pb-20">
      <Header Name="Contact Me" />
      <div>
        <form id="contact" action="" method="post">
          <div className="flex justify-between">
            <input
              name="name"
              type="text"
              className="w-5/12 bg-third focus:bg-secondary pl-6 py-2 text-white border-2 focus:outline-none"
              id="name"
              placeholder="Your name..."
              required=""
            />
            <input
              name="name"
              type="text"
              className="w-5/12 bg-third focus:bg-secondary pl-6 py-2 text-white border-2 focus:outline-none"
              id="name"
              placeholder="Your email..."
              required=""
            />
          </div>
          <div className="my-8">
            <input
              name="name"
              type="text"
              className="w-full bg-third focus:bg-secondary pl-6 py-2 text-white border-2 focus:outline-none"
              id="name"
              placeholder="Subject..."
              required=""
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="6"
              className="w-full text-white border-2 focus:outline-none bg-third  focus:bg-secondary p-3"
              id="message"
              placeholder="Your message..."
              required=""
            ></textarea>
          </div>
          <button className="px-8 py-2 bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 font-bold mt-10">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
