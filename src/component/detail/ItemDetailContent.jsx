import React, { useState } from "react";
import * as S from "./ItemDetailStyles";
import { useParams } from "react-router-dom";
const ItemDetailContent = ({ filteredItems }) => {
  const { id } = useParams();
  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id === parseInt(id))
  );

  // const sizeInfoList = findItem.content.split("\n"); //실제로는 줄넘김으로 해야함
  const contentList = findItem.content.split("  ");
  return (
    <>
      <S.ItemDetailContent1>
        <div>content</div>
        <S.ItemDetailContent2>
          {contentList.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </S.ItemDetailContent2>
      </S.ItemDetailContent1>
    </>
  );
};

export default ItemDetailContent;
