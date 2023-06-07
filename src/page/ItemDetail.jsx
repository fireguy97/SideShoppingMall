import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import ItemDetailLeft from "../component/detail/ItemDetailLeft";
import ItemDetailRight from "../component/detail/ItemDetailRight";
import ItemDetailReview from "../component/detail/ItemDetailReview";
import * as S from "../component/detail/ItemDetailStyles";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [itemData, setItemData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://119.193.0.189:8080/getProduct?id=${id}`
        );
        setItemData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    console.log(itemData);
  }, [itemData]);

  const handleEdit = () => {
    navigate("/edit", { state: { itemData } });
  };

  const handleRemove = async () => {
    try {
      await axios.post(`http://119.193.0.189:8080/deleteProduct?id=${id}`);
      console.log("Product deleted successfully");
      navigate("/item/best"); // 리스트 페이지로 이동
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <S.ItemDetailContainer>
        <ItemDetailLeft itemData={itemData} />
        <ItemDetailRight itemData={itemData} />
      </S.ItemDetailContainer>
      <ItemDetailReview />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </Layout>
  );
};

export default ItemDetail;
