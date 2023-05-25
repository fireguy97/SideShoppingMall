import React from "react";
import Layout from "../layout/Layout";
import * as S from "../component/cart/CartStyles";
import { money } from "../func";
import { useSelector } from "react-redux";

const Order = () => {
  const orderedItems = useSelector((state) => state.order);

  return (
    <>
      <Layout>
        <S.CartDiv1>
          <S.CartTable>
            <S.CartThead>
              <tr>
                <td>item</td>
                <td>name</td>
                <td>price</td>
                <td>size</td>
                <td>count</td>
                <td>total price</td>
              </tr>
            </S.CartThead>
            <tbody>
              {orderedItems.map((item) => {
                return (
                  <S.CartTr key={item.id}>
                    <td>
                      <S.CartImg src={item.img[0]} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price} KRW</td>
                    <td>{item.size}</td>
                    <td>{item.count}</td>
                    <td>{money(item.price * item.count)} KRW</td>
                  </S.CartTr>
                );
              })}
            </tbody>
          </S.CartTable>
        </S.CartDiv1>
      </Layout>
    </>
  );
};

export default Order;
