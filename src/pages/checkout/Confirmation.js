import React from "react";
import { Helmet } from "react-helmet";

import { FaCircleExclamation, FaRegCircleCheck } from 'react-icons/fa6';

import { Link, Navigate, useLocation } from "react-router-dom";
import { HOME, PAYMENT } from "../../constants/routes";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ConfirmationPage = () => {
  const location = useLocation();

  if (location.state === null || location?.state?.from !== PAYMENT || location?.key === "default") {
    return <Navigate to={HOME} replace />
  }

  return (
    <>
      {location?.state?.status === "success" ? (
        <Helmet>
          <link rel="canonical" href="https://fitflex.site/confirmation" />

          <meta name="description" content="Congratulations! Your gym equipment purchase is confirmed. Get ready for your fitness journey with top-quality workout gear." />
          <meta name="keywords" content="Order Confirmation, Gym Equipment Purchase, Fitness Gear Confirmation, Successful Purchase" />

          <meta property="og:title" content="Order Confirmation | Fitflex - Your Gym Equipment Purchase is Confirmed" />
          <meta property="og:description" content="Congratulations! Your gym equipment purchase is confirmed. Get ready for your fitness journey with top-quality workout gear." />
          <meta property="og:url" content="https://fitflex.site/confirmation" />

          <meta name="twitter:title" content="Order Confirmation | Fitflex - Your Gym Equipment Purchase is Confirmed" />
          <meta name="twitter:description" content="Congratulations! Your gym equipment purchase is confirmed. Get ready for your fitness journey with top-quality workout gear." />

          <title>Order Confirmation | Fitflex - Your Gym Equipment Purchase is Confirmed</title>
        </Helmet>
      ) : (
        <Helmet>
          <link rel="canonical" href="https://fitflex.site/confirmation" />

          <meta name="description" content="Oops! There was an issue with your gym equipment purchase. Please contact our support team for assistance." />
          <meta name="keywords" content="Order Confirmation, Gym Equipment Purchase, Purchase Issue, Order Error" />

          <meta property="og:title" content="Order Confirmation | Fitflex - Purchase Issue" />
          <meta property="og:description" content="Oops! There was an issue with your gym equipment purchase. Please contact our support team for assistance." />
          <meta property="og:url" content="https://fitflex.site/confirmation" />

          <meta name="twitter:title" content="Order Confirmation | Fitflex - Purchase Issue" />
          <meta name="twitter:description" content="Oops! There was an issue with your gym equipment purchase. Please contact our support team for assistance." />

          <title>Order Confirmation | Fitflex - Purchase Issue</title>

        </Helmet>
      )}
      <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
        <Row className="justify-content-center mx-0" style={{ minHeight: "65vh" }}>
          <Col xs={12} md={8} lg={6} className="d-flex justify-content-center align-items-center">
            {location?.state?.status === "success" ? (
              <Card className="border border-dark border-3 rounded-4">
                <Card.Body
                  style={{ minHeight: "25vh" }}
                  className="d-flex justify-content-center align-items-center py-5"
                >
                  <div className="text-center">
                    <FaRegCircleCheck color="#198754" size={50} className="mb-3" />
                    <h2 className="text-center fs-4 fw-bold mb-5">Order Placed Successfully</h2>
                    <p className="text-center fs-5">
                      Your order has been confirmed and will be processed shortly.
                    </p>
                    <p className="text-center fs-5">
                      An order confirmation email has been sent to your registered email address.
                    </p>
                  </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center py-3">
                  <Button as={Link} to={HOME} variant="primary">
                    Continue Shopping
                  </Button>
                </Card.Footer>
              </Card>
            ) : (
              <Card className="border border-dark border-3 rounded-4">
                <Card.Body
                  style={{ minHeight: "25vh" }}
                  className="d-flex justify-content-center align-items-center py-5"
                >
                  <div className="text-center">
                    <FaCircleExclamation color="#dc3545" size={50} className="mb-3" />
                    <h2 className="text-center fs-4 fw-bold mb-5">Order Failed</h2>
                    {location?.state?.error && (
                      <p className="text-danger"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {JSON.stringify(location?.state?.error)}
                      </p>
                    )}
                    <div className="float-none" style={{ whiteSpace: "none" }}></div>
                    <p className="text-center fs-5">
                      We apologize, but there was an issue processing your order.
                    </p>
                    <p className="text-center fs-5">
                      Please try again later or contact our support team for assistance.
                    </p>
                  </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center py-4">
                  <Button as={Link} to={HOME} variant="primary">
                    Return to Home
                  </Button>
                </Card.Footer>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConfirmationPage;
