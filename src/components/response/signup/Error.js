import React from 'react';
import BsCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FaCircleExclamation } from 'react-icons/fa6'

import styled from 'styled-components/macro';

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

const Error = ({ setSignupStatus, error }) => {
    return (
        <Card className="mt-4 error-card">
            <Card.Body>
                <FaCircleExclamation className='error-icon' />
                <Card.Title className="text-danger text-center">
                    Signup Failed
                </Card.Title>
                <Card.Text className="text-center">
                    {error || <>An error occurred during signup. Please try again.</>}
                </Card.Text>
                <Button
                    variant="danger"
                    className="retry-button"
                    onClick={() => setSignupStatus(null)} // Reset signup status
                >
                    Retry
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Error;