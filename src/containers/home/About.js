import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import styled from "styled-components/macro";

const AboutBg = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10rem 0;

  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
    text-align: justify;
    @media (min-width: 640px) {
      font-size: 2rem;
    }
  }
`;

const AboutContainer = () => {
  return (
    <AboutBg fluid className="about-container">
      <Row>
        <Col xs={12} lg={6} className="px-4 px-sm-5">
          <h2 className="text-center text-md-start">About FitFlex</h2>
          <p>
            At FitFlex, we believe that everyone deserves access to high-quality
            gym equipment, regardless of their budget. That's why we offer a
            wide range of affordable and durable home and commercial gym
            equipment that can help you reach your fitness goals.
          </p>
          <p>
            Our team is made up of fitness enthusiasts who are passionate about
            providing the best possible experience for our customers. We work
            hard to source the highest quality products and to ensure that our
            customers are satisfied with every purchase.
          </p>
          <p>
            We know that shopping for gym equipment can be overwhelming, which
            is why we offer expert advice and support to help you find the right
            equipment for your needs. Whether you're a seasoned athlete or just
            starting out on your fitness journey, we're here to help.
          </p>
          <p>
            Thank you for choosing FitFlex as your trusted source for gym
            equipment. We look forward to helping you reach your fitness goals!
          </p>
        </Col>
        <Col xs={12} lg={6} className="px-0">
          <img
            src="/images/about-us.webp"
            className="img-fluid"
            alt="fitflex gym"
          />
        </Col>
      </Row>
    </AboutBg>
  );
};

export default AboutContainer;
