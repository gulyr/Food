import React from "react";
import { useSelector } from "react-redux";
import img from "../../assets/images/r-1.jpg";

const Review = () => {
  const data = useSelector((state) => state.data.review);
  return (
    <div className="review container" id="review">
      <h1 className="heading">
        our customers <span>reviews</span>
      </h1>
      <div className="box-container">
        {data.map((item) => {
          const { id, img, title } = item;
          return (
            <div key={id} className="box">
              <img src={`../../assets/images/${img}`} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
