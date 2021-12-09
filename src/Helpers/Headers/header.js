import React from 'react';
import { motion } from 'framer-motion'
import "./Header.css";
import { slideDown, slideUp } from "../../Helpers/Animation";

function Header({ Name, Desc }) {
  return (
    <header className="my-10">
      <motion.h2
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold">{Name && Name}</motion.h2>
      <div className="w-10 mx-auto mb-5 mt-3 border-primary border-2 transition-all duration-500 ease-in-out"></div>
      {Desc && <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        transition={{
          ease: 'easeOut',
          duration: 0.6,
          delay: 0.8,
        }}

        className="italic">{Desc}</motion.p>}
    </header>
  );
}
export default Header;
