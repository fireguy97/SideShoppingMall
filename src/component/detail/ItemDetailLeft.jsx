import React, { useState } from "react";
import * as S from "./ItemDetailStyles";

const ItemDetailLeft = ({ itemData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const findItem = itemData;

  const prevClick = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        return findItem.images.length - 1;
      }
    });
  };

  const nextClick = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < findItem.images.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const imageUrls = findItem.images.map((imageData) => imageData.image);

  return (
    <>
      <S.ItemDetailLeft>
        <S.SliderButton className="left" onClick={prevClick}>
          {"<"}
        </S.SliderButton>
        <S.ItemDetailLeftImg src={imageUrls[currentIndex]} alt="" />
        <S.SliderButton className="right" onClick={nextClick}>
          {">"}
        </S.SliderButton>
      </S.ItemDetailLeft>
    </>
  );
};
export default ItemDetailLeft;
