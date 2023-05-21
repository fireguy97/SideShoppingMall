import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailLeft = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id == id);

  return (
    <>
      <div className="itemDetail_left">
        <img className="itemDetail_img" src={findItem.img} alt="" />
      </div>
    </>
  );
};

export default ItemDetailLeft;
