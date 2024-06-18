import React from "react";
import {Routes, Route} from "react-router-dom";
import TestPage from "./pages/Test/TestPage";
import HomePage1 from "./pages/Home/HomePage1/HomePage1";
import HomePage2 from "./pages/Home/HomePage2/HomePage2";
import WelcomePage from "./pages/Root/WelcomePage";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>} />
      <Route path="/home/home-page-1" element={<HomePage1/>} />
      <Route path="/home/home-page-2" element={<HomePage2/>} />
      <Route path="/test/test-page" element={<TestPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
