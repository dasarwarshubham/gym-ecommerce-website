import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import required Components
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import CartCard from "../../components/cards/checkout/CartCard";

// import required redux selectors
import {
  selectCart,
  selectError as selectCartError,
  selectCartItemsCount,
  selectLoadingStatus,
} from "../../redux/checkout/cartSelectors";

// import required redux actions
import { deleteAllItem, fetchCart } from "../../redux/checkout/cartActions";

// import required routes
import { HOME, SHIPPING } from "../../constants/routes";

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
    <>
      <Helmet>
        <link rel="canonical" href="https://fitflex.site/cart" />

        <meta name="description" content="View and manage items in your shopping cart on Fitflex. Shop for gym equipment and fitness gear. Your fitness journey starts here." />
        <meta name="keywords" content="Shopping Cart, Gym Equipment, Fitflex Cart, Fitness Gear" />

        <meta property="og:title" content="Your Shopping Cart | Fitflex - Gym Equipment Store" />
        <meta property="og:description" content="View and manage items in your shopping cart on Fitflex. Shop for gym equipment and fitness gear. Your fitness journey starts here." />
        <meta property="og:url" content="https://fitflex.site/cart" />

        <meta name="twitter:title" content="Your Shopping Cart | Fitflex - Gym Equipment Store" />
        <meta name="twitter:description" content="View and manage items in your shopping cart on Fitflex. Shop for gym equipment and fitness gear. Your fitness journey starts here." />

        <title>Your Shopping Cart | Fitflex - Gym Equipment Store</title>
      </Helmet>
      <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
        <Row className="g-4 mx-0">
          <Col xs={12}>
            <h2 className={`d-flex align-items-center ${count === 0 && 'justify-content-center'}`}>
              Your Cart
              {loading && (
                <Spinner className="ms-2" animation="grow">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              {error && <span className="text-danger">{error}</span>}
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
              <Col md={8}>
                {cart.items.map((item) => (
                  <CartCard key={item.id} item={item} showQtyHandler={true} />
                ))}
                <div className="d-flex d-sm-block">
                  <Button
                    className="mx-auto"
                    onClick={handleCartClear}
                    variant="danger"
                    disabled={loading}
                  >
                    Clear Cart
                  </Button>
                </div>
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
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
