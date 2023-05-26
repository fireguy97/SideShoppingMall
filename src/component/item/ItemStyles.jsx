import { styled } from "styled-components";

export const ItemListDiv = styled.div`
  margin-top: 6.25rem;
`;
export const ItemListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  width: 100%;
  list-style: none;
`;
export const ItemListli = styled.li`
  margin: 0 auto;
  padding: 0.625rem;
  width: 25rem;
  height: 42.5rem;
`;
export const ItemListImg = styled.img`
  width: 100%;
  height: 36.25rem;
  cursor: pointer;
`;
export const ItemListDiv1 = styled.div`
  margin-top: 0.9375rem;
  color: #333;
  font-size: 1rem;
  line-height: 1.375rem;
`;
export const ItemListDiv2 = styled.div`
  color: #333;
  font-size: 0.8125rem;
  line-height: 1.375rem;
`;
