import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Popular = () => {
  return (
    <div className="popular container" id="popular">
      <h1 className="heading">
        most <span>popular</span> food
      </h1>
      <div className="box-container">
        <div className="box">
          <span className="price">$5 - $20</span>
          <img src="images/img-1.webp" alt="" />
          <h3>tasty burger</h3>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
          </div>
          <a href="#" className="btn">
            order now
          </a>
        </div>
        <div class="box">
          <span class="price">$5 - $20</span>
          <img src="images/img-2.jpg" alt="" />
          <h3>tasty cakes</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">
            order now
          </a>
        </div>
        <div class="box">
          <span class="price">$5 - $20</span>
          <img src="images/img-3.jpg" alt="" />
          <h3>tasty sweets</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">
            order now
          </a>
        </div>
        <div class="box">
          <span class="price">$5 - $20</span>
          <img src="images/img-4.jpg" alt="" />
          <h3>tasty cupcakes</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">
            order now
          </a>
        </div>
        <div class="box">
          <span class="price">$5 - $20</span>
          <img src="images/img-5.jpg" alt="" />
          <h3>cold drinks</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">
            order now
          </a>
        </div>
        <div class="box">
          <span class="price">$5 - $20</span>
          <img src="images/img-6.jpg" alt="" />
          <h3>cold ice-cream</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">
            order now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popular;
