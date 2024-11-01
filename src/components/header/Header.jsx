import React from "react";
import { FaBars, FaUtensils } from "react-icons/fa";
// import { useSelector } from "react-redux";
const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <FaUtensils className="icon" />
        {/* <i className="fa-solid fa-utensils"></i> */}
        food
      </a>
      <div id="menu-bar">
        <FaBars />
        {/* <i className="fa-solid fa-bars"></i> */}
      </div>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#speciality">speciality</a>
        <a href="#popular">popular</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#order">order</a>
      </nav>
    </header>
  );
};

export default Header;
