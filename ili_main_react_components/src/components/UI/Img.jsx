import React, { useState } from "react";
import { Fade } from "transitions-kit";

export default function Image({ inView, imgSrc, imgAltTxt, className, style }) {
  const [status, setStatus] = useState("loading");

  return (
    <>
      <Fade appear={false} in={status === "loading"} unmountOnExit>
        <div className="flex justify-center content-center border-4 border-gray-400 bg-gray-300 text-black" style={{width: 380, height:250}}>loading...</div>
      </Fade>
      
      {inView && (
        <Fade in={status === "loaded"}>
          <img
            className={` ${className}`}
            src={imgSrc}
            alt={imgAltTxt}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
            style={style}
          />
        </Fade>
      )}
      {status === "failed" && <div>error loading image</div>}

      <Fade in={status === "failed"} mountOnEnter unmountOnExit>
        <div>error</div>
      </Fade>
    </>
  );
}
