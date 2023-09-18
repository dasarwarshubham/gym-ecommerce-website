import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";
import {
    FormikForm,
    FormField,
    FormButton,
} from "../../components/form";

import { LOGIN } from "../../constants/routes";

import { forgotPassword } from "../../services/accountAPI";

const ResetPasswordPage = () => {
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const handleClick = async (values, setSubmitting, resetForm) => {
        setError(null);
        try {
            forgotPassword(values);
            setSubmitting(false);
            resetForm();
            navigate(LOGIN)
            //   navigate(RESET_RESPONSE, { state: { prevPage: RESET_PASSWORD } });
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setSubmitting(false);
        } finally {
            resetForm();
        }
    };

    return (
        <Container>
            <Row
                className="justify-content-center align-items-center"
                style={{ minHeight: "70vh" }}
            >
                <Col xs={12} md={9} lg={8} xl={7}>
                    <h1 className="text-center mb-4">Reset Your Password</h1>
                    <FormikForm
                        initialValues={{
                            email: "",
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().required().email().label("Email"),
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) =>
                            handleClick(values, setSubmitting, resetForm)
                        }
                    >
                        {error && <p className="text-danger">{JSON.stringify(error)}</p>}
                        <FormField
                            label="Enter your Email"
                            type="email"
                            name="email"
                        />

                        <div className="d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4">
                            <FormButton>Reset Password</FormButton>
                        </div>
                    </FormikForm>
                </Col>
            </Row>
        </Container>
    );
};


export default ResetPasswordPage;
