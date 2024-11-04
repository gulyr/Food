import React from "react";
import Img1 from "../../assets/images/step-1.jpg";
import Img2 from "../../assets/images/step-2.jpg";
import Img3 from "../../assets/images/step-3.jpg";
import Img4 from "../../assets/images/step-4.jpg";
import { useSelector } from "react-redux";
const Steps = () => {
  const data = useSelector((state) => state.data.steps);
  const images = [Img1, Img2, Img3, Img4];
  return (
    <div className="flex flex-wrap gap-[1.5rem] p-[1rem]">
      {data?.map((item) => {
        const { id, title } = item;
        return (
          <div
            key={id}
            className="steps_box p-[1rem] text-center flex flex-col items-center"
          >
            <img
              className="rounded-[50%] border-solid border-[1rem] border-white"
              src={images[item.id - 1]}
              alt=""
            />
            <h3 className="text-[3rem] font-bold text-[#333] p-[1rem]">
              {title}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
