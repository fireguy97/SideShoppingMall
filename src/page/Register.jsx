import React, { useState } from "react";
import Layout from "../layout/Layout";
import RegisterImg from "../component/register/RegisterImg";
import RegisterName from "../component/register/RegisterName";
import RegisterPrice from "../component/register/RegisterPrice";
import RegisterSize from "../component/register/RegisterSize";
import RegisterSizeInfo from "../component/register/RegisterSizeInfo";
import RegisterContent from "../component/register/RegisterContent";
import RegisterStock from "../component/register/RegisterStock";
import RegisterBtn from "../component/register/RegisterBtn";
import * as S from "../component/register/RegisterStyles";
import RegisterCategory from "../component/register/RegisterCategory";

const Register = () => {
  const [formData, setFormData] = useState({
    img: [],
    name: "",
    price: 0,
    categoryCode: "",
    sizes: [],
    sizeInfo: "",
    content: "",
    stock: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //  폼 데이터를 처리하고 서버로 전송하는 로직을 구현
    const newProduct = { ...formData };
    // console.log(formData);
    console.log("New Product:", newProduct);
    // 폼 데이터 처리 및 서버로 전송하는 로직
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      img: [],
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
