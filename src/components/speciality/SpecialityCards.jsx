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
import { useSelector } from "react-redux";

const SpecialityCards = () => {
  const data = useSelector((state) => state.data.speciality);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  const icons = [
    FaHamburger,
    FaPizzaSlice,
    FaIceCream,
    FaCakeCandles,
    FaMartiniGlassCitrus,
    FaMugHot,
  ];
  return (
    <div className="flex flex-wrap gap-[1.5rem]">
      {data?.map((item) => {
        const { id, title, content } = item;
        return (
          <div className="speciality_box relative cursor-pointer overflow-hidden border-[0.1rem] border-solid border-[#0000004d] rounded-lg">
            <img
              className="w-full h-full object-cover absolute -top-full left-0"
              src={images[id - 1]}
              alt=""
            />
            <div className="content text-center bg-white p-[2rem] flex flex-col items-center">
              {icons[id - 1]({
                className: "text-[6rem] my-6 mx-0 text-[#ff3838]",
              })}
              <h3 className="text-[2.5rem] text-[#333] font-bold">{title}</h3>
              <p className="text-[#666] py-[1rem] px-0 text-[1.6rem]">
                {content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialityCards;
