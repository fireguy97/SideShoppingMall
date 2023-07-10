import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { money } from "../../../func";
import {
  buyDeleteItem,
  buyMinusCount,
  buyPlusCount,
} from "../../../Redux/buySlice";
import * as S from "../CartStyles";
import { useNavigate } from "react-router-dom";
import { orderAddItem } from "../../../Redux/orderSlice";

const Buy = () => {
  const buyItems = useSelector((state) => state.buy);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      dispatch(buyDeleteItem({ id: item.id, size: item.size }));
    });
  };

  const onClickPayment = () => {
    if (!window.IMP) return;
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp35857121"); // 가맹점 식별코드

    const selectedItems = buyItems.filter((item, index) => checkedItems[index]);
    const totalPrice = selectedItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: totalPrice, // 결제금액
      name: selectedItems.map((item) => item.name).join(", "), // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, error_msg } = response;

    if (success) {
      alert("결제 성공");
      const selectedItems = buyItems.filter(
        (item, index) => checkedItems[index]
      );
      selectedItems.forEach((item) => {
        dispatch(orderAddItem(item));
        dispatch(buyDeleteItem({ id: item.id, size: item.size }));
      });
      navigate("/order");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

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
                    <S.CartImg src={item.img[0]} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} KRW</td>
                  <td>{item.size}</td>
                  <td>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(
                          buyMinusCount({ id: item.id, size: item.size })
                        );
                      }}>
                      -
                    </S.CartSpan1>
                    <S.CartSpan2>{item.count}</S.CartSpan2>
                    <S.CartSpan1
                      onClick={() => {
                        dispatch(
                          buyPlusCount({ id: item.id, size: item.size })
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
                          buyDeleteItem({ id: item.id, size: item.size })
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
              <S.CartTfoot2 onClick={onClickPayment}>Buy</S.CartTfoot2>
            </S.CartTr>
          </tfoot>
        </S.CartTable>
      </S.CartDiv1>
    </Layout>
  );
};

export default Buy;
