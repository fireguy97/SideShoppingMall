import React from "react";
import ShoesItem from "./ShoesItem";
import * as S from "../item/ItemStyles";

const ShoesList = () => {
  return (
    <>
      <S.ItemListDiv>
        <S.ItemListUl>
          <ShoesItem />
        </S.ItemListUl>
      </S.ItemListDiv>
    </>
  );
};

export default ShoesList;
