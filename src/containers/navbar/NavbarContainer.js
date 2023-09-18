import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdAccountCircle } from "react-icons/md";

import CartButton from "./CartButton";

import * as ROUTES from "../../constants/routes";

/****************** Styles ****************************/
const Logo = styled.img`
  height: 5rem;
  @media (max-width: 768px) {
    height: 3.5rem;
  }
  @media (max-width: 375px) {
    height: 2.5rem;
  }
`;
const NavLink = styled(Nav.Link)`
  margin: 0 1.8rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
  @media (max-width: 375px) {
    margin: 0 0.5rem;
  }
  .profileIcon {
    @media (max-width: 375px) {
      height: 2rem;
    }
  }
  .cartIcon {
    @media (max-width: 375px) {
      height: 2rem;
    }
  }
`;

const OffCanvas = styled(Offcanvas)`
  width: 100% !important;
  padding: 0;

  .nav-link {
    font-size: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
    font-weight: bold;
    margin: 1rem auto;

    &:hover {
      color: orange;
    }
    &:focus {
      outline: -webkit-focus-ring-color auto 5px;
    }
  }
  .dropdown {
    text-align: center;
    padding: 0;
  }
  .dropdown-menu {
    font-size: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
    font-weight: bold;
    text-align: center;
    background-color: #111111;
  }
  .dropdown-toggle {
    margin: 0;
  }
  .dropdown-item {
    font-size: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
    font-weight: bold;
    color: #ffffff;
    margin: 1rem auto;
    &:hover {
      background-color: #111111;
      color: orange;
    }
    &:focus {
      background-color: #111111;
      outline: -webkit-focus-ring-color auto 5px;
    }
  }
`;

/************************** Navbar Component ******************************/
function NavbarContainer() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleClose = () => show && setShow(false);

  return (
    <Navbar
      key={false}
      bg="dark"
      variant="dark"
      expand={false}
      sticky="top"
      className="py-3"
    >
      <Container fluid className="py-0">
        <Navbar.Toggle onClick={handleToggle} />
        <Navbar.Brand as={Link} to={ROUTES.HOME} onClick={handleClose}>
          <Logo src="/images/logo.svg" alt="fitflex logo" />
        </Navbar.Brand>
        <div className="d-flex">
          <NavLink
            className="nav-link"
            onClick={handleClose}
            as={Link}
            to={ROUTES.LOGIN}
            aria-label="profile"
          >
            <MdAccountCircle className="profileIcon" style={{ color: "#ffffff" }} size={28} />
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={handleClose}
            as={Link}
            to={ROUTES.CART}
            aria-label="cart"
          >
            <CartButton />
          </NavLink>
        </div>

        <OffCanvas show={show} onHide={handleToggle}>
          <OffCanvas.Body className="d-flex justify-content-center">
            <Nav className="d-flex justify-content-center align-items-center text-light">
              <NavLink
                className="nav-link"
                onClick={handleClose}
                as={Link}
                to={ROUTES.HOME_ALT}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={handleClose}
                as={Link}
                to={ROUTES.ABOUT}
              >
                About
              </NavLink>
              <NavDropdown
                title="Equipments"
                id={`offcanvasNavbarDropdown-expand-lg`}
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={handleClose}
                  as={Link}
                  to={ROUTES.EQUIPMENTS_HOME}
                >
                  Home Equipment
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleClose}
                  as={Link}
                  to={ROUTES.EQUIPMENTS_COMMERCIAL}
                >
                  Commercial Equipment
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className="nav-link"
                onClick={handleClose}
                as={Link}
                to={ROUTES.BLOGS}
              >
                Blog
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={handleClose}
                as={Link}
                to={ROUTES.FAQS}
              >
                FAQs
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={handleClose}
                as={Link}
                to={ROUTES.CONTACT}
              >
                Contact
              </NavLink>
            </Nav>
          </OffCanvas.Body>
        </OffCanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
