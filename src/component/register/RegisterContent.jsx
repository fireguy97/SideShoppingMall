import React from "react";
import * as S from "./RegisterStyles";
const RegisterContent = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <S.RegisterLabel>Content</S.RegisterLabel>
        <S.RegisterTextarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}></S.RegisterTextarea>
      </div>
    </>
  );
};

export default RegisterContent;
