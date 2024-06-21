import React from "react";
import Header from "../components/Header";
import ApiService from "../service/ApiService";

const HomeLayout = () => {
  return (
    <main className="grid justify-center">
      <Header> Photo Fetcher </Header>
      <ApiService />
    </main>
  );
};

export default HomeLayout;
