import React from "react";
import BurgerImg from "../../assets/images/new-burger-promo.png";

const Home = () => {
  return (
    <div
      className="px-[9%] py-8 flex-wrap gap-[1.5rem] min-h-[100vh] items-center flex"
      id="home"
    >
      <div className="home_content pt-[6.5rem]">
        <h3 className="text-[#333] text-[5rem] font-bold">
          food made with love
        </h3>
        <p className="text-[1.7rem] text-[#666] px-0 py-[1rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          adipisci consequatur ab nulla exercitationem illo eum, tempora facilis
          perspiciatis corporis esse expedita voluptatibus magni, accusantium
          consectetur sint distinctio odio praesentium.
        </p>
        <a href="#" className="btn">
          order now
        </a>
      </div>
      <div className="home_image">
        <img src={BurgerImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
