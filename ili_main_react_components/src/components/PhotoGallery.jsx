import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import ToggleSwitch from "./UI/ToggleSwitch";
import Button from "./UI/Button";
import DummyData from "../store/dummyData";
const apiUrl = "https://picsum.photos/500/300";

const PhotoGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [toggleChecked, setToggleChecked] = useState(false);

  const loadDummyData = () => {
    const dummyUrls = DummyData.map((photo) => photo.url);

    setImageUrls(dummyUrls);
  };

  useEffect(() => {
    loadDummyData();
  }, []);

  const fetchPhotos = async function (nr) {
    let urls = Array(nr).fill(apiUrl);

    try {
      const fetchedImageUrls = await Promise.all(
        urls.map(async (url) => {
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error("Bad network response!");
          }
          return res.url;
        })
      );
      setImageUrls((prevUrls) => [...prevUrls, ...fetchedImageUrls]);
    } catch (error) {
      console.error("There was an error fetching photos", error);
    }
  };

  const handleFetchNew = () => {
    setImageUrls([]);
    fetchPhotos(4);
  };

  const handleFetchMore = () => {
    fetchPhotos(4);
  };

  return (
    <section
      title="Fetched Photos"
      className="grid grid-cols-2 max-w-3xl gap-4"
    >
      <ToggleSwitch
        onChange={() => setToggleChecked(!toggleChecked)}
        checked={toggleChecked}
      >
        Make photos grayscale
      </ToggleSwitch>
      <Button onClick={handleFetchNew} className="text-lg mt-3">
        Fetch New Photos
      </Button>
      {imageUrls.map((url, index) => (
        <Photo
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          style={{ filter: toggleChecked ? "grayscale(100%)" : "" }}
        />
      ))}
      <Button onClick={handleFetchMore} className={` text-lg w-[960px]`}>
        More Photos
      </Button>
    </section>
  );
};

export default PhotoGallery;
