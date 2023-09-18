import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components/macro";

/****************** Styles ****************************/
const Logo = styled.img`
  height: 5rem;
`;

const FooterContainer = styled.div`
  background-color: #111111;
  color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (min-width: 768px) {
    .collapse.dont-collapse-sm {
      display: block;
      height: auto !important;
      visibility: visible;
    }
  }
`;

/************************** Footer Component ******************************/
const Footer = () => {
  return (
    <FooterContainer>
      <Container fluid="md">
        <Row>
          <Col lg={3} md={12}>
            <Logo src="/images/logo.svg" alt="fitflex logo" />
            <p>
              123 Main Street,
              <br />
              Suite 500, Anytown USA 12345
            </p>
            <p>555-555-5555</p>
            <p>info@fitflex.com</p>
            <p>
              Hours of Operation: <br /> Monday - Friday 9am - 5pm EST
            </p>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="collapse dont-collapse-sm" id="collapseLinks1">
              <h5>Links</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blogs</li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <h5>Links</h5>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="collapse dont-collapse-sm" id="collapseLinks3">
              <h5>Follow Us On</h5>
              <ul>
                <li>instagram</li>
                <li>facebook</li>
                <li>twitter</li>
                <li>youtube</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
