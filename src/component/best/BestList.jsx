import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "../item/ItemStyles";

const BestList = ({ filteredItems }) => {
  const { id } = useParams();

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

  return (
    <>
      <S.ItemListDiv>
        <S.ItemListUl>
          {bestItems.map((item, i) => {
            return (
              <S.ItemListli key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <S.ItemListImg src={item.img} alt=""></S.ItemListImg>
                  <S.ItemListDiv1>{item.name}</S.ItemListDiv1>
                  <S.ItemListDiv2>{item.price}</S.ItemListDiv2>
                </Link>
              </S.ItemListli>
            );
          })}
        </S.ItemListUl>
      </S.ItemListDiv>
    </>
  );
};

export default BestList;
