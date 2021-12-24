import React, { useState } from 'react'
import './imageLoading.css'
import { VscLoading } from "react-icons/vsc";

const ImageLoader = ({ src, alt, style, className, width, height }) => {
  const loadedImages = {};
  const [loaded, setLoaded] = useState(loadedImages[src]);

  const onLoad = () => {
    loadedImages[src] = true;
    setLoaded(true);
  }

  return (
    <>
      {!loaded && (
        <div
          style={{ width: width, height: height, ...style }}
          className='flex justify-center items-center h-full bg-red'>
          <VscLoading className="rotate text-lg" />
        </div>
      )}
      <img
        onLoad={onLoad}
        alt={alt || ''}
        className={`transform transition duration-500 hover:scale-110 ${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
        src={src}
        width={width}
        height={height}
        style={style}
      />
    </>
  )
}

export default ImageLoader