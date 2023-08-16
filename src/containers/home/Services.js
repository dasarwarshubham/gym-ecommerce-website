import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = (props) => {
  const data = [
    {
      image: "/images/services/installation-and-setup.png",
      title: "Equipment installation and setup",
    },
    {
      image: "/images/services/maintenance.png",
      title: "Preventative maintenance plans",
    },
    {
      image: "/images/services/repair-and-part-replacement.png",
      title: "Repair services and replacement parts",
    },
    {
      image: "/images/services/leasing-and-financing.png",
      title: "Equipment leasing and financing options",
    },
  ];
  return (
    <Container fluid="md">
      <h2 className="my-5">Our Services</h2>
      {/* <Row>
        {data.map((item, idx) => (
          <Col md={3} sm={2}>
            <Card className="border-0">
              <CardImg variant="top" src={item.image} />
              <Card.Footer className="bg-transparent border-0 text-center">
                <h6>{item.title}</h6>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row> */}
      {data.map((item, idx) => (
        <Row key={`service-${idx}`} className="my-5 py-5">
          <Col md={{ span: 3, order: idx % 2 === 0 ? "first" : "last" }}>
            <img src={item.image} alt="" className="img-fluid" />
          </Col>
          <Col md={{ span: 9, order: idx % 2 === 0 ? "last" : "first" }}>
            <h4 className="fs-3">{item.title}</h4>
            <p>
              We provide professional installation and setup services to ensure
              your equipment is ready to use right away.
            </p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Services;
