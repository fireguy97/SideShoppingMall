import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { money } from "../../func";
import * as S from "./ItemDetailStyles";

const ItemDetailSize = ({ filteredItems }) => {
  const { id } = useParams();
  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id === parseInt(id))
  );
  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(1);

  const handleSizeChange = (e) => {
    setItemSize(e.target.value);
  };

  return (
    <>
      <S.ItemDetailSize value={itemSize} onChange={handleSizeChange}>
        <option value="">select size</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </S.ItemDetailSize>
      {itemSize && (
        <S.ItemDetailInfo2>
          <span>{findItem.name}</span>
          <S.ItemDetailSpan1>{itemSize}</S.ItemDetailSpan1>
          <S.ItemDetailSpan1>{findItem.price} KRW</S.ItemDetailSpan1>
          <S.ItemDetailSpan1
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCount(count - 1);
            }}>
            -
          </S.ItemDetailSpan1>
          {/* 수량 */}
          <S.ItemDetailSpan1>{count}</S.ItemDetailSpan1>
          <S.ItemDetailSpan1
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCount(count + 1);
            }}>
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
