import React, { useEffect, useRef, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import ApiService from "../service/ApiService";
import dummyData from "../STORE/dummyData";

export default function PhotoFunc() {
  const [imageUrls, setImageUrls] = useState([]);
  const [toggleChecked, setToggleChecked] = useState(false);
  const apiServiceRef = useRef(null);

  const handleFetchPhotos = (nr) => {
    if (apiServiceRef.current) {
      apiServiceRef.current.fetchPhotosApi(nr);
    }
  };

  useEffect(() => {
    const loadDummyData = () => {
      const dummyUrls = dummyData.map((photo) => photo.url);

      setImageUrls(dummyUrls);
    };
    loadDummyData();
  }, []);

  return (
    <section
      title="Fetched Photos"
      className="grid grid-cols-2 max-w-3xl gap-4"
    >
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
      <ApiService
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        ref={apiServiceRef}
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
