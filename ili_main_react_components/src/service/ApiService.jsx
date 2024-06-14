import React, { forwardRef, useImperativeHandle } from "react";
import Photo from "../components/Photo";
const apiUrl = "https://picsum.photos/500/300";

const ApiService = forwardRef(
  ({ toggleChecked, imageUrls, setImageUrls }, ref) => {
    const fetchPhotosApi = async function (nr) {
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

    useImperativeHandle(ref, () => ({
      fetchPhotosApi,
    }));

    return (
      <>
        {imageUrls.map((url, index) => (
          <Photo
            key={index + 1}
            src={url}
            alt={`Image ${index + 1}`}
            style={{ filter: toggleChecked ? "grayscale(100%)" : "" }}
          />
        ))}
      </>
    );
  }
);

export default ApiService;
