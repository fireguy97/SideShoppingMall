import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function JoinAddressForm() {
  const { register, setValue } = useForm();
  const [openPopup, setOpenPopup] = useState(false);

  const handlePostcode = (data) => {
    const { address, zonecode } = data;

    setValue("address", address);
    setValue("zonecode", zonecode);
    setOpenPopup(false);
  };

  const openPostcodeModal = () => {
    setOpenPopup(true);
  };

  return (
    <StyledAddress>
      <tr>
        <th>address</th>{" "}
        <td>
          <AddressWrap>
            <AddressInput
              type="text"
              placeholder="address"
              {...register("zonecode")}
              required
              readOnly
            />
            <AddressBtn
              type="button"
              className="ChkBtn"
              onClick={openPostcodeModal}
            >
              우편번호
            </AddressBtn>
          </AddressWrap>
          <MoreAddress>
            <MoreAddressInput
              type="text"
              placeholder="기본주소"
              {...register("address")}
              readOnly
              required
            />
            <input type="text" placeholder="상세주소" />
          </MoreAddress>
        </td>
      </tr>
      {openPopup && (
        <AddressPopup>
          <DaumPostcode
            style={{ width: "450px" }}
            onComplete={handlePostcode}
            animation
          />
        </AddressPopup>
      )}
    </StyledAddress>
  );
}
const StyledAddress = styled.div`
  margin-left: 50px;
`;
const AddressInput = styled.input`
  width: 12.1875rem;
  color: #aaa;
`;
const AddressBtn = styled.button`
  background-color: #fff;
  cursor: pointer;
  color: #aaa;
  width: 5rem;
`;
const AddressPopup = styled.div`
  margin-top: 100px;
  position: absolute;
  width: 450px;
  height: 400px;
  border: 1px solid #333;
  margin-left: 110px;
  top: -10px;
  display: flex;
`;
const AddressWrap = styled.div`
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
`;
const MoreAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;
const MoreAddressInput = styled.input`
  color: #aaa;
`;
