import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <>
      <div className="itemList_div">
        <ui className="itemList_ui">
          {searchResults.map((item, i) => {
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
        </ui>
      </div>
    </>
  );
};

export default SearchList;
