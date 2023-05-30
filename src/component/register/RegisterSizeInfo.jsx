import React from "react";
import * as S from "./RegisterStyles";
const RegisterSizeInfo = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <S.RegisterLabel>Size Information:</S.RegisterLabel>
        <S.RegisterTextarea
          name="sizeInfo"
          value={formData.sizeInfo}
          onChange={handleInputChange}></S.RegisterTextarea>
      </div>
    </>
  );
};

export default RegisterSizeInfo;
