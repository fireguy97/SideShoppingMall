import React from "react";
import * as S from "./RegisterStyles";
const RegisterPrice = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div>
        <S.RegisterLabel>Price : </S.RegisterLabel>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default RegisterPrice;
