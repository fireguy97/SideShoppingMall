import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { money } from "../func";
import {
  cartDeleteItem,
  cartMinusCount,
  cartPlusCount,
} from "../Redux/cartSlice";
import * as S from "../component/cart/CartStyles";
import { buyAddItem } from "../Redux/buySlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState(
    Array(cartItems.length).fill(false)
  );
  const [checkAll, setCheckAll] = useState(false);
  useEffect(() => {
    // 모든 개별 상품의 체크박스가 선택되었는지 확인
    const allChecked =
      cartItems.length > 0 && checkedItems.every((item) => item);
    setCheckAll(allChecked);
  }, [checkedItems, cartItems]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    setCheckAll(updatedCheckedItems.every((item) => item));
  };

  const handleCheckAllChange = () => {
    const updatedCheckedItems = Array(cartItems.length).fill(!checkAll);
    setCheckedItems(updatedCheckedItems);
    setCheckAll(!checkAll);
  };

  const handleDelete = () => {
    const selectedItems = cartItems.filter(
      (item, index) => checkedItems[index]
    );

    selectedItems.forEach((item) => {
      dispatch(cartDeleteItem({ id: item.id, size: item.size }));
    });
  };

  const handleBuy = () => {
    const selectedItems = cartItems.filter(
      (item, index) => checkedItems[index]
    );
    selectedItems.forEach((item) => {
      dispatch(buyAddItem(item));
      dispatch(cartDeleteItem({ id: item.id, size: item.size }));
    });
    navigate("/buy");
  };

  return (
    <Layout>
      <S.CartDiv1>
        <S.CartTable>
          <S.CartThead>
            <tr>
              <td>
                <S.CartCheckbox
                  type="checkbox"
                  checked={checkAll}
                  onChange={handleCheckAllChange}
                />
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
            {cartItems.map((item, index) => {
              return (
                <S.CartTr key={item.id}>
                  <S.CartTd>
                    <S.CartCheckbox
                      type="checkbox"
                      checked={checkAll || checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </S.CartTd>
                  <td>
                    <S.CartImg src={item.img[0]} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} KRW</td>
                  <td>{item.size}</td>
                  <td>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(
                          cartMinusCount({ id: item.id, size: item.size })
                        );
                      }}>
                      -
                    </S.CartSpan1>
                    <S.CartSpan2>{item.count}</S.CartSpan2>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(
                          cartPlusCount({ id: item.id, size: item.size })
                        );
                      }}>
                      +
                    </S.CartSpan1>
                  </td>
                  <td>{money(item.price * item.count)} KRW</td>
                  <td>
                    <S.CartDelete
                      onClick={() => {
                        dispatch(
                          cartDeleteItem({ id: item.id, size: item.size })
                        );
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
              <S.CartTfoot1 onClick={handleDelete}>Delete</S.CartTfoot1>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <S.CartTfoot2 onClick={handleBuy}>Buy</S.CartTfoot2>
            </S.CartTr>
          </tfoot>
        </S.CartTable>
      </S.CartDiv1>
    </Layout>
  );
};

export default Cart;
