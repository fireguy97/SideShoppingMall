import React, { useState } from "react";
import * as S from "./ItemDetailStyles";
import { useParams } from "react-router-dom";

const ItemDetailSizeInfo = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id === parseInt(id));

  // const sizeInfoList = findItem.sizeInfo.split("\n"); //실제로는 줄넘김으로 해야함
  const sizeInfoList = findItem.sizeInfo.split("  "); // sizeInfo를 공백을 기준으로 분리하여 배열로 만듦
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
