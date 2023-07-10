import React from "react";
import { money } from "../../../func";

import * as S from "./ItemDetailStyles";

const ItemDetailInfo = ({ itemData }) => {
  const findItem = itemData;

  return (
    <div>
      <S.ItemDetailName>{findItem.name}</S.ItemDetailName>
      <div>{money(findItem.price)} KRW</div>
    </div>
  );
};

export default ItemDetailInfo;
