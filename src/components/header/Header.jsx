import React from "react";
import { FaUtensils } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <a href="#" class="logo">
        <FaUtensils />
        food
      </a>
      <div id="menu-bar">
        <FaBars />
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
