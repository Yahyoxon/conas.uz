import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutcompany.css";
import { useTranslation } from "react-i18next";
import { Bar } from "react-chartjs-2";

const AboutCompany = () => {
  const { t } = useTranslation();
  const ChartData = {
    dataHorizontal: {
      labels: [
        "AAA",
        "AA",
        "A",
        "BBB",
        "'BB'",
        "B",
        "CCC",
        "CC",
        "C",
        "DDD",
        "DD",
        "D",
      ],
      datasets: [
        {
          label:t("AboutPage.kolichestvo"),
          data: [0, 0, 1, 1, 80, 147, 3869, 8768, 2238, 14451, 2088, 10853],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 2,
        },
      ],
    },
  };

  let result = 0;
  const handleTotalCount = () => {
    const dataOutline = ChartData.dataHorizontal.datasets[0];
    for (let k = 0; k < dataOutline.data.length; k++) {
      result += dataOutline.data[k];
    }
  };
  handleTotalCount();
  return (
    <div className="aboutContentBox">
      <div className="vertical-line"></div>
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("AboutCompany.Title")}</h3>
              <h1 className="firstTitle">CONSTRUCTION ASIA</h1>
              <div className="text-content">{t("AboutPage.Content")}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <h2 className="chartTitle">{t('AboutPage.ChartTitle')}</h2>
          </Row>
          <Row>
            <h3 className="consAsia">CONSTRUCTION ASIA</h3>
            </Row>
          <Row>
          <p className="reyting">{t('AboutPage.Reyting')} BB</p>
          </Row>
          <Row>
          <Bar data={ChartData.dataHorizontal} options={{ responsive: true }} />
          <div className="totalCount">{t('AboutPage.totalCount')} <b>{result}</b></div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutCompany;
