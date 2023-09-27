import React, { useState } from "react";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import * as Yup from "yup";
import {
  FormButton,
  FormField,
  FormikForm
} from "../components/form";
import {
  Error,
  Success
} from '../components/response';

import { publicAxios } from "../services/axiosInstance";

import { API_ROUTES, EMAIL, HOME } from "../constants/routes";

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
    .max(600),
});


const ContactPage = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const handleClick = async (values, setSubmitting, resetForm) => {
    await publicAxios({
      method: "POST",
      url: `${API_ROUTES.contact}`,
      data: values,
    }).then(() => {
      setStatus("success");
    }).catch((error) => {
      setStatus("error");
      setError(error);
      console.log(error);
    }).finally(() => {
      setSubmitting(false);
      resetForm();
    })
  };
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center align-items-center mx-0">
        {status === "success" && (
          <Col xs={12} md={7} lg={6}>
            <Success title="Message recieved successfully!">
              <>We will contact you shortly.</>
              <br />
              <Link className="btn btn-dark mt-4" to={HOME}>Continue</Link>
            </Success>
          </Col>
        )}
        {status === "error" && (
          <Col xs={12} md={7} lg={6}>
            <Error
              title="Message not sent"
              error={error}
              action={() => setStatus(null)}
            />
          </Col>
        )}
        {status === null && (
          <>
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
                    hello.fitflex@gmail.com
                  </a>
                </p>
              </FormikForm>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ContactPage;
