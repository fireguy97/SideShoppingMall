import React from "react";
import SearchItem from "./SearchItem";
import * as S from "../item/ItemStyles";

const SearchList = ({ searchResults }) => {
  return (
    <>
      <S.ItemListDiv>
        <S.ItemListUl>
          <SearchItem searchResults={searchResults} />
        </S.ItemListUl>
      </S.ItemListDiv>
    </>
  );
};

export default SearchList;
