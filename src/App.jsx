import React from "react";
import Home from "./components/home/Home";
import "./assets/css/style.css";
import Header from "./components/header/Header";
import Speciality from "./components/speciality/Speciality";
import Popular from "./components/popular/Popular";
import Steps from "./components/steps/Steps";
import Gallery from "./components/gallery/Gallery";
import Review from "./components/review/Review";
import Order from "./components/order/Order";
import Footer from "./components/footer/Footer";
import Img1 from "./assets/images/r-1.jpg";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Speciality />
      <Popular />
      <Steps />
      <Gallery />
      <Review />
      <Order />
      <Footer />
    </div>
  );
};

export default App;
