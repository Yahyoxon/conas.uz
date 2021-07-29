import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Advantages from '../components/Advantages/Advantages'
import ServicePageContent from '../components/ServicePageContent/ServicePageContent'

const Services = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <ServicePageContent/>
      <Advantages/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Services;
