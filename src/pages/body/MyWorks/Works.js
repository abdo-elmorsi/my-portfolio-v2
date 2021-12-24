import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion'
import { slideDown } from "../../../Helpers/Animation";
import "./style.css";
import { Link } from "react-router-dom";
import ImageLoader from "../../../Helpers/imageLoading";
function Works() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("js/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.Works));
  }, []);
  return (
    <div className="flex flex-wrap justify-around">
      {Data.map((e, i) => (
        <motion.div
          variants={slideDown}
          initial="hidden"
          animate="visible"
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
            delay: i * 0.4,
          }}
          className="isotope-item bg-primary w-full lg:w-5/12 mb-5"
          key={e.id}
        >
          <figure className="snip1321 h-full">
            <ImageLoader src={e.Src} alt={`project-${e.id}`} className="w-full" />
            <figcaption>
              <div className="flex justify-around">
                {e.link.startsWith("http") ?
                  <a href={e.link} target={`_blank`} className="cursor-pointer">
                    <FiExternalLink />
                  </a>
                  : <Link to={e.link} className="cursor-pointer">
                    <FiExternalLink />
                  </Link>
                }

                {e.github.startsWith("http") ?
                  <a href={e.github} target={`_blank`} className="cursor-pointer">
                    <FaGithub />
                  </a>
                  :
                  <Link to={e.link} className="cursor-pointer">
                    <FiExternalLink />
                  </Link>
                }
              </div>
            </figcaption>
          </figure>
        </motion.div>
      ))
      }
    </div >

  );
}

export default Works;
