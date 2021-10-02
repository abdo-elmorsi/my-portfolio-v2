import React, { useRef } from "react";
import Header from "../Helpers/Headers/header";
import Button from "../Helpers/Button";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
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
      .then(() => {
        toast.success("Your message has been sent", {
          style: { fontSize: "20px" },
        });
      })
      .catch(() => {
        toast.error("Sorry there is an error", {
          style: { fontSize: "20px" },
        });
      });
    formData.current.reset();
  };
  return (
    <div id="Contact" className="text-white text-center pb-20">
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
              className="w-full text-white border-2 focus:outline-none bg-third  focus:bg-secondary p-3 mb-5"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <Button msg={"Send"} px={"6"} />
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
