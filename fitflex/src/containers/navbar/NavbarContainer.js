import Container from "react-bootstrap/Container";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import CustomNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../logo.svg";


const Logo = styled.img`
    height: 5rem;
`
const NavLink = styled(Nav.Link)`
    margin: 0 1.8rem;
    /* padding: 0 5rem; */
    /* &:hover{
        background-color: #ffffff;
        color: #000000;
    } */
    /* border: 1px solid hotpink; */
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
        <CustomNavbar.Brand href="#">
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
              <NavLink className="nav-link" as={Link} to="/">Home</NavLink>
              <NavLink className="nav-link" as={Link} to="/about">About</NavLink>
              <NavDropdown
                title="Equipments"
                id={`offcanvasCustomNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item as={ Link} to="/home-equipments">
                  Home Equipment
                </NavDropdown.Item >
                <NavDropdown.Item as={ Link } to="/commercial-equipments">
                  Commercial Equipment
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" as={Link} to="/blogs">Blog</NavLink>
              <NavLink className="nav-link" as={Link} to="/faqs">FAQs</NavLink>
              <NavLink className="nav-link" as={Link} to="/contact">Contact</NavLink>
            </Nav>
          </Offcanvas.Body>
        </CustomNavbar.Offcanvas>
      </Container>
    </CustomNavbar>
  );
}

export default Navbar;
