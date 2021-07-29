import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./aboutsection.css";
import binoImage from "../../assets/О компании/About-company.jpg";
import cartItemsImage1 from "../../assets/team11.svg";
import cartItemsImage2 from "../../assets/team22.svg";
import cartItemsImage3 from "../../assets/team33.svg";
import cartItemsImage4 from "../../assets/team44.svg";

const AboutSection = () => {

  const { t } = useTranslation();

  return (
    <div className="aboutSection">
      <Container>
        <Row>
          <Col lg="5" md="5" sm="12">
            <div className="o-kompany-box">
              <h4 className="o-kompany">{t("AboutCompany.Title")}</h4>
              <h2 className="cons-asia">CONSTRUCTION ASIA</h2>
            </div>
          </Col>
          <Col lg="1" md="1" sm="0"></Col>

          <Col lg="6" md="6" sm="12">
            <div className="o-kompany-content-box">
              <p className="content-tekst">
               {t("AboutCompany.desc")}
              </p>
              <Link className="linkk" to="/about" >
              {t("AboutCompany.readmore")} <BsArrowRight className="strelka" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="backHetrilik">
          <div className="musorchiziq">
            
          </div>
        <Container>
          <Row className="inColRow">
            <Col lg="5" md="5" sm="12">
              <div className="blueBoldLine"></div>
              <div className="about-left-image">
                <img src={binoImage} alt="" />
              </div>
            </Col>
            <Col lg="1" md="1" sm="0"></Col>
            <Col lg="6" md="6" sm="12">
              <Row >
                <Col lg="6" md="6" sm="12">
                  <div className="cartItems">
                    <div className="cartImageAbout">
                      <img src={cartItemsImage1} alt="" />
                    </div>
                    <div className="aboutTexts">
                      <h3 className="titleCart">{t("AboutCompany.opitny")}</h3>
                      <p className="descCart">
                        {t("AboutCompany.opitnyDesc")}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <div className="cartItems">
                    <div className="cartImageAbout">
                      <img src={cartItemsImage3} alt="" />
                    </div>
                    <div className="aboutTexts">
                      <h3 className="titleCart">{t("AboutCompany.pravila")}</h3>
                      <p className="descCart">
                      {t("AboutCompany.pravilaDesc")}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="12">
                  <div className="cartItems">
                    <div className="cartImageAbout">
                      <img src={cartItemsImage2} alt="" />
                    </div>
                    <div className="aboutTexts">
                      <h3 className="titleCart">{t("AboutCompany.newTechnologies")}</h3>
                      <p className="descCart">
                      {t("AboutCompany.newTechnologiesDesc")}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <div className="cartItems">
                    <div className="cartImageAbout">
                      <img src={cartItemsImage4} alt="" />
                    </div>
                    <div className="aboutTexts">
                      <h3 className="titleCart">{t("AboutCompany.deadline")}</h3>
                      <p className="descCart">
                      {t("AboutCompany.deadlineDesc")}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutSection;
