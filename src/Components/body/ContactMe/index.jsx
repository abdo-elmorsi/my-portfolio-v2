import React, { useRef } from "react";
import Header from "../header";
import emailjs from "emailjs-com";
function ContactMe() {
  const formData = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkza1jq",
        "template_wixdosw",
        formData.current,
        "user_ycFwwHNWHpDwHFWE3gajU"
      )
      .then(() => alert("Your message has been sent"))
      .catch(() => alert("Sorry there is an error"));
  };
  return (
    <div className="text-white text-center pb-20">
      <Header Name="Contact Me" />
      <div>
        <form method="POST" ref={formData} onSubmit={sendEmail}>
          <div className="flex justify-between">
            <input
              name="name"
              type="text"
              className="w-5/12 bg-third focus:bg-secondary pl-6 py-2 text-white border-2 focus:outline-none"
              placeholder="Your name..."
              required
            />
            <input
              name="user-email"
              type="email"
              className="w-5/12 bg-third focus:bg-secondary pl-6 py-2 text-white border-2 focus:outline-none"
              placeholder="Your email..."
              required
            />
          </div>
          <div className="my-8">
            <input
              name="user_subject"
              type="text"
              className="w-full bg-third focus:bg-secondary pl-6 py-2 text-white border-2 focus:outline-none"
              placeholder="Subject..."
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="w-full text-white border-2 focus:outline-none bg-third  focus:bg-secondary p-3"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send"
            className="px-8 py-2 bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 font-bold mt-10"
          ></input>
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
