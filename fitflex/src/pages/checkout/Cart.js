import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

import { SHIPPING } from "../../constants/routes";
import CartCard from "../../components/cards/checkout/CartCard";
import { clearCart } from "../../redux/checkout/cartActions";

const CartPage = ({ loading, cartItems, removeALlItem }) => {
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCartClear = () => {
    removeALlItem();
  };

  return (
    <Container className="my-5 py-5">
      <h2 className="d-flex align-items-center">
        Your Cart&nbsp;
        {loading && (
          <Spinner animation="grow">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row className="g-4">
          <Col md={8}>
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
            <Button
              onClick={handleCartClear}
              variant="danger"
              disabled={loading}
            >
              Clear Cart
            </Button>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Order Summary</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Total Items: {cartItems.length}</Card.Text>
                <Card.Text>Total Amount: ${cartTotal.toFixed(2)}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-grid">
                <Button as={Link} to={SHIPPING} variant="primary">
                  Proceed to Checkout
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.cart.loading,
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeALlItem: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
