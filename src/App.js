import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
// import Home from "../pages/home/Home";
// import About from "../pages/about/About";
// import Login from "../pages/login/Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
