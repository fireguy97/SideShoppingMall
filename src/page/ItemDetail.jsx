import React from "react";
import Layout from "../layout/Layout";
import ItemDetailLeft from "../component/detail/ItemDetailLeft";
import items from "../db/items.json";
import ItemDetailRight from "../component/detail/ItemDetailRight";
import ItemDetailReview from "../component/detail/ItemDetailReview";
import * as S from "../component/detail/ItemDetailStyles";

const ItemDetail = () => {
  return (
    <Layout>
      <S.ItemDetailContainer>
        <ItemDetailLeft filteredItems={items} />
        <ItemDetailRight filteredItems={items} />
      </S.ItemDetailContainer>
      <ItemDetailReview />
    </Layout>
  );
};

export default ItemDetail;
