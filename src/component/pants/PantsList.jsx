import React from "react";
import PantsItem from "./PantsItem";
import * as S from "../item/ItemStyles";

const PantsList = () => {
  return (
    <>
      <S.ItemListDiv>
        <S.ItemListUl>
          <PantsItem />
        </S.ItemListUl>
      </S.ItemListDiv>
    </>
  );
};

export default PantsList;
