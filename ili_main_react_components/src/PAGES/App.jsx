import React, { useState, useEffect } from "react";
import ToggleSwitch from "../components/UI/ToggleSwitch";
import Button from "../components/UI/Button";
import { AsyncImage } from "./components/UI/AsyncImage";

function App() {

  const [imageUrls, setImageUrls] = useState([]);
  const [toggleChecked, setToggleChecked] = useState(false);

  useEffect(() => {
    fetchPhotos([apiUrl, apiUrl, apiUrl, apiUrl]);
    setImageUrls([]);
  }, []);

  const fetchPhotos = function (urls) {
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok!");
            }
            return response.url;
          })
          .catch((error) => {
            console.error("There was an error loading image!", error);
          })
      )
    ).then((fetchedImageUrls) => {
      setImageUrls(prevUrl => [...prevUrl, ...fetchedImageUrls]);
    });
  };

  const apiUrl = "https://picsum.photos/500/300";

  return (
    <div className="grid justify-center">
      <div className="p-4">
        <h1 className="text-3xl">Photo Fetcher</h1>
        <div className="grid grid-cols-2 max-w-3xl gap-80">
          <ToggleSwitch onChange={() => setToggleChecked(!toggleChecked)} checked={toggleChecked} btnContent="Make photos grayscale" className="pt-8" />
          <Button
            onClick={() => {
              setImageUrls([]);
              fetchPhotos([apiUrl, apiUrl, apiUrl, apiUrl]);
            }}
            btnContent="Fetch New Photos"
            className="pt-4 text-lg"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 pt-6 max-w-3xl">
            {
              imageUrls.map((url, index) => (
                <AsyncImage key={index} style={{filter: toggleChecked ? "grayscale(100%)" : false}} className={`rounded-sm`} imgSrc={url} imgAltTxt={`Image ${index + 1}`} />
              ))
            } 
            
        </div>
        <Button onClick={() => {
          fetchPhotos([apiUrl, apiUrl, apiUrl, apiUrl]);
        }} btnContent='More Photos' className={`pt-3 text-lg`}/>
      </div>
    </div>
  );
}

export default App;
