import React, { useRef, useState } from "react";
import Layout from "../layout/Layout";
import RegisterImg from "../component/ManagerComponents/contents/register/RegisterImg";
import RegisterName from "../component/ManagerComponents/contents/register/RegisterName";
import RegisterPrice from "../component/ManagerComponents/contents/register/RegisterPrice";
import RegisterSize from "../component/ManagerComponents/contents/register/RegisterSize";
import RegisterSizeInfo from "../component/ManagerComponents/contents/register/RegisterSizeInfo";
import RegisterContent from "../component/ManagerComponents/contents/register/RegisterContent";
import RegisterStock from "../component/ManagerComponents/contents/register/RegisterStock";
import RegisterBtn from "../component/ManagerComponents/contents/register/RegisterBtn";
import * as S from "../component/ManagerComponents/contents/register/RegisterStyles";
import RegisterCategory from "../component/ManagerComponents/contents/register/RegisterCategory";

const Register = () => {
  const [formData, setFormData] = useState({
    img: [],
    name: "",
    price: 0,
    category: "",
    size: [],
    sizeInfo: "",
    content: "",
    stock: 0,
  });

  const idCounter = useRef(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    //  폼 데이터를 처리하고 서버로 전송하는 로직을 구현
    const newProduct = { ...formData, id: idCounter.current++ };
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
      category: "",
      size: [],
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
