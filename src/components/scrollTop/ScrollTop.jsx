import React, { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setScrollTopActive } from "../../redux/slices/uiSlice";

const ScrollTop = () => {
  const dispatch = useDispatch();
  const scrollTopActive = useSelector((state) => state.ui.scrollTopActive);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        dispatch(setScrollTopActive(true));
      } else {
        dispatch(setScrollTopActive(false));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return (
    <a
      href="#home"
      id="scroll-top"
      className={`${scrollTopActive ? "active" : ""}`}
    >
      <IoIosArrowUp />
    </a>
  );
};

export default ScrollTop;
