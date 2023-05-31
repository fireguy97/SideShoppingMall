import React from "react";
import * as S from "./RegisterStyles";
const RegisterStock = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: parseInt(value, 10) });
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
