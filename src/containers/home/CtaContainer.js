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
  min-height: 480px;
  color: #ffffff;
`;

const CtaContainer = () => {
  return (
    <CTAContainer style={{}}>
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
