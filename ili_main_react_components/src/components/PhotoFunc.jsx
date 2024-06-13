import React, { useRef, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import FetchPhotos from "./FetchPhotos";

export default function PhotoFunc() {
    
  const [imageUrls, setImageUrls] = useState([]);
  const [toggleChecked, setToggleChecked] = useState(false);
  const fetchPhotosRef = useRef(null);

  const handleFetchPhotos = (nr) => {
    if (fetchPhotosRef.current) {
      fetchPhotosRef.current.fetchPhotos(nr);
    }
  };

  return (
    <section title="Fetched Photos" className="grid grid-cols-2 max-w-3xl gap-4">
      <ToggleSwitch
        onChange={() => setToggleChecked(!toggleChecked)}
        checked={toggleChecked}
        btnContent="Make photos grayscale"
      />
      <Button
        onClick={() => {
          setImageUrls([]);
          handleFetchPhotos(4);
        }}
        btnContent="Fetch New Photos"
        className="text-lg mt-3"
      />
      <FetchPhotos
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        ref={fetchPhotosRef}
        toggleChecked={toggleChecked}
      />
      <Button
        onClick={() => {
          handleFetchPhotos(4);
        }}
        btnContent="More Photos"
        className={` text-lg w-[767px]`}
      />
    </section>
  );
}
