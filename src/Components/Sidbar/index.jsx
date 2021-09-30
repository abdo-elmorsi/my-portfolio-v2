import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
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
    window.onresize = () => fun();
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
          bg-primary text-center text-white min-h-screen pt-0 px-5 md:pt-10 md:block transform transition duration-700 z-10 relative
          ${Menu ? "" : "-translate-x-full"}`}
        >
          <div
            onClick={() => setMenu(!Menu)}
            className="flex justify-center md:hidden bg-white py-5 text-2xl text-primary cursor-pointer"
          >
            <IoClose />
          </div>
          <div className="my-5 md:mt-0 w-4/12 mx-auto rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src={"./images/author-image.jpg"}
              alt=""
            />
          </div>
          <h2 className="text-3xl font-bold">Abdo Elmorsy</h2>
          <span className="text-xs">Front End Developer</span>
          <div className="mt-8 lg:mt-14 flex flex-col">
            <ul>
              {["About Me", "What i'm good at", "My Work", "Contact Us"].map(
                (ele, i) => {
                  return (
                    <li
                      key={i}
                      className={`py-5 border-t-2 ${
                        i === 3 ? "border-b-2" : ""
                      } border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer`}
                    >
                      {<a href={`#${ele.split(" ")[0]}`}>{ele}</a>}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="my-6">
            <ul className="flex justify-around">
              {icons.map((ele, index) => {
                return (
                  <li
                    key={`ele-${index}`}
                    className="flex items-center font-bold text-lg rounded-sm bg-primary p-2 hover:bg-white hover:text-primary cursor-pointer relative"
                    data-title={`${ele.title}`}
                  >
                    <a href={`${ele.link}`}>{ele.icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <footer className="border-secondary border-t-2 py-8">
            <p className="text-md">Copyright 2021 Abdo Ahmed</p>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Sidbar;
