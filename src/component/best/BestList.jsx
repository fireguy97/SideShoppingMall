import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "../item/ItemStyles";
import Pagination from "../pagination/Pagination";

const ITEMS_PER_PAGE = 8; // 한 페이지에 보여줄 아이템 개수

const BestList = ({ filteredItems }) => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [findItem, setFindItem] = useState(
    filteredItems.find((item) => item.id === id)
  );

  //[filteredItems 배열이 업데이트될 때마다 findItem을 업데이트하고 최신화]
  useEffect(() => {
    setFindItem(filteredItems.find((item) => item.id === id));
  }, [filteredItems, id]);

  //[filteredItems 배열에서 좋아요가 가장 많은 상품을 가져오는 함수]
  const getBestItem = () => {
    const sortedItem = [...filteredItems].sort((a, b) => b.likes - a.likes);
    return sortedItem.slice(0, 8);
  };

  // [베스트 상품 목록을 가져옴]
  const bestItems = getBestItem();

  //[현재 페이지에 해당하는 아이템들을 가져오는 함수]
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return bestItems.slice(startIndex, endIndex);
  };

  //[전체 페이지 개수 계산]
  const totalPages = Math.ceil(bestItems.length / ITEMS_PER_PAGE);

  //[페이지 번호 변경 시 처리하는 함수]
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <S.ItemListDiv>
        <S.ItemListUl>
          {getCurrentItems().map((item, i) => {
            return (
              <S.ItemListli key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <S.ItemListImg src={item.img[0]} alt="" />
                  <S.ItemListDiv1>{item.name}</S.ItemListDiv1>
                  <S.ItemListDiv2>{item.price}</S.ItemListDiv2>
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
      </S.ItemListDiv>
    </>
  );
};

export default BestList;
