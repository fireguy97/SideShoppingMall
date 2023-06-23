import React from "react";
import * as S from "./RegisterStyles";
const RegisterPrice = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: parseInt(value, 10) });
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
