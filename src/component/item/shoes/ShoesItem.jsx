import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../ItemStyles";
import Pagination from "../pagination/Pagination";
import axios from "axios";

const ITEMS_PER_PAGE = 8; // 한 페이지에 보여줄 아이템 개수

const ShoesItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [productCounts, setProductCounts] = useState(0);

  const totalPages = Math.ceil(productCounts / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 첫 번째 useEffect는 페이지 총 개수를 구하기 위한 요청을 합니다.
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get(
          `http://119.193.0.189:8081/productList?category=3&page=1&order=1`
        );
        setProductCounts(response.data.counts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCounts();
  }, []);

  // 두 번째 useEffect는 현재 페이지의 아이템을 가져옵니다.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://119.193.0.189:8081/productList?category=3&page=${currentPage}&order=1`
        );
        setCurrentItems(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      <S.ItemListUl>
        {currentItems.map((item, i) => (
          <S.ItemListli key={item.id}>
            <Link to={`/getProduct?id=${item.id}`}>
              <S.ItemListImg src={item.thumbnail} alt="" />
              <S.ItemListDiv1>{item.name}</S.ItemListDiv1>
              <S.ItemListDiv2>{item.price} KRW</S.ItemListDiv2>
            </Link>
          </S.ItemListli>
        ))}
      </S.ItemListUl>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ShoesItem;
