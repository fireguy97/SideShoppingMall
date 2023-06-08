import React from "react";
import * as S from "./RegisterStyles";

const RegisterSize = ({ formData, setFormData }) => {
  const handleSizeChange = (event) => {
    const { name, checked } = event.target;
    let updatedSizes = [...formData.size]; //재할당이 가능하게 해야함
    if (checked) {
      updatedSizes.push(name);
    } else {
      updatedSizes = updatedSizes.filter((size) => size !== name);
    }
    setFormData({ ...formData, size: updatedSizes });
  };

  return (
    <>
      {formData.category === "shoes" ? (
        <div>
          <S.RegisterLabel>Sizes</S.RegisterLabel>
          <label>
            <input
              type="checkbox"
              name="230"
              checked={formData.size.includes("230")}
              onChange={handleSizeChange}
            />
            230
          </label>
          <label>
            <input
              type="checkbox"
              name="240"
              checked={formData.size.includes("240")}
              onChange={handleSizeChange}
            />
            240
          </label>
          <label>
            <input
              type="checkbox"
              name="250"
              checked={formData.size.includes("250")}
              onChange={handleSizeChange}
            />
            250
          </label>
          <label>
            <input
              type="checkbox"
              name="260"
              checked={formData.size.includes("260")}
              onChange={handleSizeChange}
            />
            260
          </label>
          <label>
            <input
              type="checkbox"
              name="270"
              checked={formData.size.includes("270")}
              onChange={handleSizeChange}
            />
            270
          </label>
          <label>
            <input
              type="checkbox"
              name="280"
              checked={formData.size.includes("280")}
              onChange={handleSizeChange}
            />
            280
          </label>
        </div>
      ) : (
        <div>
          <S.RegisterLabel>Sizes</S.RegisterLabel>
          <label>
            <input
              type="checkbox"
              name="S"
              checked={formData.size.includes("S")}
              onChange={handleSizeChange}
            />
            S
          </label>
          <label>
            <input
              type="checkbox"
              name="M"
              checked={formData.size.includes("M")}
              onChange={handleSizeChange}
            />
            M
          </label>
          <label>
            <input
              type="checkbox"
              name="L"
              checked={formData.size.includes("L")}
              onChange={handleSizeChange}
            />
            L
          </label>
          <label>
            <input
              type="checkbox"
              name="XL"
              checked={formData.size.includes("XL")}
              onChange={handleSizeChange}
            />
            XL
          </label>
        </div>
      )}
    </>
  );
};

export default RegisterSize;
