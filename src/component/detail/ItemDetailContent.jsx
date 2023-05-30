import React from "react";
import * as S from "./ItemDetailStyles";
import { useParams } from "react-router-dom";
const ItemDetailContent = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id === parseInt(id));

  // const sizeInfoList = findItem.content.split("\n"); //실제로는 줄넘김으로 해야함
  const contentList = findItem.content.split("  ");
  return (
    <div>
      <S.ItemDetailContent1>
        <div>content</div>
        <S.ItemDetailContent2>
          {contentList.map((content) => (
            <div key={content.id}>{content}</div>
          ))}
        </S.ItemDetailContent2>
      </S.ItemDetailContent1>
    </div>
  );
};

export default ItemDetailContent;
