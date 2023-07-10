import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { setUserInfo } from "../../Redux/userInfoSlice";
import DaumPostcode from "react-daum-postcode";
import { API_URL } from "../../api/api";

export default function UserInfoFix() {
  const [detailAddress, setDetailAddress] = useState("");
  const [basicAddress, setBasicAddress] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);

  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const keyId = localStorage.getItem("id");
    if (keyId) {
      dispatch(setUserInfo({ userId: keyId }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userInfo.userId) {
      const fetchUserInfo = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/getUserInfo?id=${userInfo.userId}`
          );
          const fetchedUserInfo = response.data;
          console.log(fetchedUserInfo);
          dispatch(setUserInfo(fetchedUserInfo.userInfo));
        } catch (error) {
          console.error("Error", error);
        }
      };

      fetchUserInfo();
    }
  }, [userInfo.userId, dispatch]);

  const handlePostcode = () => {
    const address1 = basicAddress + " " + detailAddress;
    dispatch(setUserInfo({ address1 }));
    setOpenPopup(false);
  };

  const openPostcodeModal = () => {
    setOpenPopup(true);
  };
  const postcodeStyle = {
    position: "absolute",
    top: "-10px",
    display: "block",
    width: "450px",
    height: "400px",
    border: "1px solid #333",
    marginLeft: "130px",
  };
  const outsidePostcodeClick = (e) => {
    if (openPopup && popupRef.current !== e.target) {
      setOpenPopup(false);
    }
  };
  return (
    <InfoSubstance ref={popupRef} onClick={outsidePostcodeClick}>
      <InfoCategory>
        <li>이름</li>
        <ReadOnlyInput type="text" value={userInfo.name} readOnly />
        <li>아이디</li>
        <ReadOnlyInput type="ID" value={userInfo.loginId} readOnly />
        <li>생일</li>
        <ReadOnlyInput type="text" value={userInfo.birth} readOnly />
        <li>핸드폰 번호</li>
        <input
          type="tel"
          value={userInfo.phone}
          onChange={(e) => dispatch(setUserInfo({ phone: e.target.value }))}
        />
        <li>이메일</li>
        <input
          type="email"
          value={userInfo.email}
          onChange={(e) => dispatch(setUserInfo({ email: e.target.value }))}
        />

        <li>주소</li>
        <MoreAddress>
          <input
            type="text"
            placeholder="기본주소"
            readOnly
            value={userInfo.address}
            onChange={(e) => setBasicAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="상세주소"
            onChange={(e) => setDetailAddress(e.target.value)}
          />
          <button type="button" className="ChkBtn" onClick={openPostcodeModal}>
            주소검색
          </button>
        </MoreAddress>
        <li>SNS 수신동의</li>
        <AgreeWrap>
          <Agree htmlFor="yes">Y</Agree>
          <input name="agreeOption" type="radio" value="yes" />
          <DisAgree htmlFor="no">N</DisAgree>
          <input name="agreeOption" type="radio" value="no" />
        </AgreeWrap>
      </InfoCategory>

      {openPopup && (
        <div>
          {" "}
          <DaumPostcode
            style={postcodeStyle}
            animation
            onComplete={handlePostcode}
          />
        </div>
      )}
    </InfoSubstance>
  );
}
const InfoSubstance = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const InfoCategory = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  gap: 2px;
  ul li {
    list-style: none;
  }
  li {
    height: 35px;
    text-align: center;
    font-size: 12px;
    line-height: 3;
    font-weight: 600;
    flex-basis: 30%;
  }
  input {
    width: 12rem;
  }
`;
const AgreeWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  gap: 15px;
  align-items: center;
  input {
    width: 10px;
  }
`;
const Agree = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;
const DisAgree = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;
const ReadOnlyInput = styled.input`
  background-color: #e1e2e3;
  border: 1px solid #333;
  color: #aaa;
  width: 12.1rem !important;
`;
const MoreAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  input {
    width: 12rem !important;
    color: #aaa;
  }
  button {
    background-color: #333;
    cursor: pointer;
    color: #fff;
    width: 12.5rem;
    border: 1px solid #e1e2e3;
  }
`;

// const updateUserInfo = async (data) => {
//   const { basicaddress, detailAddress, ...addrestData } = data;
//   const allAddress = {
//     ...addrestData,
//     address: `${basicaddress}/${detailAddress}`,
//   };
//   try {
//     await axios.post(
//       `http://119.193.0.189:8080/updateUserInfo?id=${userId}`,
//       {
//         name,
//         loginId,
//         birth,
//         phone,
//         email,
//         allAddress,
//       }
//     );
//     console.log("updated");
//   } catch (error) {
//     console.error("Error", error);
//   }
// };

// const updateUserInfoData = (data) => {
//   const { basicaddress, detailAddress, ...addrestData } = data;
//   const allAddress = {
//     ...addrestData,
//     address: `${basicaddress}/${detailAddress}`,
//   };
//   setUserInfoUpdate({
//     name,
//     loginId,
//     birth,
//     phone,
//     email,
//     allAddress,
//   });
// };

// const handleUpdate =() => {
// updateUserInfoData()
// }
