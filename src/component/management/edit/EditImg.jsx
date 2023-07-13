import React from "react";
import * as S from "../register/RegisterStyles";

const EditImg = ({ formData, setFormData }) => {
  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 이미지 1과 이미지 2를 모두 포함하도록 images 배열을 업데이트합니다.
      setFormData({
        ...formData,
        images: [...formData.images, { image: reader.result }],
      });
    };

    const file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (index) => {
    const newImages = formData.images.map((image, i) => {
      // 이미지를 삭제할 경우, isDeleted 속성을 true로 설정
      return i === index ? { ...image, isDeleted: true } : image;
    });
    setFormData({ ...formData, images: newImages });
  };

  return (
    <div>
      <S.RegisterInputFile
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {formData.images
        .filter((imageData) => !imageData.isDeleted) // 삭제된 이미지가 보이지 않도록 필터링
        .map((imageData, index) => (
          <S.RegisterImgDiv2 key={index}>
            <S.RegisterImg src={imageData.image} alt="preview" />
            <S.RegisterImgRemoveButton
              type="button"
              onClick={() => handleImageRemove(index)}
            >
              삭제
            </S.RegisterImgRemoveButton>
          </S.RegisterImgDiv2>
        ))}
    </div>
  );
};

export default EditImg;
