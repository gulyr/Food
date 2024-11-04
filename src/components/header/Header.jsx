import React from "react";
import { FaBars, FaUtensils } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/slices/uiSlice";
const Header = () => {
  const data = useSelector((state) => state.data.header);
  const dispatch = useDispatch();
  const menuActive = useSelector((state) => state.ui.menuActive);
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="px-[9%] py-8 fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center bg-white">
      <a
        href="#"
        className="text-[#666] font-bold text-[2.5rem] flex items-center"
      >
        <FaUtensils className="pr-[0.5rem] text-[#ff3838] " />
        food
      </a>
      <FaBars
        id="menu-bar"
        className="text-[3rem] cursor-pointer text-[#333] hidden"
        onClick={handleMenuClick}
      />
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        {data?.map((item) => {
          const { id, title, href } = item;
          return (
            <a
              className="text-[2rem] ml-[2rem] text-[#666] hover:text-[#ff3838]"
              key={id}
              href={`#${href}`}
            >
              {title}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
