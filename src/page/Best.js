import React from "react";
import Layout from "../layout/Layout";
import BestList from "../component/best/BestList";
import items from "../db/items.json";

const Best = () => {
  return (
    <Layout>
      <BestList filteredItems={items} />
    </Layout>
  );
};

export default Best;
