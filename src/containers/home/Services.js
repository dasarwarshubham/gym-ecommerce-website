import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components/macro";

const ServicesContainer = styled(Container)`
  p {
    margin-bottom: 2rem;
    text-align: justify;
    @media (min-width: 640px) {
      font-size: 2rem;
    }
  }
`;

const Services = () => {
  const data = [
    {
      "image": "/images/services/installation-and-setup.webp",
      "title": "Equipment installation and setup",
      "description": "Our team of experts will efficiently install and set up your equipment, ensuring it operates smoothly and meets your requirements. We handle the technical details, so you can focus on your business."
    },
    {
      "image": "/images/services/maintenance.webp",
      "title": "Preventative maintenance plans",
      "description": "Our preventative maintenance plans are designed to keep your equipment in optimal condition. We schedule regular inspections and maintenance to identify and address potential issues before they become major problems, minimizing downtime."
    },
    {
      "image": "/images/services/repair-and-part-replacement.webp",
      "title": "Repair services and replacement parts",
      "description": "When your equipment needs repair or replacement parts, rely on our skilled technicians. We diagnose issues quickly and provide efficient repair services, ensuring your equipment is back in operation promptly."
    },
    {
      "image": "/images/services/leasing-and-financing.webp",
      "title": "Equipment leasing and financing options",
      "description": "Explore our flexible equipment leasing and financing options to acquire the machinery and tools you need. We offer customized solutions to fit your budget and business goals, making equipment acquisition more accessible."
    }
  ];
  return (
    <ServicesContainer>
      <h2 className="my-5 text-center text-md-start">Our Services</h2>
      {data.map((item, idx) => (
        <Row key={`service-${idx}`} className="my-5 py-md-5 mx-0 px-3">
          <Col md={{ span: 3, order: idx % 2 === 0 ? "first" : "last" }}>
            <img src={item.image} alt={item.title} className="img-fluid w-100" />
          </Col>
          <Col md={{ span: 9, order: idx % 2 === 0 ? "last" : "first" }}>
            <h3 className="fs-3">{item.title}</h3>
            <p>{item.description}</p>
          </Col>
        </Row>
      ))}
    </ServicesContainer>
  );
};

export default Services;
