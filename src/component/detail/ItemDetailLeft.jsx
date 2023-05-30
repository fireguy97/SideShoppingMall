import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./ItemDetailStyles";

const ItemDetailLeft = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        return findItem.img.length - 1;
      }
    });
  };

  const nextClick = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < findItem.img.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
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
