import React from "react";
import Img1 from "../../assets/images/img-1.webp";
import Img2 from "../../assets/images/img-2.jpg";
import Img3 from "../../assets/images/img-3.jpg";
import Img4 from "../../assets/images/img-4.jpg";
import Img5 from "../../assets/images/img-5.jpg";
import Img6 from "../../assets/images/img-6.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const Popular = () => {
  const data = useSelector((state) => state.data.popular);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  const icons = [FaStar, FaStar, FaStar, FaStar, FaRegStar];
  return (
    <div className="px-[9%] py-8" id="popular">
      <h1 className="text-center text-[3.5rem] p-[1rem] text-[#666] font-bold">
        most <span className="text-[#ff3838]">popular</span> food
      </h1>
      <div className="flex flex-wrap gap-[1.5rem]">
        {data?.map((item) => {
          const { id, price, title } = item;
          return (
            <div
              key={id}
              className="popular_box p-[2rem] relative text-center rounded-lg bg-white border-[0.1rem] border-solid border-[#0000004d] flex flex-col justify-center items-center"
            >
              <span className="absolute top-[3rem] left-[3rem] bg-[#ff3838] text-white text-[2rem] px-[1rem] py-[0.5rem] rounded-lg">
                ${price[0]} - ${price[1]}
              </span>
              <img
                className="h-[25rem] object-cover w-full rounded-lg"
                src={images[id - 1]}
                alt=""
              />
              <h3 className="text-[#333] text-[2.5rem] pt-[1rem] font-bold">
                {title}
              </h3>
              <div className="flex">
                {icons?.map((icon) => {
                  return icon({
                    className: "text-[#ffd700] text-[3rem] p-[0.5rem]",
                  });
                })}
              </div>
              <a href="#" className="btn">
                order now
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
