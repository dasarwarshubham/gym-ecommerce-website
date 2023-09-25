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

import { LOGIN } from '../../constants/routes';

import { newVerifyEmailToken, verifyEmail } from "../../services/accountAPI";

const VerifyEmailPage = () => {
    const { user_id, token } = useParams();

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState(null);


    const handleClick = async (values, setSubmitting, resetForm) => {
        const { user_id, token } = values;
        setError(null);
        try {
            const response = await verifyEmail(user_id, token);
            setVerificationStatus("success");
            if (response.status === 200)
                setStatus(response.data);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setVerificationStatus("error");
        } finally {
            setSubmitting(false);
            resetForm();
        }
    };

    const handleNewTokenRequest = async () => {
        setError(null);
        try {
            const response = await newVerifyEmailToken(user_id, token);
            setVerificationStatus("success");
            if (response.status === 200)
                setStatus(response.data);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setVerificationStatus("error");
        }
    };

    return (
        <Container>
            <Row
                className="justify-content-center align-items-center mx-0"
                style={{ minHeight: "70vh" }}
            >
                {verificationStatus === "success" && (
                    <Col xs={12} md={7} lg={6}>
                        <Success
                            title="Verification Successful"
                            status={status}
                        >
                            <>Your email has been verified successfully.</>
                            <br /> You can now <Link to={LOGIN}>login</Link>.
                        </Success>
                    </Col>
                )}
                {verificationStatus === "error" && (
                    <Col xs={12} md={7} lg={6}>
                        <Error
                            title="Verification Failed"
                            error={error}
                            action={() => handleNewTokenRequest()}
                        />
                    </Col>
                )}
                {verificationStatus === null && (
                    <Col xs={12} md={9} lg={8} xl={7}>
                        <h1 className="text-center mb-4">Email Verification</h1>
                        <FormikForm
                            initialValues={{
                                user_id: user_id,
                                token: token,
                            }}
                            validationSchema={Yup.object().shape({
                                user_id: Yup.string()
                                    .label("User Id")
                                    .required('User Id is required'),
                                token: Yup.string()
                                    .label("Verification Token")
                                    .required('verification token is required')
                            })
                            }
                            onSubmit={async (values, { setSubmitting, resetForm }) =>
                                handleClick(values, setSubmitting, resetForm)
                            }
                        >
                            {error && <p className="text-danger text-center">{JSON.stringify(error)}</p>}
                            <FormField type="hidden" name="user_id" />
                            <FormField type="hidden" name="token" />

                            <div className="d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4">
                                <FormButton>Verify</FormButton>
                            </div>
                        </FormikForm>
                    </Col>
                )}
            </Row>
        </Container>
    );
};


export default VerifyEmailPage;
