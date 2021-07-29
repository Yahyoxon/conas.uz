import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import AboutCompany from '../components/About/AboutCompany'
import Advantages from '../components/Advantages/Advantages'

const About = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <AboutCompany/>
      <Advantages/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default About;
