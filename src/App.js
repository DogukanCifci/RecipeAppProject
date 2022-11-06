import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Details from "./pages/details/Details.jsx";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [foodList, setFoodList] = useState([]);
  const [food, setFood] = useState("");
  const [ögün, setOgün] = useState("breakfast");
  return (
    <>
      <BrowserRouter>
        <Navbar food={food} setFood={setFood} />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                ögün={ögün}
                setOgün={setOgün}
                food={food}
                setFood={setFood}
                setFoodList={setFoodList}
                foodList={foodList}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Login />} />

          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
