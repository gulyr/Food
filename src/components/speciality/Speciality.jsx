import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaIceCream } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaMugHot } from "react-icons/fa";
import Img1 from "../../assets/images/1.png";
import Img2 from "../../assets/images/2.jpg";
import Img3 from "../../assets/images/3.jpg";
import Img4 from "../../assets/images/4.jpg";
import Img5 from "../../assets/images/5.jpg";
import Img6 from "../../assets/images/6.jpg";

const Speciality = () => {
  return (
    <div className="speciality container" id="speciality">
      <h1 className="heading">
        our <span>speciality</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img className="image" src={Img1} alt="" />
          <div className="content">
            <FaHamburger className="icon" />
            {/* <i class="fa-solid fa-burger"></i> */}
            <h3>tasty burger</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis consequatur ipsa sunt esse assumenda odio ullam
              porro hic culpa.
            </p>
          </div>
        </div>
        <div className="box">
          <img className="image" src={Img2} alt="" />
          <div className="content">
            <FaPizzaSlice className="icon" />
            <h3>tasty pizza</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis consequatur ipsa sunt esse assumenda odio ullam
              porro hic culpa.
            </p>
          </div>
        </div>
        <div className="box">
          <img className="image" src={Img3} alt="" />
          <div className="content">
            <FaIceCream className="icon" />
            <h3>cold ice-cream</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis consequatur ipsa sunt esse assumenda odio ullam
              porro hic culpa.
            </p>
          </div>
        </div>
        <div className="box">
          <img className="image" src={Img4} alt="" />
          <div className="content">
            <FaMartiniGlassCitrus className="icon" />
            <h3>cold drinks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis consequatur ipsa sunt esse assumenda odio ullam
              porro hic culpa.
            </p>
          </div>
        </div>
        <div className="box">
          <img className="image" src={Img5} alt="" />
          <div className="content">
            <FaCakeCandles className="icon" />
            <h3>tasty sweets</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis consequatur ipsa sunt esse assumenda odio ullam
              porro hic culpa.
            </p>
          </div>
        </div>
        <div className="box">
          <img className="image" src={Img6} alt="" />
          <div className="content">
            <FaMugHot className="icon" />
            <h3>Healthy breakfast</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis consequatur ipsa sunt esse assumenda odio ullam
              porro hic culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
