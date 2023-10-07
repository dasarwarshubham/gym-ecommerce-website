import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";

import { CONFIRMATION, HOME, REVIEW } from "../../constants/routes";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

import {
  FormButton,
  FormRadio,
  FormikForm
} from "../../components/form";
import Loader from "../../components/loader/Loader";

// import required redux selectors
import { fetchAccountData, fetchAccountOrder } from "../../redux/account/accountActions";
import { createNewCart, fetchCart } from "../../redux/checkout/cartActions";
import {
  selectCartItems,
  selectLoadingStatus,
} from "../../redux/checkout/cartSelectors";
import { placeOrder } from "../../services/paymentAPI";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const cartLoading = useSelector(selectLoadingStatus);
  const cartItems = useSelector(selectCartItems);

  console.log("Payment : ", location)

  if (cartLoading) {
    return <Loader />;
  }

  const handleClick = async (values, setSubmitting, resetForm) => {
    try {
      const response = await placeOrder(values);
      setSubmitting(false);
      resetForm();
      if (response) {
        dispatch(fetchCart())
          .unwrap()
          .catch((error) => {
            dispatch(fetchAccountData());
            dispatch(fetchAccountOrder());
            dispatch(createNewCart());
          });
        navigate(CONFIRMATION, { state: { status: "success", error: null, from: location.pathname } });
      }
    } catch (error) {
      setSubmitting(false);
      resetForm();
      let errorMsg = error.message
      navigate(CONFIRMATION, { state: { status: "failed", error: errorMsg, from: location.pathname } });
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://fitflex.site/payment" />

        <meta name="description" content="Securely complete your gym equipment purchase by making a payment. Choose your preferred payment method for a hassle-free checkout." />
        <meta name="keywords" content="Gym Equipment Payment, Secure Checkout, Payment Methods" />

        <meta property="og:title" content="Payment | Fitflex - Secure Gym Equipment Checkout" />
        <meta property="og:description" content="Securely complete your gym equipment purchase by making a payment. Choose your preferred payment method for a hassle-free checkout." />
        <meta property="og:url" content="https://fitflex.site/payment" />

        <meta name="twitter:title" content="Payment | Fitflex - Secure Gym Equipment Checkout" />
        <meta name="twitter:description" content="Securely complete your gym equipment purchase by making a payment. Choose your preferred payment method for a hassle-free checkout." />

        <title>Payment | Fitflex - Secure Gym Equipment Checkout</title>
      </Helmet>
      <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
        <Row className="justify-content-center mx-0">
          <Col xs={12} md={8} xl={6}>
            <h2 className="text-center">
              Select Payment Method
            </h2>
            <h6 className="alert alert-danger text-center text-danger">
              Kindly note that this website is for demonstration purposes only.
              <br />
              No charges will be applied, and no real products or services will be provided.
            </h6>
            {cartItems?.length === 0 ? (
              <div className="text-center">
                <p>Your cart is empty.</p>
                <Link to={HOME} className="btn btn-primary">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <FormikForm
                initialValues={{ paymentMethod: "" }}
                validationSchema={Yup.object({
                  paymentMethod: Yup.string()
                    .required()
                    .label("Payment Method")
                    .oneOf(["cod", "paytm"]),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) =>
                  handleClick(values, setSubmitting, resetForm)
                }
              >
                <Card>
                  <Card.Body
                    style={{ minHeight: "25vh" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div>
                      <p className="h5 me-5 my-4">Payment Method:</p>
                      <FormRadio
                        name="paymentMethod"
                        options={[
                          { label: "Cash On Delivery", value: "cod" },
                          // { label: "Paytm", value: "paytm" },
                        ]}
                      />
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center">
                    <Button
                      as={Link}
                      to={REVIEW}
                      variant="primary"
                      className="me-3"
                    >
                      Back to Review
                    </Button>
                    <FormButton>Proceed to Confirmation</FormButton>
                  </Card.Footer>
                </Card>
              </FormikForm>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentPage;
