import React,{useState} from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./workers.css";
import "../../components/About/aboutcompany.css";
import maxmudov from "../../assets/Screenshot_4.png";
import atametov from "../../assets/Screenshot_4.jpg";
import umarov from '../../assets/Screenshot_2.jpg';
import yoriyxonov from '../../assets/Screenshot_1.jpg';
import xurramiddin from '../../assets/Screenshot_6.png';
import ismoilov from '../../assets/Screenshot_1.png';
import artiqhujayev from '../../assets/Screenshot_2.png';
import shoyusufov from '../../assets/Screenshot_3.png';
import { useTranslation } from "react-i18next";

const Workers = () => {
  const { t } = useTranslation();
  const [worker, setworker] = useState('Employers.maxmudovData')
  const [photo, setPhoto] = useState(maxmudov)
  
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="verticalBox">
              <div className="vertical-line  vl"></div>
            </div>
            <div className="mainTitle">
              <div className="secondTitlePage">CONSTRUCTION ASIA</div>
              <div className="firstTitlePage">{t("Menu.ourWorkers")}</div>
            </div>
          </Col>
        </Row>
        <Row id="goTop">
          <Col lg="5">
            <div className="imgDirektor">
              <img src={photo} alt="" />
            </div>
          </Col>
          <Col lg="7">
            <div className="textsWork">
              <div className="nameDirektor">{t(`${worker}.name`)}</div>
              <div className="job">{t(`${worker}.job`)}</div>
              <div className="descDir">{t(`${worker}.desc`)}</div>
            </div>
          </Col>
        </Row>
        <div className="Sotrudniki-section">
          <Row>
          <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.maxmudovData')} href="#goTop n    ">
              <div className="WorkerCard" onClick={() =>setPhoto(maxmudov)}>
                <div className="WorkerImage">
                  <img src={maxmudov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.maxmudovData.name")}</h4>
                  <div className="jobDesc">{t("Employers.maxmudovData.job")}</div>
                </div>
              </div>
            </Col>
            
          <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.atametovData')} href="#goTop n    ">
              <div className="WorkerCard" onClick={() =>setPhoto(atametov)}>
                <div className="WorkerImage">
                  <img src={atametov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.atametovData.name")}</h4>
                  <div className="jobDesc">{t("Employers.atametovData.job")}</div>
                </div>
              </div>
            </Col>

            <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.umarovRustamData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(umarov)}>
                <div className="WorkerImage">
                  <img src={umarov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.umarovRustamData.name")}</h4>
                  <div className="jobDesc">{t("Employers.umarovRustamData.job")}</div>
                </div>
              </div>
            </Col>
            <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.siddiqovAbrorData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(yoriyxonov)}>
                <div className="WorkerImage">
                  <img src={yoriyxonov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.siddiqovAbrorData.name")}</h4>
                  <div className="jobDesc">{t("Employers.siddiqovAbrorData.job")}</div>
                </div>
              </div>
            </Col>
            <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.xurramiddinData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(xurramiddin)}>
                <div className="WorkerImage">
                  <img src={xurramiddin} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.xurramiddinData.name")}</h4>
                  <div className="jobDesc">{t("Employers.xurramiddinData.job")}</div>
                </div>
              </div>
            </Col>
            <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.ismoilovData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(ismoilov)}>
                <div className="WorkerImage">
                  <img src={ismoilov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.ismoilovData.name")}</h4>
                  <div className="jobDesc">{t("Employers.ismoilovData.job")}</div>
                </div>
              </div>
            </Col>
            <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.artiqhujayevData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(artiqhujayev)}>
                <div className="WorkerImage">
                  <img src={artiqhujayev} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.artiqhujayevData.name")}</h4>
                  <div className="jobDesc">{t("Employers.artiqhujayevData.job")}</div>
                </div>
              </div>
            </Col>
            <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.shoyusufovData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(shoyusufov)}>
                <div className="WorkerImage">
                  <img src={shoyusufov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.shoyusufovData.name")}</h4>
                  <div className="jobDesc">{t("Employers.shoyusufovData.job")}</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Workers;
