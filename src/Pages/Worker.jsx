import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Workers from '../components/Workers/Workers'
const Worker = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <Workers/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Worker;
