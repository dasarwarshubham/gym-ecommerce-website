import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import required Components
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import CartCard from "../../components/cards/checkout/CartCard";

// import required redux selectors
import {
  selectCart,
  selectLoadingStatus,
  selectError as selectCartError,
  selectCartItemsCount,
} from "../../redux/checkout/cartSelectors";

// import required redux actions
import { deleteAllItem, fetchCart } from "../../redux/checkout/cartActions";

// import required routes
import { SHIPPING } from "../../constants/routes";

const CartPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const count = useSelector(selectCartItemsCount);
  const cart = useSelector(selectCart);
  const error = useSelector(selectCartError);

  const handleCartClear = () => {
    dispatch(deleteAllItem()).then(() => {
      dispatch(fetchCart());
    });
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
        {error && <span className="text-danger">{error}</span>}
      </h2>
      {count === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row className="g-4">
          <Col md={8}>
            {cart.items.map((item) => (
              <CartCard key={item.id} item={item} showQtyHandler={true} />
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
                <Card.Text>Total Items: {count}</Card.Text>
                <Card.Text>
                  Total Amount: ${cart.cart_total_price.toFixed(2)}
                </Card.Text>
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

export default CartPage;
