import React from "react";
import Home from "./components/home/Home";
import "./assets/css/style.css";
import Header from "./components/header/Header";
import Speciality from "./components/speciality/Speciality";
import Popular from "./components/popular/Popular";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Speciality />
      <Popular />
    </div>
  );
};

export default App;
