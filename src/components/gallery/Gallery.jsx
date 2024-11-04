import React from "react";
import Img1 from "../../assets/images/g-1.jpg";
import Img2 from "../../assets/images/g-2.webp";
import Img3 from "../../assets/images/g-3.webp";
import Img4 from "../../assets/images/g-4.jpg";
import Img5 from "../../assets/images/g-5.webp";
import Img6 from "../../assets/images/g-6.jpg";
import Img7 from "../../assets/images/g-7.jpg";
import Img8 from "../../assets/images/g-8.jpg";
import Img9 from "../../assets/images/g-9.jpg";
import { useSelector } from "react-redux";

const Gallery = () => {
  const data = useSelector((state) => state.data.gallery);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];
  return (
    <div className="px-[9%] py-8" id="gallery">
      <h1 className="text-center text-[3.5rem] p-[1rem] text-[#666] font-bold">
        our food <span className="text-[#ff3838]">gallery</span>
      </h1>
      <div className="gallery_box_container flex flex-wrap gap-6">
        {data?.map((item) => {
          const { id, title, content } = item;
          return (
            <div
              key={id}
              className="box relative overflow-hidden border-[1rem] border-solid border-white rounded-lg h-[25rem]"
            >
              <img
                src={images[id - 1]}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="content absolute -top-full left-0  w-full h-full bg-[#ffffffe6] text-center pt-20 py-8 pb-8">
                <h3 className="text-[#333] text-[2.5rem] font-bold">{title}</h3>
                <p className="text-[#666] text-[1.5rem] px-0 py-[1rem]">
                  {content}
                </p>
                <a href="#" className="btn">
                  order now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
