import React, { useState } from "react";
import items from "../../db/items.json";
import { Link } from "react-router-dom";
import * as S from "../item/ItemStyles";
import Pagination from "../pagination/Pagination";

const ITEMS_PER_PAGE = 8; // 한 페이지에 보여줄 아이템 개수

const TopItem = () => {
  const [selectedCategory, setSelectedCategory] = useState("tops");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  //[현재 페이지에 해당하는 아이템들을 가져오는 함수]
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, endIndex);
  };

  //[전체 페이지 개수 계산]
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  //[페이지 번호 변경 시 처리하는 함수]
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <S.ItemListUl>
        {getCurrentItems().map((item, i) => {
          return (
            <S.ItemListli key={item.id}>
              <Link to={`/item/${item.id}`}>
                <S.ItemListImg src={item.img[0]} alt="" />
                <S.ItemListDiv1>{item.name}</S.ItemListDiv1>
                <S.ItemListDiv2>{item.price} KRW</S.ItemListDiv2>
              </Link>
            </S.ItemListli>
          );
        })}
      </S.ItemListUl>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default TopItem;
