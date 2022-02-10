import React, { useRef, useState } from "react";
import Header from "../../../Components/Headers";
import Button from "../../../Components/Button";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideDown } from "../../../Helpers/Animation";
function ContactMe() {
    const [loading, setloading] = useState(false);
    const formData = useRef();
    const sendEmail = (e) => {
        setloading(true);
        e.preventDefault();
        emailjs
            .sendForm(
                "service_bkza1jq",
                "template_wixdosw",
                formData.current,
                "user_ycFwwHNWHpDwHFWE3gajU"
            )
            .then((res) => {
                toast.success("Your message has been sent", {
                    style: { fontSize: "20px" },
                });
                formData.current.reset();
                setloading(false);
            })
            .catch((er) => {
                toast.error("Sorry there is an error", {
                    style: { fontSize: "20px" },
                });
                setloading(false);
            });
    };
    return (
        <div id="Contact" className="text-white text-center">
            <Header Name="Contact Me" />
            <div>
                <form method="POST" ref={formData} onSubmit={sendEmail}>
                    <motion.div
                        variants={slideDown}
                        animate="visible"
                        initial="hidden"
                        transition={{
                            ease: "easeInOut",
                            duration: 0.6,
                        }}
                        className="flex justify-between"
                    >
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
                    </motion.div>
                    <motion.div
                        variants={slideDown}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeInOut",
                            duration: 0.6,
                            delay: 0.4,
                        }}
                        className="my-6"
                    >
                        <input
                            type="text"
                            name="user_subject"
                            autoComplete="off"
                            className="w-full bg-third focus:bg-secondary pl-2 py-2 text-white border-2 focus:outline-none animation duration-500 ease-in-out"
                            placeholder="Subject..."
                            required
                        />
                    </motion.div>
                    <motion.div
                        variants={slideDown}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeInOut",
                            duration: 0.6,
                            delay: 0.8,
                        }}
                    >
                        <textarea
                            name="message"
                            rows="6"
                            className="w-full text-white border-2 focus:outline-none bg-third  focus:bg-secondary p-3 mb-5 animation duration-500 ease-in-out"
                            placeholder="Your message..."
                            required
                        ></textarea>
                    </motion.div>
                    <motion.div
                        variants={slideDown}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeInOut",
                            duration: 0.6,
                            delay: 1.2,
                        }}
                    >
                        <Button
                            msg={`${loading ? "sending..." : "Send"}`}
                            px={"6"}
                        />
                    </motion.div>
                </form>
            </div>
        </div>
    );
}
export default ContactMe;
