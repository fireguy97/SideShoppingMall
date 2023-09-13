import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "../ItemStyles";
import Pagination from "../pagination/Pagination";
import axios from "axios";

const ITEMS_PER_PAGE = 8; // 한 페이지에 보여줄 아이템 개수

const SearchItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const [searchResults, setSearchResults] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0); // 아이템 전체 개수

  //[현재 페이지에 해당하는 아이템들을 가져오는 함수]
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return searchResults.slice(startIndex, endIndex);
  };

  //[전체 페이지 개수 계산]
  const totalPages = Math.ceil(totalItemCount / ITEMS_PER_PAGE);

  //[페이지 번호 변경 시 처리하는 함수]
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const searchText = location.search.split("=")[1]; // 검색 텍스트 추출
    if (searchText) {
      axios
        .get(`http://119.193.0.189:8081/searchProduct`, {
          params: { searchText: searchText },
        })
        .then((response) => {
          const data = response.data;
          setSearchResults(data.items); // 검색 결과의 items 프로퍼티를 searchResults로 설정
          setTotalItemCount(data.counts); // 아이템 전체 개수 설정
          console.log(data); // 변경된 검색 결과 출력
        })
        .catch((error) => {
          console.error("상품 검색 중 오류 발생:", error);
        });
    }
  }, [location.search, setSearchResults, setTotalItemCount]);

  return (
    <>
      <S.ItemListUl>
        {getCurrentItems().map((item, i) => {
          return (
            <S.ItemListli key={item.id}>
              <Link to={`/getProduct?id=${item.id}`}>
                <S.ItemListImg src={item.thumbnail} alt="" />
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

export default SearchItem;
