import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import * as Yup from "yup";

import {
  FormButton,
  FormField,
  FormikForm,
} from "../../components/form";

import {
  Error,
  Success
} from '../../components/response';

import { LOGIN } from "../../constants/routes";
import { signupUser } from "../../redux/account/accountActions";
import { selectAccountError } from "../../redux/account/accountSelectors";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  // phone: "",
  // gender: "",
  password: "",
  confirm_password: "",
};

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  // phone: Yup.string()
  //   .required()
  //   .label("Phone Number")
  //   .matches(phoneRegExp, "Phone number is not valid"),
  // gender: Yup.string().required().label("Gender").oneOf(["M", "F", "NA"]),
  password: Yup.string().min(6).required().label("Password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Re-Enter Your Password"),
});

const SignupPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAccountError);

  const [signupStatus, setSignupStatus] = useState(null);

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(signupUser(values))
      .then((signupAction) => {
        setSubmitting(false);
        if (signupAction.meta.requestStatus === "fulfilled") {
          setSignupStatus("success");
          resetForm();
        } else {
          setSignupStatus("error");
        }
      });
  };

  return (
    <Container className="my-5">
      <Row
        className="justify-content-center align-items-center mx-0"
        style={{ minHeight: "65vh" }}
      >
        {signupStatus === "success" && (
          <Col xs={12} md={7} lg={6}>
            <Success
              title="Signup Successful!"
            >
              Please check your email for a verification link.
            </Success>
          </Col>
        )}
        {signupStatus === "error" && (
          <Col xs={12} md={7} lg={6}>
            <Error
              title="Signup Failed"
              error={error}
              action={() => setSignupStatus(null)}
            />
          </Col>
        )}
        {signupStatus === null && (
          <Col xs={12} md={9} lg={8} xl={7}>
            <h1 className="text-center mb-4">Create an account</h1>
            <FormikForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) =>
                handleClick(values, setSubmitting, resetForm)
              }
              encType="multipart/form-data"
            >
              {/* {error && <p className="text-danger">{error}</p>} */}
              <FormField label="First Name" name="first_name" />
              <FormField label="Last Name" name="last_name" />
              <FormField label="Email" type="email" name="email" />
              {/* <FormField label="Phone Number" name="phone" inputMode="numeric" />
              <FormRadio
                label="Gender"
                name="gender"
                options={[
                  { label: "Male", value: "M" },
                  { label: "Female", value: "F" },
                  { label: "Prefer Not to Say", value: "NA" },
                ]}
              /> */}
              <FormField label="Password" type="password" name="password" />
              <FormField
                label="Re-enter password"
                type="password"
                name="confirm_password"
              />

              <div className="d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4">
                <FormButton>Signup</FormButton>
              </div>

              <div className="d-flex">
                <p className="d-flex mx-auto">
                  Already have an account?
                  <Link className={`btn btn-link btn-sm p-0 ms-2`} to={LOGIN}>
                    Login
                  </Link>
                </p>
              </div>
            </FormikForm>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SignupPage;
