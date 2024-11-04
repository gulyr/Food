import React from "react";
import { useSelector } from "react-redux";
import Img1 from "../../assets/images/r-1.jpg";
import Img2 from "../../assets/images/r-2.png";
import Img3 from "../../assets/images/r-3.png";
import { FaStar, FaRegStar } from "react-icons/fa";

const Review = () => {
  const data = useSelector((state) => state.data.review);
  const images = [Img1, Img2, Img3];
  const icons = [FaStar, FaStar, FaStar, FaStar, FaRegStar];
  return (
    <div className="px-[9%] py-8" id="review">
      <h1 className="text-center text-[3.5rem] p-[1rem] text-[#666] font-bold">
        our customers <span className="text-[#ff3838]">reviews</span>
      </h1>
      <div className="flex flex-wrap gap-6">
        {data?.map((item) => {
          const { id, person, title } = item;
          return (
            <div
              key={id}
              className="review_box text-center border-[1rem] border-solid border-white bg-[#333] p-8 mt-24 rounded-lg flex flex-col justify-between items-center"
            >
              <img
                src={images[id - 1]}
                alt=""
                className="w-48 h-48 object-cover rounded-full mt-[-8rem] border-solid border-[1rem] border-white"
              />
              <h3 className="text-white px-0 py-2 text-[2.5rem] font-bold">
                {person}
              </h3>
              <div className="flex">
                {icons?.map((icon) => {
                  return icon({
                    className: "text-5xl text-[#ff3838] py-2 px-0",
                  });
                })}
              </div>
              <p className="text-white text-2xl px-0 py-4">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
