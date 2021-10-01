import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./style.css";
function Works() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("js/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.Works));
  }, []);
  const WorksItems = Data.map((e) => {
    return (
      <div
        className="isotope-item w-full lg:w-5/12 mb-5"
        data-type="Games"
        key={e.id}
      >
        <figure className="snip1321">
          <img src={e.Src} alt={`project-${e.id}`} className="w-full" />
          <figcaption>
            <div className="flex justify-around px-5">
              <span className=" cursor-pointer">
                <FiExternalLink />
              </span>
              <span className=" cursor-pointer">
                <FaGithub />
              </span>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  });
  return <div className="flex flex-wrap justify-around">{WorksItems}</div>;
}

export default Works;
