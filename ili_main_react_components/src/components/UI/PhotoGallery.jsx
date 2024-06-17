import React, { useRef, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import PhotoService from "../PhotoService";

export default function PhotoGallery() {
    
  const [imageUrls, setImageUrls] = useState([]);
  const [toggleChecked, setToggleChecked] = useState(false);
  const fetchPhotosRef = useRef(null);

  const handleFetchPhotos = (nr) => {
    if (fetchPhotosRef.current) {
      fetchPhotosRef.current.fetchPhotos(nr);
    }
  };

  const handleFetchNew = () => {
    setImageUrls([]);
    handleFetchPhotos(4);
  }

  const handleFetchMore = () => {
    handleFetchPhotos(4);
  }

  return (
    <section title="Fetched Photos" className="grid grid-cols-2 max-w-3xl gap-4">
      <ToggleSwitch
        onChange={() => setToggleChecked(!toggleChecked)}
        checked={toggleChecked}
        btnContent="Make photos grayscale"
      />
      <Button
        onClick={handleFetchNew}
        children="Fetch New Photos"
        className="text-lg mt-3"
      />
      <PhotoService
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        ref={fetchPhotosRef}
        toggleChecked={toggleChecked}
      />
      <Button
        onClick={handleFetchMore}
        children="More Photos"
        className={` text-lg w-[767px]`}
      />
    </section>
  );
}
