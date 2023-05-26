import React from "react";
import SearchItem from "./SearchItem";
import * as S from "../item/ItemStyles";

const SearchList = ({ searchResults }) => {
  return (
    <>
      <S.ItemListDiv>
        <SearchItem searchResults={searchResults} />
      </S.ItemListDiv>
    </>
  );
};

export default SearchList;
