import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./HeaderStyles";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("name");
    if (token && storedName) {
      setUsername(storedName);
      setIsLoggedIn(true);
    }
  }, []);

  const [dropOpen, setDropOpen] = useState(false);

  const [searchKeyWord, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setDropOpen(!dropOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // 폼 제출 이벤트의 기본 동작을 막음
    const searchText = searchKeyWord.toLowerCase();
    navigate(`/searchProduct?searchText=${encodeURIComponent(searchText)}`);
  };

  const moveLogin = () => {
    navigate("/Login");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
  };

  return (
    <>
      <S.HeaderCotainer>
        <S.HeaderWarp>
          <S.HeaderWarp1>
            <S.HeaderImg1 src={process.env.PUBLIC_URL + "/menu.png"} alt="" />
            <S.HeaderH3
              onClick={() => {
                navigate("/");
              }}>
              KEKEMON
            </S.HeaderH3>
          </S.HeaderWarp1>
          <S.HeaderWarp2>
            <S.HeaderUl>
              <S.HeaderLi
                onClick={() => {
                  navigate("/item/best");
                }}>
                Best
              </S.HeaderLi>
              <S.HeaderLi
                onClick={() => {
                  navigate("/productList/tops");
                }}>
                Tops
              </S.HeaderLi>
              <S.HeaderLi
                onClick={() => {
                  navigate("/productList/pants");
                }}>
                Pants
              </S.HeaderLi>
              <S.HeaderLi
                onClick={() => {
                  navigate("/productList/shoes");
                }}>
                Shoes
              </S.HeaderLi>
              <S.HeaderLi
                onClick={() => {
                  navigate("/cart");
                }}>
                Cart
              </S.HeaderLi>
              <S.HeaderLi
                onClick={() => {
                  navigate("/buy");
                }}>
                Buy
              </S.HeaderLi>
              <S.HeaderLi
                onClick={() => {
                  navigate("/order");
                }}>
                Order
              </S.HeaderLi>

              <S.HeaderLi>
                <S.HeaderInput
                  type="search"
                  value={searchKeyWord}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </S.HeaderLi>
              <S.HeaderLi>
                <S.HeaderImg2
                  src={process.env.PUBLIC_URL + "/search.png"}
                  alt=""
                  onClick={handleSearch}
                />
              </S.HeaderLi>
            </S.HeaderUl>
          </S.HeaderWarp2>
          <S.HeaderLogin>
            {isLoggedIn ? (
              <S.Dropdown>
                <S.LoginArea
                  onClick={handleToggle}
                  onBlur={() => setDropOpen(false)}>
                  {username}
                </S.LoginArea>
                {dropOpen && (
                  <S.DropdownMenu>
                    <S.DropdownMenuLi onClick={handleLogout}>
                      Logout
                    </S.DropdownMenuLi>
                    <S.DropdownMenuLi>좋아요</S.DropdownMenuLi>
                  </S.DropdownMenu>
                )}
              </S.Dropdown>
            ) : (
              <S.LoginArea onClick={moveLogin}>Login</S.LoginArea>
            )}
            <div className="header_div2"></div>
            <S.Help>Help</S.Help>
          </S.HeaderLogin>
        </S.HeaderWarp>
      </S.HeaderCotainer>
    </>
  );
};

export default Header;
