import React, { useContext } from "react";
import "./topbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import logo from "../../assets/logo-light.svg";

const NavbarAdmin = () => {
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="bodyComponent">
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto menuNav menuNav2">
              <Link to="/">
                <Navbar.Brand>
                  <img src={logo} alt="logo" />
                </Navbar.Brand>
              </Link>
            <div className="menyuLeft">
            <Nav.Link
                as={Link}
                className="navLink"
                to="/write"
              >
                Добавить новости
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="navLink"
                to="/"
                onClick={handleLogout}
              >
                Выход
              </Nav.Link>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAdmin;
