import { VscLoading } from "react-icons/vsc";
import React, { useState } from "react";
import "./ImageLoader.css";

const ImageLoader = ({ src, alt = "", className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <div className="w-full min-h-full border-4 border-primary flex justify-center items-center">
          <VscLoading className="rotate text-lg" />
        </div>
      )}
      <img
        alt={alt || ""}
        className={`${'transition duration-500 ease-in-out'} ${loaded ? "is-img-loaded" : "is-img-loading"
          }`}
        onLoad={onLoad}
        src={src}
      />
    </>
  );
};

export default ImageLoader;
