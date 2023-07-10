import React from "react";
import Layout from "../../../layout/Layout";
import items from "../../../db/items.json";
import BestList from "./BestList";

const Best = () => {
  return (
    <Layout>
      <BestList filteredItems={items} />
    </Layout>
  );
};

export default Best;
