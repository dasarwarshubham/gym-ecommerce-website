import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// import required Components
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

// import required redux selectors
import { selectAccountAddress } from "../../redux/account/accountSelectors";
import {
  selectCart,
  selectCartAddress,
  selectError as selectCartError,
  selectCartItemsCount,
  selectLoadingStatus,
} from "../../redux/checkout/cartSelectors";

// import required redux actions
import {
  fetchCart,
  setDeliveryAddress,
} from "../../redux/checkout/cartActions";

// import required routes
import AddAddressCard from "../../components/cards/AddAddressCard";
import FormRadio from "../../components/cards/checkout/AddressFormRadio";
import { FormButton, FormikForm } from "../../components/form";
import { REVIEW } from "../../constants/routes";
// import AddressCard from "../../components/cards/AddressCard";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ShippingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const cartAddress = useSelector(selectCartAddress);
  const count = useSelector(selectCartItemsCount);
  const cart = useSelector(selectCart);
  const error = useSelector(selectCartError);
  const addresses = useSelector(selectAccountAddress);

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(setDeliveryAddress(values))
      .then((loginAction) => {
        setSubmitting(false);
        if (loginAction.meta.requestStatus === "fulfilled") {
          dispatch(fetchCart());
          navigate(REVIEW);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        resetForm();
      });
  };

  return (
    <Container className="my-5 py-5">
      <Row className="g-4 mx-0">
        <Col xs={12}>
          <h2 className="d-flex align-items-center">
            Select Shipping Address&nbsp;
            {loading && (
              <Spinner animation="grow">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {error && <span className="text-danger">{error}</span>}
          </h2>
        </Col>
        {count === 0 ? (
          <Col xs={12}>
            <p>Your cart is empty.</p>
          </Col>
        ) : (
        <Col xs={12}>
          <FormikForm
            initialValues={{
              delivery_address: cartAddress?.id,
            }}
            enableReinitialize
            validationSchema={Yup.object().shape({
              delivery_address: Yup.string().required().label("Delivery Address"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) =>
              handleClick(values, setSubmitting, resetForm)
            }
          >
            <Row className="">
              <Col md={8}>
                <Row className="g-4">
                  {addresses?.map((address) => (
                    <Col md={6} key={`shipping-address-${address.id}`}>
                      <FormRadio value={address} name="delivery_address" />
                    </Col>
                  ))}
                </Row>
                <div className="d-flex d-sm-block my-4">
                  <AddAddressCard className="mx-auto" isButton="true" />
                </div>
              </Col>
              <Col md={4}>
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
                    <FormButton>Proceed to Review</FormButton>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </FormikForm>
        </Col>
        )}
      </Row>
    </Container>
  );
};

export default ShippingPage;
