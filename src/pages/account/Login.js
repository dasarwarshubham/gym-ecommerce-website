import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";
import {
  FormikForm,
  FormField,
  FormButton
} from "../../components/form";

import { SIGNUP, FORGOT_PASSWORD, PROFILE } from "../../constants/routes";

import {
  fetchAccountAddress,
  fetchAccountData,
  fetchAccountOrder,
  loginUser,
} from "../../redux/account/accountActions";
import { selectAccountError } from "../../redux/account/accountSelectors";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().email().label("Username"),
  password: Yup.string().required().label("Password"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const error = useSelector(selectAccountError);

  const dispatch = useDispatch();

  const prevLocation = location?.state?.from;

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(loginUser(values))
      .then((loginAction) => {
        setSubmitting(false);
        resetForm();
        if (loginAction.meta.requestStatus === "fulfilled") {
          dispatch(fetchAccountData());
          dispatch(fetchAccountAddress());
          dispatch(fetchAccountOrder());
          if (prevLocation) {
            navigate(prevLocation);
          }
          else {
            navigate(PROFILE);
          }
        }
      }).catch((error) => {
        console.log(error);
      })
  };

  return (
    <Container>
      <Row
        className="justify-content-center align-items-center mx-0"
        style={{ minHeight: "70vh" }}
      >
        <Col xs={12} md={9} lg={8} xl={4}>
          <h1 className="text-center mb-4">Login</h1>

          <FormikForm
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>
              handleClick(values, setSubmitting, resetForm)
            }
          >
            {error && <p className="text-danger">{error}</p>}
            <FormField label="Username" type="email" name="username" />
            <FormField label="Password" type="password" name="password" />
            <Link
              className="btn btn-link btn-sm p-0 mx-auto mb-5 mt-2"
              to={FORGOT_PASSWORD}
            >
              Forgot your password?
            </Link>

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
          </FormikForm>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
