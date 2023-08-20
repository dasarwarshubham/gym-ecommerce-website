import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CONFIRMATION, REVIEW } from "../../constants/routes";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

import Loader from "../../components/loader/Loader";
import {
  FormikForm,
  FormButton,
  FormRadio,
  FormState,
} from "../../components/form";

// import required redux selectors
import {
  selectCartItems,
  selectLoadingStatus,
  selectCartAddress,
} from "../../redux/checkout/cartSelectors";
import { pay } from "../../services/paymentAPI";
import { clearCart } from "../../redux/checkout/cartActions";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartLoading = useSelector(selectLoadingStatus);
  const cartItems = useSelector(selectCartItems);
  const cartAddress = useSelector(selectCartAddress);

  if (cartLoading) {
    return <Loader />;
  }

  const handleClick = async (values, setSubmitting, resetForm) => {
    const order = {
      orderItems: cartItems,
      shippingAddress: cartAddress,
      ...values,
    };
    try {
      const response = await pay(order);
      if (response) {
        dispatch(clearCart());
        // navigate(PAYMENT_SUCCESS);
      }
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      // navigate(PAYMENT_FAILURE);
    } finally {
      setSubmitting(false);
      resetForm();
      navigate(CONFIRMATION);
    }
  };

  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="d-flex align-items-center">
            Select Payment Method&nbsp;
          </h2>
          {cartItems.length === 0 ? (
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
                        { label: "Paytm", value: "paytm" },
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

              <FormState />
            </FormikForm>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;