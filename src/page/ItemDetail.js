import React from "react";
import Layout from "../layout/Layout";
import ItemDetailLeft from "../component/detail/ItemDetailLeft";
import items from "../db/items.json";
import ItemDetailRight from "../component/detail/ItemDetailRight";
import ItemDetailReview from "../component/detail/ItemDetailReview";

const ItemDetail = () => {
  return (
    <Layout>
      <div className="itemDetail_container">
        <ItemDetailLeft filteredItems={items} />
        <ItemDetailRight filteredItems={items} />
      </div>
      <ItemDetailReview />
    </Layout>
  );
};

export default ItemDetail;
