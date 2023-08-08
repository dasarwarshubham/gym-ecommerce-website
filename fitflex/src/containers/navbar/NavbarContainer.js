import Container from "react-bootstrap/Container";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import CustomNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../logo.svg";
import * as ROUTES from "../../constants/routes";

const Logo = styled.img`
  height: 5rem;
`;
const NavLink = styled(Nav.Link)`
  margin: 0 1.8rem;
`;

function Navbar() {
  return (
    <CustomNavbar
      key="lg"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="py-3"
    >
      <Container fluid className="py-0">
        <CustomNavbar.Brand as={Link} to={ROUTES.HOME}>
          <Logo src={logo} alt="fitflex logo" />
        </CustomNavbar.Brand>
        <CustomNavbar.Toggle
          aria-controls={`offcanvasCustomNavbar-expand-lg`}
        />
        <CustomNavbar.Offcanvas
          id={`offcanvasCustomNavbar-expand-lg`}
          aria-labelledby={`offcanvasCustomNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasCustomNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" as={Link} to={ROUTES.HOME_ALT}>
                Home
              </NavLink>
              <NavLink className="nav-link" as={Link} to={ROUTES.ABOUT}>
                About
              </NavLink>
              <NavDropdown
                title="Equipments"
                id={`offcanvasCustomNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item as={Link} to={ROUTES.EQUIPMENTS_HOME}>
                  Home Equipment
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={ROUTES.EQUIPMENTS_COMMERCIAL}>
                  Commercial Equipment
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" as={Link} to={ROUTES.BLOGS}>
                Blog
              </NavLink>
              <NavLink className="nav-link" as={Link} to={ROUTES.FAQS}>
                FAQs
              </NavLink>
              <NavLink className="nav-link" as={Link} to={ROUTES.CONTACT}>
                Contact
              </NavLink>
              <NavLink className="nav-link" as={Link} to={ROUTES.LOGIN}>
                Login
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </CustomNavbar.Offcanvas>
      </Container>
    </CustomNavbar>
  );
}

export default Navbar;
