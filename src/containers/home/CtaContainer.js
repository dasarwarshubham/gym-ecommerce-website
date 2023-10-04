import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { CONTACT } from "../../constants/routes";

import styled from "styled-components/macro";

const CTAContainer = styled.div`
  background-image: url("/images/cta-background.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 540px;
  min-height: 480px;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    min-height: 380px;
  }
  @media screen and (max-width: 576px) {
    min-height: 280px;
  }
  h4, p {
    text-shadow: 1px -1px 7px rgba(0,0,0,0.65);    
  }
`;

const CtaContainer = () => {
  return (
    <CTAContainer>
      <Row className="mx-0">
        <Col>
          <div
            className="text-center"
            style={{ textShadow: "0px 2px 2px rgba(0,0,0,0.5)" }}
          >
            <h4 className="display-5 fw-bold mb-5">
              Upgrade your workout today.
            </h4>
            <p className="fs-5 mb-5">
              Contact us to learn more about our services <br /> and how we can
              help you.
            </p>
            <Link to={CONTACT} className="btn btn-dark btn-lg px-5 py-3 rounded">
              Contact
            </Link>
          </div>
        </Col>
      </Row>
    </CTAContainer>
  );
};

export default CtaContainer;
