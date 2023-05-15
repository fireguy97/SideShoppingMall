import React, { useEffect, useState } from "react";
import mainBannerImg from "../../db/mainBannerImg.json";

const MainBanner = () => {
  const [mainBanner, setMainBanner] = useState(mainBannerImg);
  const [index, setIndex] = useState(0);

  const prevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(mainBanner.length - 1);
    }
  };

  const nextClick = () => {
    if (index < mainBanner.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % mainBanner.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main_banner">
      <button className="main_prev" onClick={prevClick}>
        {"<"}
      </button>
      <button className="main_next" onClick={nextClick}>
        {">"}
      </button>
      <div className="main_wrap">
        <img src={mainBanner[index].img} className="main_img" alt="" />
      </div>
    </div>
  );
};

export default MainBanner;
