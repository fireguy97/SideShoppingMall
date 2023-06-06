import React from "react";
import * as S from "../register/RegisterStyles";

const EditImg = ({ formData, setFormData }) => {
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
      const newImages = images.map((image) => ({
        id: formData.id,
        image: image,
      }));

      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...newImages],
      }));
    });
  };

  const handleImageRemove = (index) => {
    setFormData((prevFormData) => {
      const updatedImages = prevFormData.images.filter((_, i) => i !== index);

      return {
        ...prevFormData,
        images: updatedImages.map((image, i) => {
          if (i >= index) {
            return {
              ...image,
              id: formData.id, // 이미지 삭제 시 id 값을 빈 문자열로 설정
              seq: image.seq - 1, // 이미지의 순서에 맞게 seq 값을 조정
            };
          }
          return image;
        }),
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
                <S.RegisterImg src={image.image} alt={`Image ${index}`} />
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

export default EditImg;
