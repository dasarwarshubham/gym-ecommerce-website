import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { MdEdit } from "react-icons/md";

// import required redux selectors
import {
  selectCart,
  selectCartAddress,
  selectError as selectCartError,
  selectCartItemsCount,
  selectLoadingStatus,
} from "../../redux/checkout/cartSelectors";

import CartCard from "../../components/cards/checkout/CartCard";
import { CART, HOME, PAYMENT, SHIPPING } from "../../constants/routes";

const ReviewPage = () => {
  const cartLoading = useSelector(selectLoadingStatus);
  // const cartItems = useSelector(selectCartItems);
  const cart = useSelector(selectCart);
  const count = useSelector(selectCartItemsCount);
  const cartError = useSelector(selectCartError);
  const cartAddress = useSelector(selectCartAddress);

  // Calculate total price
  const cartTotal = cart?.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://fitflex.site/review" />

        <meta name="description" content="Review and confirm your gym equipment selections. Ensure your fitness gear order is accurate before proceeding to payment." />
        <meta name="keywords" content="Review Gym Equipment, Confirm Order, Gym Gear Selection" />

        <meta property="og:title" content="Cart Review | Fitflex - Confirm Your Gym Equipment Selections" />
        <meta property="og:description" content="Review and confirm your gym equipment selections. Ensure your fitness gear order is accurate before proceeding to payment." />
        <meta property="og:url" content="https://fitflex.site/review" />

        <meta name="twitter:title" content="Cart Review | Fitflex - Confirm Your Gym Equipment Selections" />
        <meta name="twitter:description" content="Review and confirm your gym equipment selections. Ensure your fitness gear order is accurate before proceeding to payment." />

        <title>Cart Review | Fitflex - Confirm Your Gym Equipment Selections</title>
      </Helmet>
      <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
        <Row className="g-4 mx-0">
          <Col xs={12}>
            <h2 className={`d-flex align-items-center ${count === 0 && 'justify-content-center'}`}>
              Review Your Order
              {cartLoading && (
                <Spinner className="ms-2" animation="grow">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              {cartError && <span className="text-danger">{cartError}</span>}
            </h2>
          </Col>
          {count === 0 ? (
            <Col xs={12} className="text-center">
              <p>Your cart is empty.</p>
              <Link to={HOME} className="btn btn-primary">
                Continue Shopping
              </Link>
            </Col>
          ) : (
            <>
              <Col xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 1 }}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Cart Items</Card.Title>
                    <Button as={Link} to={CART} variant="primary">
                      <MdEdit />
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    {cart?.items.map((item) => (
                      <CartCard key={item.product.id} item={item} />
                    ))}
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={{ span: 12, order: 2 }} lg={{ span: 8, order: 3 }}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Shipping Address</Card.Title>
                    <Button as={Link} to={SHIPPING} variant="primary">
                      <MdEdit />
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    {!cartAddress ? (
                      <Card.Text className="text-danger">
                        Delivery Address Not Provided
                      </Card.Text>
                    ) : (
                      <>
                        <Card.Title>{cartAddress?.full_name}</Card.Title>
                        <Card.Text>{cartAddress?.address_line_1}</Card.Text>
                        <Card.Text>{cartAddress?.address_line_2}</Card.Text>
                        <Card.Text>
                          {cartAddress?.city}, {cartAddress?.state},{" "}
                          {cartAddress?.zip}
                        </Card.Text>
                        <Card.Text>Phone: {cartAddress?.phone}</Card.Text>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={{ span: 12, order: 3 }} lg={{ span: 4, order: 2 }}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="my-2">Order Summary</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>Total Items: {cart.cart_total_price}</Card.Text>
                    <Card.Text>Total Amount: ${cartTotal.toFixed(2)}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-grid">
                    <Button
                      as={Link}
                      to={!cartAddress ? SHIPPING : PAYMENT}
                      variant="primary"
                    >
                      Proceed To Pay
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ReviewPage;
