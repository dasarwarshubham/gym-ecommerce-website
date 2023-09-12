import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";

import { FormikForm, FormField, FormButton } from "../../components/form";
import { LOGIN } from "../../constants/routes";

import { verifyEmail } from "../../services/accountAPI";

const VerifyEmailPage = () => {
    const { user_id, token } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const handleClick = async (values, setSubmitting, resetForm) => {
        const { user_id, token } = values;
        setError(null);
        try {
            await verifyEmail(user_id, token);
            navigate(LOGIN)
        } catch (error) {
            console.log(error);
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
            </Row>
        </Container>
    );
};


export default VerifyEmailPage;
