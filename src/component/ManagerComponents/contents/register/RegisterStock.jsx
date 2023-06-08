import React from "react";
import * as S from "./RegisterStyles";
const RegisterStock = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <S.RegisterLabel>Stock : </S.RegisterLabel>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default RegisterStock;
