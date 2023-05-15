import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { money } from "../../func";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementLikes } from "../../store";

const ItemDetailRight = ({ filteredItems }) => {
  const { id } = useParams();
  const findItem = filteredItems.find((item) => item.id == id);
  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSizeChange = (e) => {
    setItemSize(e.target.value);
  };

  return (
    <>
      <div className="itemDetail_right">
        <div className="itemDetail_info1">
          {/* [상품 이름] */}
          <h2 className="itemDetail_name">{findItem.name}</h2>
          {/* [상품 가격] */}
          <div>{money(findItem.price)} KRW</div>
          <div>
            {findItem.likes}
            <button>like</button>
          </div>
          <select
            className="itemDetail_size"
            value={itemSize}
            onChange={handleSizeChange}>
            <option value="">select size</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          {itemSize && (
            <div className="itemDetail_info">
              <span>{findItem.name}</span>
              <span className="itemDetail_span1">{itemSize}</span>
              <span className="itemDetail_span1">{findItem.price} KRW</span>
              <span
                className="itemDetail_span1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCount(count - 1);
                }}>
                -
              </span>
              {/* 수량 */}
              <span className="itemDetail_span1">{count}</span>
              <span
                className="itemDetail_span1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCount(count + 1);
                }}>
                +
              </span>
              <div className="itemDetail_div1">
                <span className="itemDetail_span2">Total</span>
                {/* 총 가격(가격 * 수량) */}
                <span className="itemDetail_span3">
                  {money(findItem.price * count)} KRW
                </span>
              </div>
            </div>
          )}
          <div className="itemDetail_div2">
            <span
              className="itemDetail_buy"
              onClick={() => {
                dispatch(
                  addItem({
                    id: findItem.id,
                    img: findItem.img,
                    name: findItem.name,
                    price: findItem.price,
                    size: itemSize,
                    count: count,
                  })
                );
                navigate("/cart");
              }}>
              Cart
            </span>
            <span className="itemDetail_buy">Buy</span>
          </div>
          {/* 사이즈 정보 */}
          <div className="itemDetail_sizeInfo">
            <div>size</div>
            <div className="itemDetail_sizeInfo1">
              46 size : 어깨 49, 가슴단면 60, 팔길이 25, 소매단면 14, 총장 67
              <br />
              48 size : 어깨 51, 가슴단면 62.5, 팔길이 26, 소매단면 15, 총장 68
              <br />
              50 size : 어깨 53, 가슴단면 65, 팔길이 27, 소매단면 15, 총장 69
            </div>
          </div>
          {/* 옷 상세 내용 */}
          <div className="itemDetail_content">
            <div>content</div>
            <div className="itemDetail_content1">
              구김없고 탄탄한 소재의 프리미엄 롱슬리브 [코튼폴리][세미오버]
              라운드 티입니다.
              <br />
              일반 티셔츠제품의 에리(목)부분을 두께1.5cm제작,
              <br />
              또한 두줄침수가 포함되어 목부분의 내구성을 더욱 높인 제품입니다.
              <br />
              <br />
              많은 것들을 절제하고 정제하였습니다.
              <br />
              ‘아가일 패턴’을 활용하여 단순하지만 단조롭지 않도록
              표현하였습니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailRight;
