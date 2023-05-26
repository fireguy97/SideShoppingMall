import React from "react";
import * as S from "./PaginationStyles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <>
      <S.PaginationWrap>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <S.PageNumber
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}>
              {page}
            </S.PageNumber>
          )
        )}
      </S.PaginationWrap>
    </>
  );
};

export default Pagination;
