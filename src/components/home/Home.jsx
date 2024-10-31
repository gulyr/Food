import React from "react";
import BurgerImg from "../../assets/images/new-burger-promo.png";

const Home = () => {
  return (
    <div className="home container" id="home">
      <div className="content">
        <h3>food made with love</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          adipisci consequatur ab nulla exercitationem illo eum, tempora facilis
          perspiciatis corporis esse expedita voluptatibus magni, accusantium
          consectetur sint distinctio odio praesentium.
        </p>
        <a href="#" className="btn">
          order now
        </a>
      </div>
      <div className="image">
        <img src={BurgerImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
