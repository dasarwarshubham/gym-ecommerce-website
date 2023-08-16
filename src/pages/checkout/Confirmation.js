import React from "react";
import { HOME } from "../../constants/routes";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ConfirmationPage = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center">Order Confirmation</h2>
          <Card>
            <Card.Body
              style={{ minHeight: "25vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <p className="text-center fs-5">
                  Your order has been confirmed and will be processed shortly.
                </p>
                <p className="text-center fs-5">
                  An order confirmation email has been sent to your registered
                  email address.
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <Button as={Link} to={HOME} variant="primary">
                Continue Shopping
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmationPage;
