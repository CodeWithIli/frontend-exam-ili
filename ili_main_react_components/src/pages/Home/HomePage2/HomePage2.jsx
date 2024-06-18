import React from "react";
import Header from "../../../components/Header";
import Navbar from "../../../components/UI/Navbar";
import PhotoGallery from "../../../components/PhotoGallery";

function HomePage2() {

  return (
    <main className="grid justify-center">
        <Navbar/>
        <Header> Photo Fetcher - v2.0 </Header>
        <PhotoGallery />
    </main>
  );
}

export default HomePage2;
