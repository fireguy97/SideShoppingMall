import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { money } from "../func";
import { buyDeleteItem, buyMinusCount, buyPlusCount } from "../Redux/buySlice";
import * as S from "../component/cart/CartStyles";

const Buy = () => {
  const buyItems = useSelector((state) => state.buy);
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState(
    Array(buyItems.length).fill(false)
  );
  const [checkAll, setCheckAll] = useState(false);
  useEffect(() => {
    // 모든 개별 상품의 체크박스가 선택되었는지 확인
    const allChecked =
      buyItems.length > 0 && checkedItems.every((item) => item);
    setCheckAll(allChecked);
  }, [checkedItems, buyItems]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    setCheckAll(updatedCheckedItems.every((item) => item));
  };

  const handleCheckAllChange = () => {
    const updatedCheckedItems = Array(buyItems.length).fill(!checkAll);
    setCheckedItems(updatedCheckedItems);
    setCheckAll(!checkAll);
  };

  const handleDelete = () => {
    const selectedItems = buyItems.filter((item, index) => checkedItems[index]);

    selectedItems.forEach((item) => {
      dispatch(buyDeleteItem(item.id));
    });
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
            {buyItems.map((item, index) => {
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
                    <S.CartImg src={item.img} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} KRW</td>
                  <td>{item.size}</td>
                  <td>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(buyMinusCount(item.id));
                      }}>
                      -
                    </S.CartSpan1>
                    <S.CartSpan2>{item.count}</S.CartSpan2>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(buyPlusCount(item.id));
                      }}>
                      +
                    </S.CartSpan1>
                  </td>
                  <td>{money(item.price * item.count)} KRW</td>
                  <td>
                    <S.CartDelete
                      onClick={() => {
                        dispatch(buyDeleteItem(item.id));
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
              <S.CartTfoot2>Buy</S.CartTfoot2>
            </S.CartTr>
          </tfoot>
        </S.CartTable>
      </S.CartDiv1>
    </Layout>
  );
};

export default Buy;
