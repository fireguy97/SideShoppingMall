import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../item/ItemStyles";
import Pagination from "../pagination/Pagination";
import axios from "axios";

const ITEMS_PER_PAGE = 8; // 한 페이지에 보여줄 아이템 개수

const TopItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);

  //[현재 페이지에 해당하는 아이템들을 가져오는 함수]
  const getCurrentItems = useCallback(() => {
    if (productList && productList.items) {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return productList.items.slice(startIndex, endIndex);
    } else {
      return [];
    }
  }, [currentPage, productList]);

  //[전체 페이지 개수 계산]
  const totalPages = Math.ceil(productList.counts / ITEMS_PER_PAGE);

  //[페이지 번호 변경 시 처리하는 함수]
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    console.log(currentPage);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://119.193.0.189:8080/productList?category=1&page=${currentPage}&order=1`
        );
        setProductList(response.data);
        console.log(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

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

export default TopItem;
