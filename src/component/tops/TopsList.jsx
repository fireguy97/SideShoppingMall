import React from "react";
import TopItem from "./TopItem";
import * as S from "../item/ItemStyles";
const TopsList = () => {
  return (
    <>
      <S.ItemListDiv>
        <S.ItemListUl>
          <TopItem />
        </S.ItemListUl>
      </S.ItemListDiv>
    </>
  );
};

export default TopsList;
