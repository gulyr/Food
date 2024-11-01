import React from "react";
import Img1 from "../../assets/images/step-1.jpg";
import Img2 from "../../assets/images/step-2.jpg";
import Img3 from "../../assets/images/step-3.jpg";
import Img4 from "../../assets/images/step-4.jpg";
const Steps = () => {
  return (
    <div className="steps">
      <div className="box">
        <img src={Img1} alt="" />
        <h3>choose your favorite food</h3>
      </div>
      <div className="box">
        <img src={Img2} alt="" />
        <h3>free and fast delivery</h3>
      </div>
      <div className="box">
        <img src={Img3} alt="" />
        <h3>easy payment methods</h3>
      </div>
      <div className="box">
        <img src={Img4} alt="" />
        <h3>and finally, enjoy your food</h3>
      </div>
    </div>
  );
};

export default Steps;
