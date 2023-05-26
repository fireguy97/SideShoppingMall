import React from "react";
import ShoesItem from "./ShoesItem";
import * as S from "../item/ItemStyles";

const ShoesList = () => {
  return (
    <>
      <S.ItemListDiv>
        <ShoesItem />
      </S.ItemListDiv>
    </>
  );
};

export default ShoesList;
