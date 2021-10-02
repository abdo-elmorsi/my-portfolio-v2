import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import ImageLoader from "../body/Helpers/imageLoading";
import { AiOutlineArrowUp } from "react-icons/ai";
import Button from "../body/Helpers/Button";
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
  const [Visable, setVisable] = useState(false);
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

  const toggleVisibility = (_) => {
    window.pageYOffset >= 400 ? setVisable(true) : setVisable(false);
  };
  let ScrollToTop = (e = 0) => {
    window.scrollTo({
      top: e,
      behavoir: "smooth",
    });
  };

  const handleSroll = (e) => {
    fun();
    const id = e.target.innerHTML.split(" ")[0];
    const ele = document.getElementById(id);
    ScrollToTop(ele.offsetTop);
  };
  useEffect(() => {
    fun();
    window.addEventListener("resize", fun);
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {Visable && (
        <div
          className="fixed w-6 h-6 bottom-6 left-4 lg:bottom-8 lg:left-8 text-xl z-50"
          onClick={(_) => ScrollToTop()}
        >
          <Button msg={<AiOutlineArrowUp />} px={"3"}></Button>
        </div>
      )}

      <div
        onClick={() => setMenu(!Menu)}
        className="absolute top-0 left-0 z-0 flex justify-center md:hidden items-center w-12 h-12 bg-white text-primary cursor-pointer"
      >
        <FiMenu />
      </div>
      <div
        className={`ScrollBar  h-screen md:relative transform z-50 overflow-auto 
        ${Menu ? "w-full fixed" : "-translate-x-full absolute"}
        `}
      >
        <div
          className={`
          bg-primary text-center text-white min-h-screen md:pt-6 md:block transform transition duration-700 z-10 relative
          ${Menu ? "" : "-translate-x-full"}`}
        >
          <div
            onClick={() => setMenu(!Menu)}
            className="flex justify-center md:hidden bg-white py-5 text-2xl text-primary cursor-pointer"
          >
            <IoClose />
          </div>
          <div className="my-4 md:mt-0 w-4/12 mx-auto rounded-full overflow-hidden">
            <ImageLoader
              className="w-full h-full"
              src={"./images/author-image.jpg"}
              alt=""
            />
          </div>
          <h2 className="text-3xl font-bold">Abdo Elmorsy</h2>
          <span className="text-xs">Front End Developer</span>
          <div className="mt-8 lg:mt-10 flex flex-col">
            <ul>
              {["About Me", "What i'm good at", "My Work", "Contact Us"].map(
                (ele, i) => {
                  return (
                    <li
                      key={i}
                      onClick={(ele) => handleSroll(ele)}
                      className={`py-5 border-t-2 ${
                        i === 3 ? "border-b-2" : ""
                      } border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer`}
                    >
                      {ele}
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
                    onClick={() => window.location.assign(ele.link)}
                  >
                    {ele.icon}
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
