import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

export default Layout;
