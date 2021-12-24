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
import { slideUp, animateList } from "../../Helpers/Animation";
import { motion } from "framer-motion";
import { ScrollReveal } from "../../Helpers/Animation";

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
            link: "https://www.linkedin.com/in/abdelrahman-elmorsy-163263205",
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
                    <p className="text-xs mt-1">
                        {"React JS  "}
                        <a
                            className="px-2"
                            title="Download Cv"
                            href="/Resume.pdf"
                            download
                        >
                            <svg
                                width={14}
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="download"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="inline svg-inline--fa fa-download fa-w-16 fa-2x"
                            >
                                <path
                                    fill="currentColor"
                                    d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h99.4L87 263.6c-25.2-25.2-7.3-68.3 28.3-68.3H168V40c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v155.3h52.7c35.6 0 53.4 43.1 28.3 68.3L368.6 320H468c24.3 0 44 19.7 44 44zm-261.7 17.7c3.1 3.1 8.2 3.1 11.3 0L402.3 241c5-5 1.5-13.7-5.7-13.7H312V40c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8v187.3h-84.7c-7.1 0-10.7 8.6-5.7 13.7l140.7 140.7zM480 364c0-6.6-5.4-12-12-12H336.6l-52.3 52.3c-15.6 15.6-41 15.6-56.6 0L175.4 352H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"
                                    className=""
                                ></path>
                            </svg>
                        </a>
                    </p>
                    <div className="mt-12 lg:mt-5 flex flex-col">
                        <ScrollReveal variants={animateList}>
                            <ul>
                                {[
                                    "About Me",
                                    "My Works",
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
                                                variants={slideUp}
                                                transition={{
                                                    delay: (i - 0.8) * 0.5,
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
                        </ScrollReveal>
                    </div>
                    <div className="mt-8">
                        <ScrollReveal variants={animateList}>
                            <ul className="flex justify-around px-2 lg:px-8">
                                {icons.map((ele, i) => {
                                    return (
                                        <motion.li
                                            key={i}
                                            variants={slideUp}
                                            transition={{
                                                delay: (i + 4.8 - 0.4) * 0.4,
                                            }}
                                            className="flex items-center rounded-full bg-primary p-2 hover:bg-white hover:text-primary cursor-pointer relative"
                                            data-title={`${ele.title}`}
                                        >
                                            <a
                                                href={ele.link}
                                                target={`_blank`}
                                            >
                                                {ele.icon}
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidbar;
