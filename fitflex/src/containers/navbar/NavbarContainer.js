import Container from "react-bootstrap/Container";
import styled from "styled-components/macro";

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
`


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
              <NavLink href="#action1">Home</NavLink>
              <NavLink href="#action2">About</NavLink>
              <NavDropdown
                title="Equipments"
                id={`offcanvasCustomNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action3">
                  Home Equipment
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Commercial Equipment
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink href="#action6">Blog</NavLink>
              <NavLink href="#action7">FAQs</NavLink>
              <NavLink href="#action8">Contact</NavLink>
            </Nav>
          </Offcanvas.Body>
        </CustomNavbar.Offcanvas>
      </Container>
    </CustomNavbar>
  );
}

export default Navbar;
