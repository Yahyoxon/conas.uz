import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contacts.css";
import "../About/aboutcompany.css";
import {useTranslation} from 'react-i18next';


const Contacts = () => {

  const {t} = useTranslation()

  return (
    <div className="MainContentContacts">
      <Container>
        <Row>
          <Col>
            <div className="mainTitle">
              <div className="secondTitlePage stp">CONSTRUCTION ASIA</div>
              <div className="firstTitlePage ftp">{t("Menu.contact_inf")}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">{t("Contacts.adress")}</div>
              <div className="dataOfTitle">
              {t("Contacts.locationInfo1")}
                <br /> {t("Contacts.locationInfo2")}
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">{t("Contacts.fax")}</div>
              <div className="dataOfTitle">
                <div className="faxNumbers">+998 (71) 231-27-85</div>
                <div className="faxNumbers">+998 (71) 231-27-84</div>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">{t("Contacts.callCenter")}</div>
              <div className="dataOfTitle">
                <a className="phoneNumbers" href="tel:998630008">+998 (99) 863-00-08</a><br/>
                <a className="phoneNumbers" href="tel:998695515">+998 (99) 797-27-85</a>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">E-mail:</div>
              <div className="dataOfTitle">info@conas.uz</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5989.968597642007!2d69.166374!3d41.352695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIxJzA5LjciTiA2OcKwMDknNTkuMCJF!5e0!3m2!1sen!2s!4v1626954677975!5m2!1sen!2s" 
              title="map"
              width="100%"
              height="450"
              className="map"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contacts;
