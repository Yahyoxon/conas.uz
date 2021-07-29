import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Advantages from '../components/Advantages/Advantages'
import Repair from '../components/Repair/Repair'

const Repairs = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <Repair/>
      <Advantages/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Repairs;
