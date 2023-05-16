import React, { useEffect, useState } from "react";
import bestItem from "../../db/bestItem.json";
import items from "../../db/items.json";
import { Link, useParams } from "react-router-dom";

const BestList = ({ filteredItems }) => {
  const { id } = useParams();

  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id == id)
  );

  //[filteredItems 배열이 업데이트될 때마다 findItem을 업데이트하고 최신화]
  useEffect(() => {
    setFindItem(filteredItems.find((item) => item.id == id));
  }, [filteredItems, id]);

  //[filteredItems 배열에서 좋아요가 가장 많은 상품을 가져오는 함수]
  const getBestItem = () => {
    const sortedItem = [...filteredItems].sort((a, b) => b.likes - a.likes);
    return sortedItem.slice(0, 8);
  };

  // [베스트 상품 목록을 가져옴]
  const bestItems = getBestItem();

  return (
    <>
      <div className="itemList_div">
        <ui className="itemList_ui">
          {bestItems.map((item, i) => {
            return (
              <li className="itemList_li" key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <img src={item.img} className="itemList_img" alt=""></img>
                  <div className="itemList_div1">{item.name}</div>
                  <div className="itemList_div2">{item.price}</div>
                </Link>
              </li>
            );
          })}
        </ui>
      </div>
    </>
  );
};

export default BestList;
