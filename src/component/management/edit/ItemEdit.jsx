import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import RegisterName from "../register/RegisterName";
import RegisterPrice from "../register/RegisterPrice";
import RegisterSize from "../register/RegisterSize";
import RegisterSizeInfo from "../register/RegisterSizeInfo";
import RegisterContent from "../register/RegisterContent";
import RegisterStock from "../register/RegisterStock";
import RegisterBtn from "../register/RegisterBtn";
import * as S from "../register/RegisterStyles";
import RegisterCategory from "../register/RegisterCategory";
import axios from "axios";
import { useLocation } from "react-router-dom";
import EditImg from "./EditImg";

const ItemEdit = () => {
  const location = useLocation();
  const { itemData } = location.state;
  const [formData, setFormData] = useState({
    id: itemData.id,
    images: itemData.images.map((image) => ({
      id: image.id, // 수정: ID 값을 추가해줌
      seq: image.seq, // 수정: SEQ 값을 추가해줌
      image: image.image,
    })),
    name: itemData.name,
    price: itemData.price,
    categoryCode: itemData.categoryCode,
    sizes: [],
    sizeInfo: itemData.sizeInfo,
    content: itemData.content,
    stock: itemData.stock,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formattedData = {
        ...formData,
        images: formData.images.map((image) => {
          if (image.seq) {
            // 삭제하는 이미지인 경우
            return { id: image.id, seq: image.seq };
          } else {
            // 추가하는 이미지인 경우
            return { id: image.id, image: image.image };
          }
        }),
      };

      // 상품 수정을 위한 POST 요청을 보냄
      const apiUrl = "http://119.193.0.189:8080/updateProduct";
      const response = await axios.post(apiUrl, formattedData);
      console.log("Product update successfully");
      resetForm();
      console.log(response.data);
    } catch (error) {
      console.error("Error update product:", error);
      console.log(error.response);
    }
  };

  const resetForm = () => {
    setFormData({
      id: 0,
      images: [],
      name: "",
      price: 0,
      categoryCode: "",
      sizes: [],
      sizeInfo: "",
      content: "",
      stock: 0,
    });
  };

  return (
    <Layout>
      <S.RegisterWrap>
        <S.RegisterForm onSubmit={handleSubmit}>
          <EditImg formData={formData} setFormData={setFormData} />
          <RegisterName formData={formData} setFormData={setFormData} />
          <RegisterPrice formData={formData} setFormData={setFormData} />
          <RegisterCategory
            formData={formData}
            setFormData={setFormData}
            disabled={true}
          />
          <RegisterSize formData={formData} setFormData={setFormData} />
          <RegisterSizeInfo formData={formData} setFormData={setFormData} />
          <RegisterContent formData={formData} setFormData={setFormData} />
          <RegisterStock formData={formData} setFormData={setFormData} />
          <RegisterBtn />
        </S.RegisterForm>
      </S.RegisterWrap>
    </Layout>
  );
};

export default ItemEdit;
