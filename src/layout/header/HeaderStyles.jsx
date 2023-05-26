import { styled } from "styled-components";

export const HeaderCotainer = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 3.125rem;
  z-index: 3;
  box-shadow: 0 0.25rem 0.25rem -0.25rem rgba(0, 0, 0, 0.2);
`;
export const HeaderWarp = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.625rem;
  max-width: 100%;
  justify-content: space-between;
`;
export const HeaderWarp1 = styled.div`
  margin-left: 1.25rem;
  display: flex;
  align-items: center;
`;
export const HeaderImg1 = styled.img`
  height: 1.5625rem;
  width: 1.25rem;
  cursor: pointer;
  margin-right: 0.625rem;
`;
export const HeaderH3 = styled.h3`
  color: #333;
  font-size: 1.375rem;
  font-weight: 500;
  cursor: pointer;
`;
export const HeaderWarp2 = styled.div`
  display: flex;
  align-items: center;
  max-width: 62.5rem;
  margin: 0 auto;
`;
export const HeaderUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  gap: 1.875rem;
  align-items: center;
  @media (max-width: 62.5rem) {
    justify-content: center;
  }
`;
export const HeaderLi = styled.li`
  font-size: 0.9375rem;
  color: #333;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  @media (max-width: 62.5rem) {
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
    flex-shrink: 0;
    display: none;

    &:nth-child(-n + 3) {
      display: flex;
    }
  }
`;
export const HeaderInput = styled.input`
  width: 7.5rem;
  background: none;
  border: none;
  box-shadow: none;
  border-bottom: 0.0625rem solid #000;
  color: #333;
  font-size: 0.75rem;
`;
export const HeaderImg2 = styled.img`
  width: 50%;
  margin-top: 0.125rem;
`;
export const HeaderWarp3 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.875rem;
  @media (max-width: 50rem) {
    display: none;
  }
`;
export const HeaderDiv1 = styled.div`
  font-weight: 500;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #666;
  line-height: 1.625rem;
  padding: 0 0.625rem;
  height: 1.625rem;
  border: 0.0625rem solid #e1e2e3;
  border-radius: 0.9375rem;
  cursor: pointer;
`;
export const HeaderDiv2 = styled.div`
  font-size: 1.0625rem;
  color: #333;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  margin: 0.4375rem 0.625rem;
  width: 0.0625rem;
  height: 0.75rem;
  background-color: #e1e2e3;
  cursor: pointer;
`;
export const HeaderLogin = styled.div`
  display: flex;
  margin-right: 70px;
  gap: 3px;
`;
export const Dropdown = styled.div``;

export const LoginArea = styled.div`
  font-weight: 500;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #666;
  line-height: 1.625rem;
  padding: 0 0.625rem;
  height: 1.625rem;
  border: 0.0625rem solid #e1e2e3;
  border-radius: 0.9375rem;
  cursor: pointer;
`;
export const Help = styled.div`
  font-weight: 500;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #666;
  line-height: 1.625rem;
  padding: 0 0.625rem;
  height: 1.625rem;
  border: 0.0625rem solid #e1e2e3;
  border-radius: 0.9375rem;
  cursor: pointer;
`;
export const DropdownMenu = styled.ul`
  border: 1px solid #e1e2e3;
`;
export const DropdownMenuLi = styled.li`
  height: 30px;
  text-align: center;
  background-color: #fff;
  line-height: 2;
  border: 1px solid #e1e2e3;
`;
