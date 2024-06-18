import React from "react";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/test" element={<TestPage/>} />
    </Routes>
  );
}

export default App;
