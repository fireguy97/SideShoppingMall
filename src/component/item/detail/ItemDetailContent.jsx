import React from "react";
import * as S from "./ItemDetailStyles";
const ItemDetailContent = ({ itemData }) => {
  const findItem = itemData;

  const contentList = findItem.content.split("\n");

  return (
    <div>
      <S.ItemDetailContent1>
        <div>content</div>
        <S.ItemDetailContent2>
          {contentList.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </S.ItemDetailContent2>
      </S.ItemDetailContent1>
    </div>
  );
};

export default ItemDetailContent;
