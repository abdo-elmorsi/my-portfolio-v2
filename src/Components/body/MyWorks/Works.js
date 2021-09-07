import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
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
          <img src={e.Src} alt="sq-sample26" />
          <figcaption>
            <a href={e.Src} data-lightbox="image-1" data-title="Caption">
              <FiSearch />
            </a>
            <h4>{e.Name}</h4>
            <span>{e.Desc}</span>
          </figcaption>
        </figure>
      </div>
    );
  });
  return <div className="flex flex-wrap justify-around">{WorksItems}</div>;
}

export default Works;
