import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import SinglePage from "../components/SinglePage/SinglePage";

const NewsPage = () => {
  return (
    <>
      <Header position="menu_nav" />
      <SinglePage />
      <Footer />
        <FooterBottom />
    </>
  );
};
export default NewsPage;
