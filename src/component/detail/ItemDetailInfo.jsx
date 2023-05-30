import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { money } from "../../func";
import { incrementLikes } from "../../Redux/likeSlice";
import * as S from "./ItemDetailStyles";

const ItemDetailInfo = ({ filteredItems }) => {
  const { id } = useParams();

  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id === parseInt(id))
  );

  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(incrementLikes(findItem.id));
    setFindItem((prevItem) => ({
      ...prevItem,
      likes: prevItem.likes + 1,
    }));
  };

  return (
    <div>
      <S.ItemDetailName>{findItem.name}</S.ItemDetailName>

      <div>{money(findItem.price)} KRW</div>
      <div>
        {findItem.likes}
        <span onClick={handleLike}>❤️</span>
      </div>
      <div>Current Likes: {findItem.likes}</div>
    </div>
  );
};

export default ItemDetailInfo;
