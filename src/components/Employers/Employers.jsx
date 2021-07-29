import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./employers.css";
import sovetnik from "../../assets/Screenshot_4.jpg";
import zamdirektor from "../../assets/Screenshot_2.jpg";
import projectmenejer from "../../assets/Screenshot_1.jpg";
import { useTranslation } from "react-i18next";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Employers = () => {

  const { t } = useTranslation();

  return (
    <>
    <div className="employer-section">
      <Container>
        <Row>
          <Col>
            <div className="EmpSection">
              <h2 className="employer-title">{t("Employers.mainTitle")}</h2>
              <div className="hr-line"></div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="6" sm="12">
            <div className="employerCart">
              <div className="WorkerImage">
                 <img src={sovetnik} alt="" />
              </div>
             
              <div className="titles">
                <h3 className="name">{t("Employers.atametovData.name")}</h3>
                <p className="job">{t("Employers.atametovData.job")}</p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="employerCart">
            <div className="WorkerImage">
              <img src={zamdirektor} alt="" />
              </div>
              <div className="titles">
                <h3 className="name">{t("Employers.umarovRustamData.name")}</h3>
                <p className="job">
                {t("Employers.umarovRustamData.job")}
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="employerCart">
            <div className="WorkerImage">
              <img src={projectmenejer} alt="" />
              </div>
              <div className="titles">
                <h3 className="name">{t("Employers.siddiqovAbrorData.name")}</h3>
                <p className="job">{t("Employers.siddiqovAbrorData.job")}</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="knowMore"><Link to="/worker" >{t("Employers.AllList")}</Link> <BsArrowRight/></div>
      </Container>
      </div>
    </>
  );
};

export default Employers;
