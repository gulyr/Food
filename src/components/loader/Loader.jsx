import React, { useEffect } from "react";
import Img from "../../assets/images/loader.gif";

const Loader = () => {
  useEffect(() => {
    const fadeOut = () => {
      document.querySelector(".loader_container").classList.add("fade_out");
    };
    setTimeout(fadeOut, 3000);
  }, []);
  return (
    <div className="loader_container fixed top-0 left-0 z-[10000] bg-white flex justify-center items-center w-full h-full">
      <img src={Img} alt="Loader" />
    </div>
  );
};

export default Loader;
