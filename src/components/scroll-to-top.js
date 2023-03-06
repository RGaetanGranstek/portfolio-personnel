import React, { useState } from "react";
import arrowUp from '../assets/img/arrow-g33a232172_640.png'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {showButton && (
        <button className="scrollToTopButton" onClick={handleClick}>
          <img src={arrowUp} alt="Scroll to top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;