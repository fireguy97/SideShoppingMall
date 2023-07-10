import { styled } from "styled-components";

export const PaginationWrap = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  align-items: center;
`;
export const PageNumber = styled.li`
  cursor: pointer;
  margin-right: 8px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;
