import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
import { CART, PAYMENT, SHIPPING } from "../../constants/routes";

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
    <Container className="my-5 py-5">
      <Row className="g-4 mx-0">
        <Col xs={12}>
          <h2 className="d-flex align-items-center">
            Review Your Order&nbsp;
            {cartLoading && (
              <Spinner animation="grow">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {cartError && <span className="text-danger">{cartError}</span>}
          </h2>
        </Col>
        {count === 0 ? (
          <Col xs={12}>
            <p>Your cart is empty.</p>
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
  );
};

export default ReviewPage;
