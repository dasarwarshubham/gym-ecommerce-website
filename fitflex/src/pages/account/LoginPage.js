import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";
import {
  FormikForm,
  FormField,
  FormButton,
  FormState,
} from "../../components/form";

import { SIGNUP } from "../../constants/routes";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Username"),
  password: Yup.string().required().label("Password"),
});

function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

const LoginPage = () => {
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
    <Container>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <Col xs={12} md={9} lg={8} xl={4}>
          <h1 className="text-center mb-4">Login</h1>

          <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>
              handleClick(values, setSubmitting, resetForm)
            }
          >
            <FormField label="Username" type="email" name="email" />
            <FormField label="Passward" type="password" name="password" />
            {/* <Link
              className="btn btn-link btn-sm p-0 mx-auto mb-5 mt-2"
              to={FORGOT_PASSWORD}
            >
              Forgot your password?
            </Link> */}

            <div className="d-grid col-9 col-sm-5 col-md-4 mx-auto mb-4">
              <FormButton>Login</FormButton>
            </div>

            <div className="d-flex">
              <p className="d-flex mx-auto">
                Don't have an account?
                <Link className={`btn btn-link btn-sm p-0 ms-2`} to={SIGNUP}>
                  SignUp
                </Link>
              </p>
            </div>

            <FormState />
          </FormikForm>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
