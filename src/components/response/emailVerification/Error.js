import React from 'react';
import styled from 'styled-components/macro';

import BsCard from 'react-bootstrap/Card';
import { FaCircleExclamation } from 'react-icons/fa6'

const Card = styled(BsCard)`
    background-color: #ffe4e4;
    border: 1px solid #f44336;
    border-radius: 5px;
    padding: 20px;
    text-align: center;

    .error-icon {
        font-size: 48px;
        color: #f44336;
        margin-bottom: 3rem;
    }

    .retry-button {
        margin-top: 20px;
    }
`;

const Error = ({ resendToken, error }) => {
    return (
        <Card className="mt-4">
            <Card.Body>
                <FaCircleExclamation className='error-icon' />
                <Card.Title className="text-danger text-center">
                    Verification Failed
                </Card.Title>
                <Card.Text className="text-center">
                    {error || "An error occurred during verification. Please try again later."}
                </Card.Text>
                <button
                    className="btn btn-danger retry-button"
                    onClick={() => resendToken()}
                >
                    Resend
                </button>
            </Card.Body>
        </Card>
    );
}

export default Error;