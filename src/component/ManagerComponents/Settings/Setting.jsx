import styled from "styled-components";

export default function Setting() {
  return (
    <StyledSetting>
      <Title>기본환경설정</Title>
      <SubTitleWrap>
        <SubTitle>Shop</SubTitle>
        <SubTitle>기타 설정</SubTitle>
      </SubTitleWrap>
      <MainDiv>
        <ShopDiv>
          <ShopInfoUl>
            <li>쇼핑몰명</li>
            <li>사업자 유형</li>
            <li>회사명</li>
            <li>대표자명</li>
            <li>사업자 등록번호</li>
            <li>업태</li>
            <li>종목</li>
            <li>사업장 우편번호</li>
            <li>사업장 주소</li>
            <li>대표 전화번호</li>
            <li>팩스번호</li>
            <li>대표 이름</li>
            <li>대표 email</li>
          </ShopInfoUl>
          <ShopInfoInputWrap>
            <input type="text"></input>
            <input type="text"></input>
            <SelectTaxWrap>
              <LabelWrap>
                <label>일반과세자</label>
                <input
                  type="radio"
                  htmlFor="normal"
                  value="normalTax"
                  id="normal"
                  name="taxation"
                ></input>
              </LabelWrap>
              <LabelWrap>
                <label htmlFor="simplified">간이과세자</label>
                <input
                  type="radio"
                  value="simpleTax"
                  id="simplified"
                  name="taxation"
                ></input>
              </LabelWrap>
              <LabelWrap>
                <label htmlFor="dutyFree">면세과세자</label>
                <input
                  type="radio"
                  value="dutyFreeTax"
                  id="dutyFree"
                  name="taxation"
                ></input>
              </LabelWrap>
            </SelectTaxWrap>
            <input type="text" placeholder="홍길동"></input>
            <input type="text" placeholder="000-00-00000"></input>
            <input type="text" placeholder="소매업"></input>
            <input type="text" placeholder="전자상거래업"></input>
            <input type="text"></input>
            <input type="text" placeholder="OO도 OO시 OO구 OO동 123-45"></input>
            <input type="text" placeholder="02-0000-0000"></input>
            <input type="text" placeholder="02-0000-0000"></input>
            <input type="text" placeholder="홍길동"></input>
            <input type="text" placeholder="ex@abc.com"></input>
          </ShopInfoInputWrap>
          <EtcSettingUl>
            <li>상담가능시간</li>
            <li>점심시간</li>
            <li>휴무일</li>
            <li>장바구니 보관일수</li>
            <li>미입금 주문내역</li>
            <li>구매확정 강제승인</li>
          </EtcSettingUl>
          <EtcSettingInputWrap>
            <input type="text" placeholder="예) 오전 10시~ 오후06시" />
            <input type="text" placeholder="예) 오후 12시~ 오후01시" />
            <input type="text" placeholder="예) 수요일" />
            <AvailableDate>
              <input type="text" placeholder="예) 7" />
              <label htmlFor=""> 일 이후 자동삭제</label>
              <input type="text" placeholder="예) 7" />
              <label htmlFor=""> 일 이후 자동삭제</label>
              <input type="text" placeholder="예) 7" />
              <label htmlFor=""> 일 이후 자동삭제</label>
            </AvailableDate>
          </EtcSettingInputWrap>
        </ShopDiv>
      </MainDiv>
    </StyledSetting>
  );
}
const StyledSetting = styled.div``;
const Title = styled.h3`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;
const SubTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 400px;
`;
const SubTitle = styled.h3`
  font-size: 25px;
  position: relative;
  margin-bottom: 20px;
  color: lightgray;
  font-weight: 600;
`;
const ShopInfoUl = styled.ul`
  padding-top: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 150px;

  li {
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 1.8;
    background-color: #e1e2e3;
  }
`;
const MainDiv = styled.div``;
const ShopDiv = styled.div`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  width: 1060px;
  margin: 0 auto;
  display: flex;
  gap: 5px;
`;
const ShopInfoInputWrap = styled.div`
  margin-right: 120px;
  padding-top: 3px;
  padding-bottom: 3px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  input {
    height: 25px;
    width: 250px;
  }
`;
const SelectTaxWrap = styled.div`
  display: flex;

  label {
    font-size: 10px;
  }
  input {
    width: 13px;
    margin-bottom: 1px;
  }
`;
const LabelWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EtcSettingUl = styled.ul`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 150px;

  li {
    width: 150px;
    height: 65px;
    text-align: center;
    line-height: 4;
    background-color: #e1e2e3;
  }
`;
const EtcSettingInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  input {
    height: 60px;
    width: 250px;
  }
`;
const AvailableDate = styled.div`
  input {
    width: 120px;
    margin-bottom: 5px;
  }
`;
