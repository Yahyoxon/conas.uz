import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./repair.css";
import "./repair_img.scss";
import "../About/AboutCompany";
import { useTranslation } from "react-i18next";

const Staff = () => {
  const { t } = useTranslation();

  return (
    <div className="StaffContent">
      <div className="vertical-line vl"></div>
      <Container>
        <Row>
          <Col>
            <div className="mainTitles">
              <div className="secondTitlePage">CONSTRUCTION ASIA</div>
              <div className="firstTitlePage">{t("RepairPage.title")}</div>
              <div className="tagLine">{t("RepairPage.desc")}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_1 ">
                <div className="bottomElements">
                  <div className="cardNumber">01</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.earthWork")}</div>
              <div className="cardDesc">
              {t("RepairServices.earthWorkDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_2 ">
                <div className="bottomElements">
                  <div className="cardNumber">02</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.BetonWork")}</div>
              <div className="cardDesc">
              {t("RepairServices.BetonWorkDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_3 ">
                <div className="bottomElements">
                  <div className="cardNumber">03</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.TomYopish")}</div>
              <div className="cardDesc">
              {t("RepairServices.TomYopishDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_4 ">
                <div className="bottomElements">
                  <div className="cardNumber">04</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.MontajElement")}</div>
              <div className="cardDesc">
              {t("RepairServices.MontajElementDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_5 ">
                <div className="bottomElements">
                  <div className="cardNumber">05</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.MontajMetal")}</div>
              <div className="cardDesc">
              {t("RepairServices.MontajMetalDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_6 ">
                <div className="bottomElements">
                  <div className="cardNumber">06</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.IchkiTarmoq")}</div>
              <div className="cardDesc">
              {t("RepairServices.IchkiTarmoqDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_7 ">
                <div className="bottomElements">
                  <div className="cardNumber">07</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.MontajTrans")}</div>
              <div className="cardDesc">
              {t("RepairServices.MontajTransDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_8 ">
                <div className="bottomElements">
                  <div className="cardNumber">08</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.MontajKotelnik")}</div>
              <div className="cardDesc">
              {t("RepairServices.MontajKotelnikDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_9 ">
                <div className="bottomElements">
                  <div className="cardNumber">09</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.MontajChillerov")}</div>
              <div className="cardDesc">
              {t("RepairServices.MontajChillerovDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_10 ">
                <div className="bottomElements">
                  <div className="cardNumber">10</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.Teplo")}</div>
              <div className="cardDesc">
              {t("RepairServices.TeploDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_11 ">
                <div className="bottomElements">
                  <div className="cardNumber">11</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.ElektroPitaniya")}</div>
              <div className="cardDesc">
              {t("RepairServices.ElektroPitaniyaDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_12 ">
                <div className="bottomElements">
                  <div className="cardNumber">12</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.Vodosnab")}</div>
              <div className="cardDesc">
              {t("RepairServices.VodosnabDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_13 ">
                <div className="bottomElements">
                  <div className="cardNumber">13</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.Slabotochny")}</div>
              <div className="cardDesc">
              {t("RepairServices.SlabotochnyDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_14 ">
                <div className="bottomElements">
                  <div className="cardNumber">14</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.Puskonalny")}</div>
              <div className="cardDesc">
              {t("RepairServices.PuskonalnyDesc")}
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="CartBox">
              <div className="imgBox imgBox_15 ">
                <div className="bottomElements">
                  <div className="cardNumber">15</div>
                  <div className="cardLine"></div>
                </div>
              </div>
              <div className="cardTitle">{t("RepairServices.OtdelochnixRabot")}</div>
              <div className="cardDesc">
              {t("RepairServices.OtdelochnixRabotDesc")}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Staff;
