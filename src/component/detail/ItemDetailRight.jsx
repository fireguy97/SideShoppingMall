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
  const [itemSize, setItemSize] = useState("");

  useEffect(() => {
    setFindItem(filteredItems.find((item) => item.id === parseInt(id)));
  }, [filteredItems, id]);

  const handleSizeChange = (newSize) => {
    setItemSize(newSize);
  };
  return (
    <>
      <S.ItemDetailRight>
        <S.ItemDetailInfo1>
          <ItemDetailInfo filteredItems={filteredItems} />
          <ItemDetailSize
            filteredItems={filteredItems}
            onSizeChange={handleSizeChange}
          />
          <ItemDetailBuyButton
            filteredItems={filteredItems}
            itemSize={itemSize}
          />
          <ItemDetailSizeInfo filteredItems={filteredItems} />
          <ItemDetailContent filteredItems={filteredItems} />
        </S.ItemDetailInfo1>
      </S.ItemDetailRight>
    </>
  );
};

export default ItemDetailRight;
