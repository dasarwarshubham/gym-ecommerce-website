import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";

import { FormikForm, FormField, FormButton } from "../../components/form";
import { LOGIN } from "../../constants/routes";

import { resetPassword } from "../../services/accountAPI";

const ResetPasswordPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const handleClick = async (values, setSubmitting, resetForm) => {
        delete values["confirm_password"];
        setError(null);
        try {
            await resetPassword(values);
            navigate(LOGIN)
        } catch (error) {
            setError(error.message);
        } finally {
            setSubmitting(false);
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
                            password: "",
                            confirm_password: "",
                            token: token
                        }}
                        validationSchema={Yup.object().shape({
                            password: Yup.string()
                                .label("Password")
                                .required('Password is required')
                                .min(8, 'Your password is too short.'),
                            confirm_password: Yup.string().required("Please type your password again")
                                .oneOf([Yup.ref('password')], 'Passwords must match'),
                            token: Yup.string()
                                .label("Token")
                                .required('token is required')
                        })}
                            
                        onSubmit={async (values, { setSubmitting, resetForm }) =>
                            handleClick(values, setSubmitting, resetForm)
                        }
                    >
                        {error && <p className="text-danger">{JSON.stringify(error)}</p>}
                        <FormField
                            label="Enter New Password"
                            type="password"
                            name="password"
                        />
                        <FormField
                            label="Confirm New Password"
                            type="password"
                            name="confirm_password"
                        />
                        <FormField
                            type="hidden"
                            name="token"
                        />

                        <div className="d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4">
                            <FormButton>Reset</FormButton>
                        </div>
                    </FormikForm>
                </Col>
            </Row>
        </Container>
    );
};


export default ResetPasswordPage;
