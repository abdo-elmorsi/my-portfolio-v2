import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import ImageLoader from "../body/Helpers/imageLoading";
import { Link } from "react-router-dom";
import "./style.css";
import {
    FaFacebookF,
    FaGithub,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
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
          bg-primary text-center text-white min-h-screen md:pt-4 md:block transform transition duration-700 z-10 relative
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
                                    <Link
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
                                        <li
                                            className={`py-4 border-t-2 ${
                                                i === 4 ? "border-b-2" : ""
                                            } border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer`}
                                        >
                                            {ele}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="my-4">
                        <ul className="flex justify-around">
                            {icons.map((ele, index) => {
                                return (
                                    <li
                                        key={`ele-${index}`}
                                        className="flex items-center font-bold text-lg rounded-sm bg-primary p-2 hover:bg-white hover:text-primary cursor-pointer relative"
                                        data-title={`${ele.title}`}
                                        // onClick={() =>
                                        //     window.location.assign(ele.link)
                                        // }
                                    >
                                        <a href={ele.link} target={`_blank`}>
                                            {ele.icon}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <footer className="border-secondary border-t-2 py-5">
                        <p className="text-md">Copyright 2021 Abdo Ahmed</p>
                    </footer>
                </div>
            </div>
        </>
    );
}
export default Sidbar;
