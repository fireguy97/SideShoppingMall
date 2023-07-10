import React, { useCallback, useState } from "react";

import { money } from "../../../func";
import * as S from "./ItemDetailStyles";

const ItemDetailSize = ({ itemData, onSizeChange }) => {
  const findItem = itemData;

  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(1);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setItemSize(newSize);
    onSizeChange(newSize); // onSizeChange 콜백 함수 호출하여 선택된 사이즈 전달
  };

  const handleDecrement = useCallback(() => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  }, [count]);
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <S.ItemDetailSize value={itemSize} onChange={handleSizeChange}>
        <option value="">select size</option>
        {findItem.sizes.map((size) => {
          return (
            <option key={size} value={size}>
              {size}
            </option>
          );
        })}
      </S.ItemDetailSize>
      {itemSize && (
        <S.ItemDetailInfo2>
          <span>{findItem.name}</span>
          <S.ItemDetailSpan1>{itemSize}</S.ItemDetailSpan1>
          <S.ItemDetailSpan1>{findItem.price} KRW</S.ItemDetailSpan1>
          <S.ItemDetailSpan1
            style={{ cursor: "pointer" }}
            onClick={handleDecrement}>
            -
          </S.ItemDetailSpan1>
          {/* 수량 */}
          <S.ItemDetailSpan1>{count}</S.ItemDetailSpan1>
          <S.ItemDetailSpan1
            style={{ cursor: "pointer" }}
            onClick={handleIncrement}>
            +
          </S.ItemDetailSpan1>
          <S.ItemDetailDiv1>
            <S.ItemDetailSpan2>Total</S.ItemDetailSpan2>
            {/* 총 가격(가격 * 수량) */}
            <S.ItemDetailSpan3>
              {money(findItem.price * count)} KRW
            </S.ItemDetailSpan3>
          </S.ItemDetailDiv1>
        </S.ItemDetailInfo2>
      )}
    </>
  );
};

export default ItemDetailSize;
