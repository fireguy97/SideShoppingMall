import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import RegisterImg from "./RegisterImg";
import RegisterName from "./RegisterName";
import RegisterPrice from "./RegisterPrice";
import RegisterSize from "./RegisterSize";
import RegisterSizeInfo from "./RegisterSizeInfo";
import RegisterContent from "./RegisterContent";
import RegisterStock from "./RegisterStock";
import RegisterBtn from "./RegisterBtn";
import * as S from "./RegisterStyles";
import RegisterCategory from "./RegisterCategory";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    images: [],
    name: "",
    price: 0,
    categoryCode: "",
    sizes: [],
    sizeInfo: "",
    content: "",
    stock: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formattedData = {
        ...formData,
        images: formData.images.map((image) => ({ image })),
      };
      // 상품 등록을 위한 POST 요청을 보냄
      const apiUrl = "http://119.193.0.189:8080/addProduct";
      const response = await axios.post(apiUrl, formattedData);
      console.log("Product added successfully");
      resetForm();
      console.log(response);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const resetForm = () => {
    setFormData({
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
          <S.RegisterTitle> 상품등록 </S.RegisterTitle>

          <RegisterImg formData={formData} setFormData={setFormData} />
          <RegisterName formData={formData} setFormData={setFormData} />
          <RegisterPrice formData={formData} setFormData={setFormData} />
          <RegisterCategory formData={formData} setFormData={setFormData} />
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

export default Register;
