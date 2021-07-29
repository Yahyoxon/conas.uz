import React from "react";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAdmin";
import { Container } from "react-bootstrap";


const Admin = () => {
  return (
    <>
      <NavbarAdmin />
      <Container>
        <h1
          style={{
            marginTop:"50px",
            fontSize: "50px",
            fontWeight: "400",
            fontFamily: "Open Sans",
          }}
        >
          Hello Admin:)
        </h1>
        <h1 style={{
            fontSize: "30px",
            fontWeight: "400",
            fontFamily: "Open Sans",
          }}>Today, What we do togather?</h1>
       
      </Container>
    </>
  );
};

export default Admin;
