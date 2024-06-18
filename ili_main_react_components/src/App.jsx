import React from "react";
import Header from "./components/Header";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
  return (
    <main className="grid justify-center">
      <Header>Photo Fetcher</Header>
      <PhotoGallery />
    </main>
  );
};

export default App;
