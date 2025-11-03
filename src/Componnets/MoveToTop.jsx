import React from "react";
import "../App.css";
import { FaAngleUp } from "react-icons/fa";

const MoveToTop = ({ activeSection }) => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isVisible = activeSection !== "home";

  return (
    <button
      onClick={moveToTop}
      className={`${
        isVisible ? "opacity-100 scale-100 fixed bottom-10 right-5" : "opacity-0 scale-0"
      } transition-all duration-500 ease-out p-2 shadow-lg
        bg-[#d4af37] text-[#241f47] rounded-full z-50 cursor-pointer
        hover:bg-transparent hover:border hover:border-[#d4af37]
        hover:text-[#d4af37] hover:shadow-[0_0_12px_#d4af37]
        focus:outline-none`}
    >
      <FaAngleUp size={28} />
    </button>
  );
};

export default MoveToTop;
