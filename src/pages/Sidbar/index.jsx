import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import ImageLoader from "../../Helpers/imageLoading";
import { NavLink } from "react-router-dom";
import "./style.css";
import {
    FaFacebookF,
    FaGithub,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { slideDown } from "../../Helpers/Animation";
function Sidbar() {
    const [Menu, setMenu] = useState(false);
    let fun = () => (window.innerWidth < 768 ? setMenu(false) : setMenu(true));
    let icons = [
        {
            link: "https://www.facebook.com/profile.php?id=100011155869257",
            title: "facebook",
            icon: <FaFacebookF />,
        },
        {
            link: "https://github.com/Abdo2711-coder",
            title: "github",
            icon: <FaGithub />,
        },
        {
            link: "https://twitter.com/AbdoMoursy?s=09",
            title: "twitter",
            icon: <FaTwitter />,
        },
        {
            link: "https://www.linkedin.com/in/abdelrahman-ahmed-163263205",
            title: "linkedin",
            icon: <FaLinkedinIn />,
        },
        {
            link: "https://wa.me/201019084872",
            title: "whatsApp",
            icon: <FaWhatsapp />,
        },
    ];

    useEffect(() => {
        fun();
    }, []);
    return (
        <>
            <div
                onClick={() => setMenu(!Menu)}
                className="absolute top-0 left-0 z-0 flex justify-center md:hidden items-center w-12 h-12 bg-white text-primary cursor-pointer"
            >
                <FiMenu />
            </div>
            <div
                className={`ScrollBar h-screen md:relative transform z-50 overflow-auto
        ${Menu ? "w-full fixed" : "-translate-x-full absolute"}
        `}
            >
                <div
                    className={`
          bg-primary text-center text-white min-h-screen md:pt-8 md:block transform transition duration-500 ease-out z-10 
          ${Menu ? "" : "-translate-x-full"}`}
                >
                    <div
                        onClick={() => setMenu(!Menu)}
                        className="flex justify-center md:hidden bg-white py-5 text-2xl text-primary cursor-pointer"
                    >
                        <IoClose />
                    </div>

                    <div className="mb-2 w-4/12 mx-auto rounded-full overflow-hidden">
                        <ImageLoader
                            className="w-full h-full"
                            src={"./images/author-image.jpg"}
                            alt=""
                        />
                    </div>
                    <h2 className="text-2xl font-bold">Abdo Elmorsy</h2>
                    <span className="text-xs">Front End Developer</span>
                    <p className="text-xs">React JS</p>
                    <div className="mt-12 lg:mt-5 flex flex-col">
                        <ul>
                            {[
                                "About Me",
                                "My Work",
                                "My Skills",
                                "What i'm good at",
                                "Contact Us",
                            ].map((ele, i) => {
                                return (
                                    <NavLink
                                        exact
                                        key={i}
                                        to={
                                            i === 0
                                                ? "/"
                                                : i === 2
                                                ? `${ele
                                                      .split(" ")
                                                      .slice(0, 1)
                                                      .toString()
                                                      .toLowerCase()}sk`
                                                : ele
                                                      .split(" ")
                                                      .slice(0, 1)
                                                      .toString()
                                                      .toLowerCase()
                                        }
                                    >
                                        <motion.li
                                            variants={slideDown}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                ease: "easeInOut",
                                                duration: 0.6,
                                                delay: i * 0.4,
                                            }}
                                            onClick={() => fun()}
                                            className={`py-4 border-t-2 ${
                                                i === 4 ? "border-b-2" : ""
                                            }  text-pase hover:bg-white hover:text-primary cursor-pointer`}
                                        >
                                            {ele}
                                        </motion.li>
                                    </NavLink>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="mt-8">
                        <ul className="flex justify-around px-2 lg:px-8">
                            {icons.map((ele, i) => {
                                return (
                                    <motion.li
                                        variants={slideDown}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.6,
                                            delay: (i + 6 - 0.2) * 0.4,
                                        }}
                                        key={`ele-${i}`}
                                        className="flex items-center rounded-full bg-primary p-2 hover:bg-white hover:text-primary cursor-pointer relative"
                                        data-title={`${ele.title}`}
                                    >
                                        <a href={ele.link} target={`_blank`}>
                                            {ele.icon}
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidbar;
