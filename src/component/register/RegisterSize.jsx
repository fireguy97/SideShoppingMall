import React from "react";
import * as S from "./RegisterStyles";

const RegisterSize = ({ formData, setFormData }) => {
  const handleSizeChange = (event) => {
    const { name, checked } = event.target;
    let updatedSizes = [...formData.sizes]; //재할당이 가능하게 해야함
    if (checked) {
      updatedSizes.push(name);
    } else {
      updatedSizes = updatedSizes.filter((sizes) => sizes !== name);
    }
    setFormData({ ...formData, sizes: updatedSizes });
  };

  return (
    <>
      {formData.categoryCode === "3" ? (
        <div>
          <S.RegisterLabel>Sizes</S.RegisterLabel>
          <label>
            <input
              type="checkbox"
              name="1"
              checked={formData.sizes.includes("1")}
              onChange={handleSizeChange}
            />
            230
          </label>
          <label>
            <input
              type="checkbox"
              name="2"
              checked={formData.sizes.includes("2")}
              onChange={handleSizeChange}
            />
            240
          </label>
          <label>
            <input
              type="checkbox"
              name="3"
              checked={formData.sizes.includes("3")}
              onChange={handleSizeChange}
            />
            250
          </label>
          <label>
            <input
              type="checkbox"
              name="4"
              checked={formData.sizes.includes("4")}
              onChange={handleSizeChange}
            />
            260
          </label>
          <label>
            <input
              type="checkbox"
              name="5"
              checked={formData.sizes.includes("5")}
              onChange={handleSizeChange}
            />
            270
          </label>
        </div>
      ) : (
        <div>
          <S.RegisterLabel>Sizes</S.RegisterLabel>
          <label>
            <input
              type="checkbox"
              name="1"
              checked={formData.sizes.includes("1")}
              onChange={handleSizeChange}
            />
            XS
          </label>
          <label>
            <input
              type="checkbox"
              name="2"
              checked={formData.sizes.includes("2")}
              onChange={handleSizeChange}
            />
            S
          </label>
          <label>
            <input
              type="checkbox"
              name="3"
              checked={formData.sizes.includes("3")}
              onChange={handleSizeChange}
            />
            M
          </label>
          <label>
            <input
              type="checkbox"
              name="4"
              checked={formData.sizes.includes("4")}
              onChange={handleSizeChange}
            />
            L
          </label>
          <label>
            <input
              type="checkbox"
              name="5"
              checked={formData.sizes.includes("5")}
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
