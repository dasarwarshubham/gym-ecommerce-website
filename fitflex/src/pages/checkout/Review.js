import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { MdEdit } from "react-icons/md";

// import required redux selectors
import {
  selectCartItems,
  selectLoadingStatus,
  selectError as selectCartError,
  selectCartAddress,
} from "../../redux/checkout/cartSelectors";

import { CART, SHIPPING, PAYMENT } from "../../constants/routes";
import CartCard from "../../components/cards/checkout/CartCard";

const ReviewPage = () => {
  const cartLoading = useSelector(selectLoadingStatus);
  const cartItems = useSelector(selectCartItems);
  const cartError = useSelector(selectCartError);
  const cartAddress = useSelector(selectCartAddress);

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <Container className="my-5 py-5">
        <h2 className="d-flex align-items-center">
          Review Your Order&nbsp;
          {cartLoading && (
            <Spinner animation="grow">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {cartError && <span className="text-danger">{cartError}</span>}
        </h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Row className="g-4">
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 1 }}>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <Card.Title className="mb-0">Cart Items</Card.Title>
                  <Button as={Link} to={CART} variant="primary">
                    <MdEdit />
                  </Button>
                </Card.Header>
                <Card.Body>
                  {cartItems.map((item) => (
                    <CartCard key={item.productId} item={item} />
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
                  <Card.Title>{cartAddress.fullName}</Card.Title>
                  <Card.Text>{cartAddress.addressLine1}</Card.Text>
                  <Card.Text>{cartAddress.addressLine2}</Card.Text>
                  <Card.Text>
                    {cartAddress.city}, {cartAddress.state}{" "}
                    {cartAddress.zipCode}
                  </Card.Text>
                  <Card.Text>Phone: {cartAddress.phone}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ span: 12, order: 3 }} lg={{ span: 4, order: 2 }}>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <Card.Title className="my-2">Order Summary</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Total Items: {cartItems.length}</Card.Text>
                  <Card.Text>Total Amount: ${cartTotal.toFixed(2)}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-grid">
                  <Button as={Link} to={PAYMENT} variant="primary">
                    Proceed To Pay
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ReviewPage;
