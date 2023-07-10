import styled from "styled-components";
import { useEffect } from "react";
import DaumPostcode from "react-daum-postcode";

export default function AddressInput({
  register,
  setValue,
  openPopup,
  setOpenPopup,
}) {
  useEffect(() => {
    const handlePopupClose = (e) => {
      if (openPopup && !e.target.classList.contains("ChkBtn")) {
        setOpenPopup(false);
      }
    };

    document.addEventListener("click", handlePopupClose);
    return () => {
      document.removeEventListener("click", handlePopupClose);
    };
  }, [openPopup, setOpenPopup]);

  const handlePostcode = (data) => {
    const { address, zonecode } = data;

    setValue("basicaddress", address);
    setValue("zonecode", zonecode);
    setOpenPopup(false);
  };

  const openPostcodeModal = () => {
    setOpenPopup(true);
  };

  return (
    <div>
      <AddressWrap>
        <input
          type="text"
          placeholder="address"
          {...register("zonecode")}
          required
          readOnly
        />
        <button type="button" className="ChkBtn" onClick={openPostcodeModal}>
          우편번호
        </button>
      </AddressWrap>
      <MoreAddress>
        <input
          type="text"
          placeholder="기본주소"
          {...register("basicaddress")}
          readOnly
        />
        <input
          type="text"
          placeholder="상세주소"
          {...register("detailAddress")}
        />
      </MoreAddress>
      <div>
        {openPopup && (
          <PostWrap style={{ zIndex: "3" }}>
            <DaumPostcode onComplete={handlePostcode} animation />
          </PostWrap>
        )}
      </div>
    </div>
  );
}

const AddressWrap = styled.div`
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
  input {
    width: 12.1875rem !important;
    color: #aaa;
  }
  button {
    background-color: #fff;
    cursor: pointer;
    color: #aaa;
    width: 5rem;
  }
`;

const MoreAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  input {
    color: #aaa;
  }
`;

const PostWrap = styled.div`
  position: absolute;
  top: -10px;
  display: block;
  width: 450px;
  height: 400px;
  border: 1px solid #333;
  right: -30px;
`;
