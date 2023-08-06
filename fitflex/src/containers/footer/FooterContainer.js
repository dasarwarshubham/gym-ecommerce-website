import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import logo from "../../logo.svg";

const FooterContainer = styled.div`
  background-color: #212129;
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

const Footer = (props) => {
  return (
    <FooterContainer>
      <Container fluid="md">
        <Row>
          <Col lg={3} md={12}>
            <img src={logo} alt="Fitflex logo" style={{ height: "5rem" }} />
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
            <div className="collapse dont-collapse-sm" id="collapseExample">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blogs</li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            Footer
          </Col>
          <Col lg={3} md={4} sm={12}>
            Social Media
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
