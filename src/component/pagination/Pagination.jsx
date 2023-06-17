import React from "react";
import * as S from "./PaginationStyles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <>
      <S.PaginationWrap>
        <S.PageNumber
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          {"<"}
        </S.PageNumber>
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
        <S.PageNumber
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          {">"}
        </S.PageNumber>
      </S.PaginationWrap>
    </>
  );
};

export default Pagination;
