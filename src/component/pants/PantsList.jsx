import React from "react";
import PantsItem from "./PantsItem";
import * as S from "../item/ItemStyles";

const PantsList = () => {
  return (
    <>
      <S.ItemListDiv>
        <PantsItem />
      </S.ItemListDiv>
    </>
  );
};

export default PantsList;
