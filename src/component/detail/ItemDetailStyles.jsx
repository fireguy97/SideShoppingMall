import { styled } from "styled-components";

export const ItemDetailContainer = styled.div`
  width: 100%;
  margin: 6.25rem;
`;
export const ItemDetailLeft = styled.div`
  width: 60%;
  display: inline-block;
  position: relative;
  @media (max-width: 800px) {
    width: 80%;
  }
`;
export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 2rem;
  z-index: 10;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;
export const ItemDetailLeftImg = styled.img`
  width: 100%;
  height: 50rem;
  @media (max-width: 800px) {
    width: 80%;
    height: auto;
  }
`;
export const ItemDetailRight = styled.div`
  width: 40%;
  color: #333;
  display: inline-block;
  font-size: 1.125rem;
  float: right;
  @media (max-width: 800px) {
    width: 80%;
    float: none;
  }
`;
export const ItemDetailInfo1 = styled.div`
  padding: 3.125rem 3.125rem;
  line-height: 1.5625rem;
`;
export const ItemDetailName = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.625rem;
`;
export const ItemDetailSize = styled.select`
  width: 50%;
  height: 1.5625rem;
  font-size: 0.875rem;
  color: #333;
  background: transparent;
  border: 0.0625rem solid #666;
  margin-top: 3.125rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ItemDetailInfo2 = styled.div`
  margin-top: 3.125rem;
`;
export const ItemDetailSpan1 = styled.span`
  padding-left: 1.25rem;
`;
export const ItemDetailSpan2 = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`;
export const ItemDetailSpan3 = styled.span`
  padding-left: 14.0625rem;
`;
export const ItemDetailDiv1 = styled.div`
  margin-top: 1.5625rem;
`;
export const ItemDetailDiv2 = styled.div`
  width: 60%;
  margin-top: 3.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ItemDetailBuy = styled.span`
  border: 0.0625rem solid #111;
  text-align: center;
  display: block;
  padding: 20px;
  cursor: pointer;
`;
export const ItemDetailSizeInfo1 = styled.div`
  margin-top: 1.875rem;
`;
export const ItemDetailSizeInfo2 = styled.div`
  line-height: 1.375rem;
  margin-top: 0.625rem;
  font-size: 0.9375rem;
`;
export const ItemDetailContent1 = styled.div`
  margin-top: 1.875rem;
`;
export const ItemDetailContent2 = styled.div`
  line-height: 1.375rem;
  margin-top: 0.625rem;
  font-size: 0.9375rem;
`;
export const ItemDetailReview = styled.div`
  padding: 1.875rem;
  width: 52%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 1.25rem;
  }
`;
export const ItemDetailReviewHeader = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const ItemDetailReviewH3 = styled.h3`
  float: left;
  font-size: 0.9375rem;
`;
export const ItemDetailReviewDiv1 = styled.div`
  float: right;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
`;
export const ReviewInputModal = styled.div`
  margin-top: 3.125rem;
  padding: 1.25rem;
  background: #eee;
  text-align: left;
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
    width: 80%;
  }
`;
export const ReviewInput1 = styled.input`
  padding: 0.3125rem;
  width: 7.5rem;
  background: none;
  border: none;
  box-shadow: none;
  border-bottom: 0.0625rem solid #000;
  color: #333;
  font-size: 0.75rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const ReviewInput2 = styled.input`
  margin-left: 1.875rem;
  padding: 0.3125rem;
  width: 28.125rem;
  background: none;
  border: none;
  box-shadow: none;
  border-bottom: 0.0625rem solid #000;
  color: #333;
  font-size: 0.75rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const ReviewInput3 = styled.input`
  margin-left: 2.5rem;
`;
export const ReviewSpan1 = styled.span`
  float: right;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  margin-bottom: 0.9375rem;
`;
export const ItemDetailReviewTable = styled.table`
  margin-top: 2.5rem;
  color: #666;
  width: 100%;
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`;
export const ItemDetailReviewTr = styled.tr`
  width: 100%;
  height: 1.875rem;
  font-size: 0.875rem;
  border-bottom: 0.0625rem solid #111;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;
export const ItemDetailReviewTd1 = styled.td`
  width: 6.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const ItemDetailReviewTd2 = styled.td`
  width: 43.75rem;
  margin-left: 0.625rem;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const ItemDetailReviewTd3 = styled.td`
  width: 9.375rem;
  margin-left: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;
export const ReviewDetailModal = styled.div`
  margin-top: 3.125rem;
  padding: 1.25rem;
  background: #eee;
  text-align: left;
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
    width: 60%;
  }
`;
export const ReviewDetailH3 = styled.h3`
  float: left;
  font-size: 1.125rem;
  color: #171717;
`;
export const ReviewDetailDiv1 = styled.div`
  float: right;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  margin-bottom: 0.9375rem;
  @media screen and (max-width: 800px) {
    width: 20%;
  }
`;
export const ReviewDetailContent = styled.div`
  margin-top: 2.5rem;
  line-height: 1.25rem;
`;
export const ReviewDetailDiv3 = styled.div`
  margin-top: 1.25rem;
`;
export const ReviewDetailDiv4 = styled.div`
  margin-top: 1.25rem;
`;
export const ReviewDetailImg = styled.img`
  max-width: 100%;
  height: auto;
`;
