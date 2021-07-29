import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import "./footer.css";
import footerlogo from "../../assets/logo-light.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Header/Styles.css";
import "../Header/s.scss";

const Footer = () => {
  
  const { t } = useTranslation();

  return (
    <div className="FooterSection">
      <Container>
        <Row className="FooterRow">
          <Col lg="4" md="4" sm="12" className="mediaOrder">
              <div className="footer-left">
                <img src={footerlogo} alt="" />
              </div>

            </Col>
            <Col lg="8" md="8" sm="12">
              <div className="rightFooterMenu">
                <Nav className="ml-auto menuNav menuNavFooter">
                  <Nav.Link as={Link} className="navLink navLinkFooter" to="/about">
                    {t("Menu.aboutCompany")}
                  </Nav.Link>
                  <Nav.Link as={Link}  className="navLink navLinkFooter" to="/news">
                  {t("Menu.news")}
                  </Nav.Link>
                  <Nav.Link as={Link} className="navLink navLinkFooter" to="/worker">
                  {t("Menu.ourWorkers")}
                  </Nav.Link>
                  <Nav.Link as={Link}  className="navLink navLinkFooter" to="/contacts">
                  {t("Menu.contact_inf")}
                  </Nav.Link>
                </Nav>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
