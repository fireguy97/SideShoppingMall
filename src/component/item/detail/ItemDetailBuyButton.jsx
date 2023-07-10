import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyAddItem } from "../../../Redux/buySlice";
import { cartAddItem } from "../../../Redux/cartSlice";
import * as S from "./ItemDetailStyles";

const ItemDetailBuyButton = ({ itemData, itemSize }) => {
  const findItem = itemData;

  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCartClick = useCallback(() => {
    dispatch(
      cartAddItem({
        id: findItem.id,
        img: findItem.images[0],
        name: findItem.name,
        price: findItem.price,
        size: itemSize,
        count: count,
      })
    );
    navigate("/cart");
  }, [dispatch, findItem, itemSize, count, navigate]);

  const handleBuyClick = useCallback(() => {
    dispatch(
      buyAddItem({
        id: findItem.id,
        img: findItem.images[0],
        name: findItem.name,
        price: findItem.price,
        size: itemSize,
        count: count,
      })
    );
    navigate("/buy");
  }, [dispatch, findItem, itemSize, count, navigate]);

  return (
    <div>
      <S.ItemDetailDiv2>
        <S.ItemDetailBuy onClick={handleCartClick}>Cart</S.ItemDetailBuy>
        <S.ItemDetailBuy onClick={handleBuyClick}>Buy</S.ItemDetailBuy>
      </S.ItemDetailDiv2>
    </div>
  );
};

export default ItemDetailBuyButton;
