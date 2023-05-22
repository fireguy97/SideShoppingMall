import React from "react";
import * as S from "./ItemDetailStyles";

const ItemDetailSizeInfo = () => {
  return (
    <>
      <S.ItemDetailSizeInfo1>
        <div>size</div>
        <S.ItemDetailSizeInfo2>
          46 size : 어깨 49, 가슴단면 60, 팔길이 25, 소매단면 14, 총장 67
          <br />
          48 size : 어깨 51, 가슴단면 62.5, 팔길이 26, 소매단면 15, 총장 68
          <br />
          50 size : 어깨 53, 가슴단면 65, 팔길이 27, 소매단면 15, 총장 69
        </S.ItemDetailSizeInfo2>
      </S.ItemDetailSizeInfo1>
    </>
  );
};

export default ItemDetailSizeInfo;
