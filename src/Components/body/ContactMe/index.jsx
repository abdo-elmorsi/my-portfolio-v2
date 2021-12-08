import React, { useRef } from "react";
import Header from "../Helpers/Headers/header";
import Button from "../Helpers/Button";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
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
        <div id="Contact" className="text-white text-center">
            <Header Name="Contact Me" />
            <div>
                <form method="POST" ref={formData} onSubmit={sendEmail}>
                    <div className="flex justify-between">
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            className="w-5/12 bg-third focus:bg-secondary pl-2 text-white border-2 focus:outline-none animation duration-500 ease-in-out"
                            placeholder="Your name..."
                            required
                        />
                        <input
                            type="email"
                            name="user-email"
                            autoComplete="on"
                            className="w-5/12 bg-third focus:bg-secondary pl-2 py-2 text-white border-2 focus:outline-none animation duration-500 ease-in-out"
                            placeholder="Your email..."
                            required
                        />
                    </div>
                    <div className="my-6">
                        <input
                            type="text"
                            name="user_subject"
                            autoComplete="off"
                            className="w-full bg-third focus:bg-secondary pl-2 py-2 text-white border-2 focus:outline-none animation duration-500 ease-in-out"
                            placeholder="Subject..."
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows="6"
                            className="w-full text-white border-2 focus:outline-none bg-third  focus:bg-secondary p-3 mb-5 animation duration-500 ease-in-out"
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
