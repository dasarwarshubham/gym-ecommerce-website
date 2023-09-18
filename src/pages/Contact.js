import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";
import {
  FormikForm,
  FormField,
  FormButton
} from "../components/form";

import { EMAIL } from "../constants/routes";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email ID"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string()
    .required("Enter your message")
    .label("Message")
    .max(500),
});

function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

const ContactPage = () => {
  const handleClick = (values, setSubmitting, resetForm) => {
    simulateNetworkRequest(1000)
      .then(() => {
        alert(JSON.stringify(values));
      })
      .then(() => {
        simulateNetworkRequest(1000).then(() => {
          setSubmitting(false);
        });
      })
      .finally(() => {
        resetForm();
      });
  };
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center align-items-center mx-0">
        <Col xs={12} md={9} lg={8} xl={7} className="text-center text-sm-start">
          <h1>Get in Touch</h1>
          <p className="mb-5">Let's Make Your Fitness Journey Extraordinary!</p>
        </Col>
        <Col xs={12} md={9} lg={8} xl={7}>
          <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>
              handleClick(values, setSubmitting, resetForm)
            }
          >
            <FormField label="Name" name="name" />
            <FormField label="Email address" type="email" name="email" />
            <FormField label="Subject" name="subject" />
            <FormField
              label="Write a message"
              as="textarea"
              style={{ minHeight: "200px" }}
              name="message"
            />

            <div className="d-grid col-12 col-sm-5 col-md-4 mb-5 justify-content-center justify-content-sm-start">
              <FormButton>Submit</FormButton>
            </div>

            <p className="text-center text-sm-start">
              Or email us at&nbsp;
              <a variant="link" href={EMAIL}>
                info@fitflex.com
              </a>
            </p>
          </FormikForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
