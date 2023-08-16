import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

// import required Components
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

// import required redux selectors
import {
  selectCartItems,
  selectLoadingStatus,
  selectError as selectCartError,
  selectCartAddress,
} from "../../redux/checkout/cartSelectors";
import { selectAccountAddress } from "../../redux/account/accountSelectors";

// import required redux actions
import { setShippingInfo } from "../../redux/checkout/cartActions";

// import required routes
import { REVIEW } from "../../constants/routes";
import AddAddressCard from "../../components/cards/AddAddressCard";
import { FormButton, FormState, FormikForm } from "../../components/form";
import FormRadio from "../../components/cards/checkout/AddressFormRadio";
// import AddressCard from "../../components/cards/AddressCard";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ShippingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const cartItems = useSelector(selectCartItems);
  const cartAddress = useSelector(selectCartAddress);
  const error = useSelector(selectCartError);
  const addresses = useSelector(selectAccountAddress);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(setShippingInfo(values.address))
      .then((loginAction) => {
        setSubmitting(false);
        if (loginAction.meta.requestStatus === "fulfilled") {
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
      <h2 className="d-flex align-items-center">
        Select Shipping Address&nbsp;
        {loading && (
          <Spinner animation="grow">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && <span className="text-danger">{error}</span>}
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <FormikForm
          initialValues={{
            address: cartAddress
              ? cartAddress
              : addresses.filter((address) => address.default)[0],
          }}
          validationSchema={Yup.object().shape({
            address: Yup.object()
              .required()
              .shape({
                fullName: Yup.string().required().label("Full Name"),
                addressLine1: Yup.string().required().label("Address Line 1"),
                addressLine2: Yup.string().required().label("Address Line 2"),
                city: Yup.string().required().label("City"),
                state: Yup.string().required().label("State"),
                zipCode: Yup.string().required().label("Zip Code"),
                phone: Yup.string()
                  .required()
                  .label("Phone Number")
                  .matches(phoneRegExp, "Phone number is not valid"),
              }),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) =>
            handleClick(values, setSubmitting, resetForm)
          }
        >
          <Row className="g-4">
            <Col md={8}>
              <Row className="g-4">
                {addresses?.map((address) => (
                  <Col md={6} key={`shipping-address-${address.id}`}>
                    <FormRadio value={address} name="address" />
                  </Col>
                ))}
              </Row>
              <div className="my-4">
                <AddAddressCard isButton="true" />
              </div>
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
                  <FormButton>Proceed to Review</FormButton>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <FormState />
        </FormikForm>
      )}
    </Container>
  );
};

export default ShippingPage;
