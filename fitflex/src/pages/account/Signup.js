import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";

import { FormikForm, FormField, FormButton } from "../../components/form";
import { selectAccountError } from "../../redux/account/accountSelectors";
import { LOGIN } from "../../constants/routes";
import { signupUser } from "../../redux/account/accountActions";

const initialValues = {
  firstname: "",
  lastname: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  password: Yup.string().min(6).required().label("Password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Re-Enter Your Password"),
});

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectAccountError);

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(signupUser(values))
      .then((signupAction) => {
        setSubmitting(false);
        if (signupAction.meta.requestStatus === "fulfilled") {
          navigate(LOGIN);
        }
      })
      .finally(() => {
        resetForm();
      });
  };

  return (
    <Container className="my-5">
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
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
            {error && <p className="text-danger">{error}</p>}
            <FormField label="First Name" name="firstname" />
            <FormField label="Last Name" name="lastname" />
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
      </Row>
    </Container>
  );
};

export default SignupPage;
