import { styled } from "styled-components";

export const MainBanner = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 56.25rem;
`;
export const MainPrevBtn = styled.button`
  font-size: 3.125rem;
  color: #fff;
  opacity: 0.3;
  width: 10%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0;
  left: 0;
  @media (max-width: 50rem) {
    font-size: 2.5rem;
  }
`;
export const MainNextBtn = styled.button`
  font-size: 3.125rem;
  color: #fff;
  opacity: 0.3;
  width: 10%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0;
  right: 0;
  @media (max-width: 50rem) {
    font-size: 2.5rem;
  }
`;
export const MainWrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const MainImg = styled.img`
  margin-top: 6.25rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  object-fit: cover;
  @media (max-width: 50rem) {
    margin-top: 3.125rem;
  }
`;
