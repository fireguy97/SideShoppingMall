import React, { useState } from "react";
import items from "../../db/items.json";
import { Link } from "react-router-dom";
import * as S from "../item/ItemStyles";

const ShoesItem = () => {
  const [selectedCategory, setSelectedCategory] = useState("shoes");
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <>
      {filteredItems.map((item, i) => {
        return (
          <S.ItemListli key={item.id}>
            <Link to={`/item/${item.id}`}>
              <S.ItemListImg src={item.img} alt="" />
              <S.ItemListDiv1>{item.name}</S.ItemListDiv1>
              <S.ItemListDiv2>{item.price}</S.ItemListDiv2>
            </Link>
          </S.ItemListli>
        );
      })}
    </>
  );
};

export default ShoesItem;
