import React from "react";
import Header from "../components/UI/Header";
import PhotoGallery from "../components/UI/PhotoGallery";

function HomePage() {

  return (
    <main className="grid justify-center">
        <Header />
        <PhotoGallery />
    </main>
  );
}

export default HomePage;
