import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
import './advantages.css'
import team1 from "../../assets/team11.svg";
import team2 from "../../assets/team22.svg";
import team3 from "../../assets/team33.svg";
import team4 from "../../assets/team44.svg";
import {useTranslation} from 'react-i18next';


const Advantages = () => {

  const {t} = useTranslation()

  return (
    <>
      <div className="advantages">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="6">
              <div className="cartItems">
                <img src={team1} alt="" />
                <div className="titleTexts">
                  <h3 className="title">{t("AboutCompany.opitny")}</h3>
                  <p className="desc">
                  {t("AboutCompany.opitnyDesc")}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="6">
              <div className="cartItems">
                <img src={team2} alt="" />
                <div className="titleTexts">
                  <h3 className="title">{t("AboutCompany.newTechnologies")}</h3>
                  <p className="desc">{t("AboutCompany.newTechnologiesDesc")}</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="6">
              <div className="cartItems">
                <img src={team3} alt="" />
                <div className="titleTexts">
                  <h3 className="title">{t("AboutCompany.pravila")}</h3>
                  <p className="desc">{t("AboutCompany.pravilaDesc")}</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="6">
              <div className="cartItems">
                <img src={team4} alt="" />
                <div className="titleTexts">
                  <h3 className="title">{t("AboutCompany.deadline")}</h3>
                  <p className="desc special">
                  {t("AboutCompany.deadlineDesc")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Advantages;
