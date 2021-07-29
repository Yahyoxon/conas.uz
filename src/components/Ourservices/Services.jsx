import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./service.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="services-section">
        <Container>
          <Row>
            <Col>
              <div className="ServiceTexts">
                <h4 className="topText">CONSTRUCTION ASIA</h4>
                <h2 className="SectionTitle">{t("OurService.Title")}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="6" sm="12" className="mb-3">
              <div className="firstService">
                <div className="firstContentService">
                  <div className="title">
                  {t("OurService.titleService1")}
                  </div>
                  <Link to="/services" className="linkToService" onClick={()=>window.location.replace('/services')}>
                  {t("OurService.readMore")} <BsArrowRight />
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12" className="mb-3">
              <div className="secondService">
                <div className="secondContentService">
                  <div className="title"> {t("OurService.titleService2")}</div>
                  <Link to="/repairs" className="linkToService" onClick={()=>window.location.replace('/repairs')}>
                  {t("OurService.readMore")} <BsArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
