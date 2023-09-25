import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { CONFIRMATION, REVIEW } from "../../constants/routes";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

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
        navigate(CONFIRMATION, {state: {status: "success", error: null, from: location.pathname }});
      }
    } catch (error) {
      setSubmitting(false);
      resetForm();
      let errorMsg = error.message
      navigate(CONFIRMATION, {state: {status: "failed", error: errorMsg, from: location.pathname }});
    }
  };

  return (
    <Container className="my-5 py-5">
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
            <p>Your cart is empty.</p>
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
  );
};

export default PaymentPage;
