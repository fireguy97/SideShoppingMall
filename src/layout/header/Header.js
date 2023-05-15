import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "../../db/items.json";

const Header = () => {
  const [searchKeyWord, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // 폼 제출 이벤트의 기본 동작을 막음
    // 입력된 검색어를 소문자로 변환하여 검색어와 일치하는 아이템을 필터링하여 결과 배열 생성
    const results = items.filter((item) => {
      return item.name.toLowerCase().includes(searchKeyWord.toLowerCase());
    });
    navigate(`/search/${searchKeyWord}`, { state: { searchResults: results } });
  };

  return (
    <>
      <div className="header">
        <div className="header_warp">
          <div className="header_warp1">
            <img
              src={process.env.PUBLIC_URL + "/menu.png"}
              className="header_img1"
              alt=""></img>
            <h3
              className="header_h3"
              onClick={() => {
                navigate("/");
              }}>
              KEKEMON
            </h3>
          </div>
          <div className="header_warp2">
            <ui className="header_ui">
              <li
                className="header_li"
                onClick={() => {
                  navigate("/item/best");
                }}>
                Best
              </li>
              <li
                className="header_li"
                onClick={() => {
                  navigate("/item/tops");
                }}>
                Tops
              </li>
              <li
                className="header_li"
                onClick={() => {
                  navigate("/item/pants");
                }}>
                Pants
              </li>
              <li
                className="header_li"
                onClick={() => {
                  navigate("/item/shoes");
                }}>
                Shoes
              </li>
              <li
                className="header_li"
                onClick={() => {
                  navigate("/cart");
                }}>
                Cart
              </li>

              <li className="header_li">
                <input
                  type="search"
                  className="header_input"
                  value={searchKeyWord}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </li>
              <li className="header_li">
                <img
                  src={process.env.PUBLIC_URL + "/search.png"}
                  className="header_img2"
                  alt=""
                  onClick={handleSearch}
                />
              </li>
            </ui>
          </div>
          <div className="header_warp3">
            <div className="header_div1">Login</div>
            <div className="header_div2"></div>
            <div className="header_div1">Help</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;