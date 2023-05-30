import React from "react";
import * as S from "./RegisterStyles";

const RegisterImg = ({ formData, setFormData }) => {
  const handleImageChange = (event) => {
    const { files } = event.target;
    const selectedImages = Array.from(files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      img: [...prevFormData.img, ...selectedImages],
    }));
  };
  return (
    <>
      <div>
        <S.RegisterLabel>Images</S.RegisterLabel>
        <S.RegisterInputFile
          type="file"
          name="img"
          multiple
          onChange={handleImageChange}
        />
        {formData.img.length > 0 && (
          <div>
            {formData.img.map((image, index) => (
              <div key={index}>{image.name}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterImg;
