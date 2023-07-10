import React from "react";
import * as S from "./RegisterStyles";

const RegisterImg = ({ formData, setFormData }) => {
  const handleImageChange = (event) => {
    const { files } = event.target;
    const selectedImages = Array.from(files);

    const imagePromises = selectedImages.map((image) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          resolve(base64String);
        };
        reader.readAsDataURL(image);
      });
    });

    Promise.all(imagePromises).then((images) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...images],
      }));
    });
  };

  const handleImageRemove = (index) => {
    setFormData((prevFormData) => {
      const updatedImages = [...prevFormData.images];
      updatedImages.splice(index, 1);
      return {
        ...prevFormData,
        images: updatedImages,
      };
    });
  };

  return (
    <>
      <div>
        <S.RegisterLabel>Images</S.RegisterLabel>
        <S.RegisterInputFile
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
        />
        {formData.images.length > 0 && (
          <S.RegisterImgDiv1>
            {formData.images.map((image, index) => (
              <S.RegisterImgDiv2 key={index}>
                <S.RegisterImg src={image} alt={`Image ${index}`} />
                <S.RegisterImgRemoveButton
                  onClick={() => handleImageRemove(index)}>
                  Remove
                </S.RegisterImgRemoveButton>
              </S.RegisterImgDiv2>
            ))}
          </S.RegisterImgDiv1>
        )}
      </div>
    </>
  );
};

export default RegisterImg;
