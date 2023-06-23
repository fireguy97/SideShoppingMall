import React from "react";
import * as S from "./ItemDetailStyles";

const ItemDetailSizeInfo = ({ itemData }) => {
  const findItem = itemData;

  const sizeInfoList = findItem.sizeInfo.split("\n");

  return (
    <div>
      <S.ItemDetailSizeInfo1>
        <div>size</div>
        <S.ItemDetailSizeInfo2>
          {sizeInfoList.map((size, index) => (
            <div key={index}>{size}</div>
          ))}
        </S.ItemDetailSizeInfo2>
      </S.ItemDetailSizeInfo1>
    </div>
  );
};

export default ItemDetailSizeInfo;
