import React from "react";
import Navbar from "../../components/UI/Navbar";

const NotFound = () => {
  return (
    <main className="grid justify-center">
      <Navbar />
      <h1 className="border-red border-2 bg-red-700 p-10 text-4xl">
        {" "}
        Page not found... 404
      </h1>
    </main>
  );
};

export default NotFound;
