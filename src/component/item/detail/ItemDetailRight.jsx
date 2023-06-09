import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailInfo from "./ItemDetailInfo";
import ItemDetailSize from "./ItemDetailSize";
import ItemDetailBuyButton from "./ItemDetailBuyButton";
import ItemDetailSizeInfo from "./ItemDetailSizeInfo";
import ItemDetailContent from "./ItemDetailContent";
import * as S from "./ItemDetailStyles";

const ItemDetailRight = ({ itemData }) => {
  const [itemSize, setItemSize] = useState("");

  const handleSizeChange = (newSize) => {
    setItemSize(newSize);
  };
  return (
    <S.ItemDetailRight>
      <S.ItemDetailInfo1>
        <ItemDetailInfo itemData={itemData} />
        <ItemDetailSize itemData={itemData} onSizeChange={handleSizeChange} />
        <ItemDetailBuyButton itemData={itemData} itemSize={itemSize} />
        <ItemDetailSizeInfo itemData={itemData} />
        <ItemDetailContent itemData={itemData} />
      </S.ItemDetailInfo1>
    </S.ItemDetailRight>
  );
};

export default ItemDetailRight;
