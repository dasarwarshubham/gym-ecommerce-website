import React, { useState } from "react";

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


import { forgotPassword } from "../../services/accountAPI";

const ResetPasswordPage = () => {
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [resetStatus, setResetStatus] = useState(null);

    const handleClick = async (values, setSubmitting, resetForm) => {
        setError(null);
        try {
            const response = await forgotPassword(values);
            setResetStatus("success");
            if (response.status === 200)
                setStatus(JSON.stringify(response?.data));
        } catch (error) {
            setError(error.message);
            setResetStatus("error");
        } finally {
            setSubmitting(false);
            resetForm();
        }
    };

    return (
        <Container>
            <Row
                className="justify-content-center align-items-center mx-0"
                style={{ minHeight: "70vh" }}
            >
                {resetStatus === "success" && (
                    <Col xs={12} md={7} lg={6}>
                        <Success
                            title="Password Reset Success"
                            status={status}
                        >
                            Password reset successful! Check your email for instructions.
                        </Success>
                    </Col>
                )}
                {resetStatus === "error" && (
                    <Col xs={12} md={7} lg={6}>
                        <Error
                            title="Password Reset Failed"
                            error={error}
                            action={() => setResetStatus(null)}
                        />
                    </Col>
                )}
                {resetStatus === null && (
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
                )}
            </Row>
        </Container>
    );
};


export default ResetPasswordPage;
