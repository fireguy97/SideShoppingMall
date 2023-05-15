import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_top">
          <ui className="footer_ui">
            <li className="footer_li">HOME</li>
            <li className="footer_li">AGREEMENT</li>
            <li className="footer_li">SNS</li>
          </ui>
          <ui className="footer_ui">
            <li className="footer_li">CUSTOMER SERVICE : 02-0000-0000</li>
            <li className="footer_li">SHOWROOM ADDRESS : Seoul</li>
            <li className="footer_li">AVAILBLE : MON - FRI 09:00-18:00</li>
          </ui>
          <ui className="footer_ui">
            <li className="footer_li">COMPANY : KEKEMON</li>
            <li className="footer_li">ADDRESS : SEOUL</li>
            <li className="footer_li">©2023 KEKEMON</li>
          </ui>
        </div>
      </footer>
    </>
  );
};

export default Footer;
