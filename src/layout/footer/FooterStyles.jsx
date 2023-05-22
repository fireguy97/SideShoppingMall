import { styled } from "styled-components";

export const FooterCotainer = styled.footer`
  bottom: 0;
  font-weight: 300;
  font-size: 0.625rem;
`;
export const FooterTop = styled.div`
  padding: 1.875rem 1.875rem;
  @media (max-width: 50rem) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const FooterUl = styled.ul`
  width: 33%;
  list-style: none;
  display: inline-block;
  vertical-align: top;
  margin: 0;
  padding: 0;
  @media (max-width: 50rem) {
    width: 100%;
    margin-bottom: 1.25rem;
  }
`;
export const FooterLi = styled.li`
  color: #333;
  font-size: 0.6875rem;
  line-height: 1.375rem;
  text-align: left;
`;
