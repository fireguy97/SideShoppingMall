import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailInfo from "./ItemDetailInfo";
import ItemDetailSize from "./ItemDetailSize";
import ItemDetailBuyButton from "./ItemDetailBuyButton";
import ItemDetailSizeInfo from "./ItemDetailSizeInfo";
import ItemDetailContent from "./ItemDetailContent";
import * as S from "./ItemDetailStyles";

const ItemDetailRight = ({ filteredItems }) => {
  const { id } = useParams();
  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id === parseInt(id))
  );

  useEffect(() => {
    setFindItem(filteredItems.find((item) => item.id === parseInt(id)));
  }, [filteredItems, id]);

  return (
    <>
      <S.ItemDetailRight>
        <S.ItemDetailInfo1>
          <ItemDetailInfo filteredItems={filteredItems} />
          <ItemDetailSize filteredItems={filteredItems} />
          <ItemDetailBuyButton filteredItems={filteredItems} />
          <ItemDetailSizeInfo />
          <ItemDetailContent />
        </S.ItemDetailInfo1>
      </S.ItemDetailRight>
    </>
  );
};

export default ItemDetailRight;
