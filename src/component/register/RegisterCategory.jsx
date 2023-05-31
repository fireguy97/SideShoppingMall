import React from "react";
import * as S from "./RegisterStyles";
const RegisterCategory = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div>
        <S.RegisterLabel>Category : </S.RegisterLabel>

        <select
          name="categoryCode"
          value={formData.categoryCode}
          onChange={handleInputChange}>
          <option value="">select category</option>
          <option value="1">Tops</option>
          <option value="2">Pants</option>
          <option value="3">Shoes</option>
        </select>
      </div>
    </>
  );
};

export default RegisterCategory;
