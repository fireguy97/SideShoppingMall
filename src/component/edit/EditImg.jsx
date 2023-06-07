import React from "react";
import * as S from "../register/RegisterStyles";

const EditImg = ({ formData, setFormData }) => {
  // p이미지 선택 시 실행되는 함수]
  const handleImageChange = (event) => {
    const { files } = event.target;
    const selectedImages = Array.from(files);

    // p선택한 이미지를 base64 형식으로 변환하는 비동기 작업을 수행]
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

    // [모든 이미지의 base64 문자열을 받은 후 새로운 이미지 배열을 업데이트]
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

  // [이미지 삭제 시 실행되는 함수]
  const handleImageRemove = (index) => {
    setFormData((prevFormData) => {
      //[이전의 이미지 배열을 복사하여 새로운 배열을 생성]
      const updatedImages = [...prevFormData.images];

      // [선택한 인덱스에 해당하는 이미지의 id와 seq을 삭제]
      const removedImage = updatedImages[index];
      const removedId = removedImage.id;
      const removedSeq = removedImage.seq;

      //[업데이트된 이미지 배열에서 선택한 이미지를 제외하고 필터링]
      const filteredImages = updatedImages.filter((image) => {
        return image.id !== removedId || image.seq !== removedSeq;
      });

      // [업데이트된 이미지 배열을 포함한 새로운 폼 데이터 객체를 반환]
      return {
        ...prevFormData,
        images: filteredImages,
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
