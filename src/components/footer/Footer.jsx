import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const data = useSelector((state) => state.data.social);
  return (
    <footer>
      <div className="share">
        {data.map((item) => {
          const { id, name, url } = item;
          return (
            <a key={id} href={url} className="btn">
              {name}
            </a>
          );
        })}
      </div>
      <h1 className="credit">
        created by <span> gul rasulzada</span>
      </h1>
    </footer>
  );
};

export default Footer;
