import React, { useState } from "react";
import bestItem from "../../db/bestItem.json";
import items from "../../db/items.json";

const BestList = () => {
  const [bestItemList, setBestItemList] = useState(bestItem);

  return (
    <>
      <div className="itemList_div">
        <ui className="itemList_ui">
          {bestItemList.map((data, i) => {
            return (
              <li className="itemList_li">
                <img src={data.img} className="itemList_img" alt=""></img>
                <div className="itemList_div1">{data.name}</div>
                <div className="itemList_div2">{data.price}</div>
              </li>
            );
          })}
        </ui>
      </div>
    </>
  );
};

export default BestList;
