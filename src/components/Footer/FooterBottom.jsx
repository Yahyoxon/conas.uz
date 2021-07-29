import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <Container>
        <Row className="footerRow">
          <Col lg="6" md="6" sm="12">
            <p className="left-text">© Construction Asia 2012</p>
          </Col>
          <Col lg="6" md="6" sm="12">
            <p className="right-text">
              Сайт разработан <a href="https://neweraagency.uz">NEW ERA AGENCY</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FooterBottom;
