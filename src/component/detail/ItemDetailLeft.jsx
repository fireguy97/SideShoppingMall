import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./ItemDetailStyles";

const ItemDetailLeft = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id == id);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(findItem.img.length - 1);
    }
  };

  const nextClick = () => {
    if (currentIndex < findItem.img.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <>
      <S.ItemDetailLeft>
        <S.SliderButton className="left" onClick={prevClick}>
          {"<"}
        </S.SliderButton>
        <S.ItemDetailLeftImg src={findItem.img[currentIndex]} alt="" />
        <S.SliderButton className="right" onClick={nextClick}>
          {">"}
        </S.SliderButton>
      </S.ItemDetailLeft>
    </>
  );
};

export default ItemDetailLeft;
