import React from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { money } from "../func";
import {
  cartDeleteItem,
  cartMinusCount,
  cartPlusCount,
} from "../Redux/cartSlice";
import * as S from "../component/cart/CartStyles";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Layout>
      <S.CartDiv1>
        <S.CartTable>
          <S.CartThead>
            <tr>
              <td>
                <S.CartCheckbox type="checkbox" />
              </td>
              <td>item</td>
              <td>name</td>
              <td>price</td>
              <td>size</td>
              <td>count</td>
              <td>total price</td>
            </tr>
          </S.CartThead>
          <tbody>
            {state.cart.map((item) => {
              return (
                <S.CartTr key={item.id}>
                  <S.CartTd>
                    <S.CartCheckbox type="checkbox" />
                  </S.CartTd>
                  <td>
                    <S.CartImg src={item.img} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} KRW</td>
                  <td>{item.size}</td>
                  <td>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(cartMinusCount(item.id));
                      }}>
                      -
                    </S.CartSpan1>
                    <S.CartSpan2>{item.count}</S.CartSpan2>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(cartPlusCount(item.id));
                      }}>
                      +
                    </S.CartSpan1>
                  </td>
                  <td>{money(item.price * item.count)} KRW</td>
                  <td>
                    <S.CartDelete
                      onClick={() => {
                        dispatch(cartDeleteItem(item.id));
                      }}>
                      Delete
                    </S.CartDelete>
                  </td>
                </S.CartTr>
              );
            })}
          </tbody>
          <tfoot>
            <S.CartTr>
              <S.CartTfoot1>Delete</S.CartTfoot1>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <S.CartTfoot2>Buy</S.CartTfoot2>
            </S.CartTr>
          </tfoot>
        </S.CartTable>
      </S.CartDiv1>
    </Layout>
  );
};

export default Cart;
