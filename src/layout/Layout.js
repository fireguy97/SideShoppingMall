import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <content>{children}</content>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
