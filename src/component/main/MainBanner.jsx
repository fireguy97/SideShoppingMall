import React, { useEffect, useState } from "react";
import mainBannerImg from "../../db/mainBannerImg.json";
import * as S from "./MainStyles";

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
    <S.MainBanner>
      <S.MainPrevBtn onClick={prevClick}>{"<"}</S.MainPrevBtn>
      <S.MainNextBtn onClick={nextClick}>{">"}</S.MainNextBtn>
      <S.MainWrap>
        <S.MainImg src={mainBanner[index].img} className="main_img" alt="" />
      </S.MainWrap>
    </S.MainBanner>
  );
};

export default MainBanner;
