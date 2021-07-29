import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import News from "../components/News/News";
import Advantages from "../components/Advantages/Advantages";

const NewsPage = () => {
  return (
    <>
      <Header position="menu_nav" />
      <br/>
      <News />
      <Advantages />
      <Footer />
      <FooterBottom />
    </>
  );
};
export default NewsPage;
