import React from "react";
import * as S from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <S.FooterCotainer>
        <S.FooterTop>
          <S.FooterUl>
            <S.FooterLi>HOME</S.FooterLi>
            <S.FooterLi>AGREEMENT</S.FooterLi>
            <S.FooterLi>SNS</S.FooterLi>
          </S.FooterUl>
          <S.FooterUl>
            <S.FooterLi>CUSTOMER SERVICE : 02-0000-0000</S.FooterLi>
            <S.FooterLi>SHOWROOM ADDRESS : Seoul</S.FooterLi>
            <S.FooterLi>AVAILBLE : MON - FRI 09:00-18:00</S.FooterLi>
          </S.FooterUl>
          <S.FooterUl>
            <S.FooterLi>COMPANY : KEKEMON</S.FooterLi>
            <S.FooterLi>ADDRESS : SEOUL</S.FooterLi>
            <S.FooterLi>©2023 KEKEMON</S.FooterLi>
          </S.FooterUl>
        </S.FooterTop>
      </S.FooterCotainer>
    </>
  );
};

export default Footer;
