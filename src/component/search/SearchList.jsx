import React from "react";
import SearchItem from "./SearchItem";
import * as S from "../item/ItemStyles";

const SearchList = () => {
  return (
    <>
      <S.ItemListDiv>
        <SearchItem />
      </S.ItemListDiv>
    </>
  );
};

export default SearchList;
