import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mission.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/mission/01.jpg";
import image2 from "../../assets/mission/02.jpg";
import image3 from "../../assets/mission/03.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useTranslation } from "react-i18next";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

const Mission = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row className="Mission_Section">
          <Col lg="4" md="4" sm="12" className="col1">
            <div className="our_mission_text">
              <h2 className="mis_title">
                {t("OurMissionTexts.ourMissionTitle")}
              </h2>
              <p className="mis_desc">
                {t("OurMissionTexts.ourMissionDesc1")} <br />
                {t("OurMissionTexts.ourMissionDesc2")}
              </p>
            </div>
          </Col>

          <Col lg="2" md="2" sm="12" className="col2">
            <div className="begin_navigation">
              <div className="navigation">
                <div className="arrows left">
                  <BsChevronLeft className="bsIcon" />
                </div>
                <div className="arrows right">
                  <BsChevronRight className="bsIcon" />
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" sm="12" className="col3">
            <div className="our_mission_carousel">
              <Swiper
                className="missionMySwiper"
                breakpoints={
                  (true,
                  {
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    990: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  })
                }
                spaceBetween={10}
                navigation={
                  (true,
                  { prevEl: ".navigation .left", nextEl: ".navigation .right" })
                }
              >
                <SwiperSlide>
                  <img src={image1} className="imageSection2" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image2} className="imageSection2" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image3} className="imageSection2" alt="" />
                </SwiperSlide>
            
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mission;
