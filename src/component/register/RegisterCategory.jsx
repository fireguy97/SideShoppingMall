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
          name="category"
          value={formData.category}
          onChange={handleInputChange}>
          <option value="tops">Tops</option>
          <option value="pants">Pants</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
    </>
  );
};

export default RegisterCategory;
