import React from "react";
import * as S from "./RegisterStyles";
const RegisterName = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div>
        <S.RegisterLabel>Name : </S.RegisterLabel>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default RegisterName;
