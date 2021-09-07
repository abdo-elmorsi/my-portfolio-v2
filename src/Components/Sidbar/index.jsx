import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
function Sidbar() {
  const [Menu, setMenu] = useState(false);
  let fun = () => (window.innerWidth < 768 ? setMenu(false) : setMenu(true));
  let icons = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaWhatsapp /> },
  ];
  useEffect(() => {
    fun();
    window.onresize = () => fun();
  }, []);
  return (
    <div className="h-screen overflow-y-auto absolute w-full md:relative">
      <div
        onClick={() => setMenu(!Menu)}
        className="absolute top-0 left-0 z-0 flex justify-center md:hidden items-center w-12 h-12 bg-white text-primary cursor-pointer"
      >
        <FiMenu />
      </div>
      <div
        className={`bg-primary text-center text-white min-h-screen pt-0 md:pt-10 md:block ${
          Menu ? "" : "transform -translate-x-full opacity-0"
        } transition duration-700 z-10 relative`}
      >
        <div
          onClick={() => setMenu(!Menu)}
          className="flex justify-center md:hidden bg-white py-5 text-2xl text-primary cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="mb-8 mt-10 md:mt-0 w-4/12 mx-auto rounded-full overflow-hidden">
          <img
            className="w-full h-full"
            src={"./images/author-image.jpg"}
            alt=""
          />
        </div>
        <h2 className="text-3xl font-bold">Abdo Elmorsy</h2>
        <span className="text-xs">Front End Developer</span>
        <ul className="px-5 mt-8 lg:mt-16 flex flex-col">
          {["About Me", "What i'm good at", "My Work", "Contact Us"].map(
            (ele, index) => {
              return (
                <li
                  key={`ele-${index}`}
                  className={`py-5 border-t-2 ${
                    index === 3 ? "border-b-2" : ""
                  } border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer`}
                >
                  {ele}
                </li>
              );
            }
          )}
        </ul>
        <ul className="px-10 my-7 flex justify-between">
          {icons.map((ele, index) => {
            return (
              <li
                key={`ele-${index}`}
                className="flex items-center font-bold text-pase rounded-sm bg-primary p-3 hover:bg-white hover:text-primary cursor-pointer"
              >
                {ele.icon}
              </li>
            );
          })}
        </ul>
        <footer className="border-secondary border-t-2 py-10 mb-30">
          <p className="text-md">Copyright 2021 Abdo Ahmed</p>
        </footer>
      </div>
    </div>
  );
}
export default Sidbar;
