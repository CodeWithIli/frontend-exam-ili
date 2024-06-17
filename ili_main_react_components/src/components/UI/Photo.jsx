import React from "react";

export const Photo = ({ className, src, alt, style }) => {
  return (
    <img style={style} className={className} src={src} alt={alt} />
  );
};

export default Photo;