import React, { useState } from "react";
import { Link } from "react-router-dom";
import items from "../../db/items.json";

const TopsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("tops");
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <>
      <div className="itemList_div">
        <ul className="itemList_ul">
          {filteredItems.map((item, i) => {
            return (
              <li className="itemList_li" key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <img src={item.img} className="itemList_img" alt="" />
                  <div className="itemList_div1">{item.name}</div>
                  <div className="itemList_div2">{item.price}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TopsList;
