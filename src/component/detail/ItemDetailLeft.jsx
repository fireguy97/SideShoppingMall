import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./ItemDetailStyles";

const ItemDetailLeft = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id == id);

  return (
    <>
      <S.ItemDetailLeft>
        <S.ItemDetailLeftImg src={findItem.img} alt="" />
      </S.ItemDetailLeft>
    </>
  );
};

export default ItemDetailLeft;
