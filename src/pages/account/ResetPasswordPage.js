import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import * as Yup from "yup";

import { FormButton, FormField, FormikForm } from "../../components/form";
import {
	Error,
	Success
} from '../../components/response';

import { LOGIN } from "../../constants/routes";
import { resetPassword } from "../../services/accountAPI";

const ResetPasswordPage = () => {
    const { token } = useParams();

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [resetStatus, setResetStatus] = useState(null);

    const handleClick = async (values, setSubmitting, resetForm) => {
        delete values["confirm_password"];
        setError(null);
        try {
            const response = await resetPassword(values);
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
                            title="Password Reset Successful!"
                            status={status}
                        >
                            <>Please log in using your new password.</>
                            <br/>
                            <Link className="btn btn-dark mt-4" to={LOGIN}>login</Link>
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
                )}
            </Row>
        </Container>
    );
};


export default ResetPasswordPage;
