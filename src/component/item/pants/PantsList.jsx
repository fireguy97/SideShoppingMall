import React from "react";
import PantsItem from "./PantsItem";
import * as S from "../ItemStyles";

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
