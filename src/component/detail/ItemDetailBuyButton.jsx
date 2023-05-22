import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyAddItem } from "../../Redux/buySlice";
import { cartAddItem } from "../../Redux/cartSlice";
import * as S from "./ItemDetailStyles";

const ItemDetailBuyButton = ({ filteredItems }) => {
  const { id } = useParams();
  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id === parseInt(id))
  );

  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <S.ItemDetailDiv2>
        <S.ItemDetailBuy
          onClick={() => {
            dispatch(
              cartAddItem({
                id: findItem.id,
                img: findItem.img,
                name: findItem.name,
                price: findItem.price,
                size: itemSize,
                count: count,
              })
            );
            navigate("/cart");
          }}>
          Cart
        </S.ItemDetailBuy>
        <S.ItemDetailBuy
          onClick={() => {
            dispatch(
              buyAddItem({
                id: findItem.id,
                img: findItem.img,
                name: findItem.name,
                price: findItem.price,
                size: itemSize,
                count: count,
              })
            );
            navigate("/buy");
          }}>
          Buy
        </S.ItemDetailBuy>
      </S.ItemDetailDiv2>
    </>
  );
};

export default ItemDetailBuyButton;
