import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyAddItem } from "../../Redux/buySlice";
import { cartAddItem } from "../../Redux/cartSlice";
import * as S from "./ItemDetailStyles";

const ItemDetailBuyButton = ({ filteredItems, itemSize }) => {
  const { id } = useParams();
  const [findItem, setFindItem] = useState(null);

  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setFindItem(filteredItems.find((item) => item.id === parseInt(id)));
  }, [filteredItems, id]);

  const handleCartClick = useCallback(() => {
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
  }, [dispatch, findItem, itemSize, count, navigate]);

  const handleBuyClick = useCallback(() => {
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
