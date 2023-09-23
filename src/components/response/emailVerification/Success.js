import React from 'react';
import { Link } from 'react-router-dom';
import { Card as BsCard } from 'react-bootstrap';

import { FaRegCircleCheck } from 'react-icons/fa6'

import { LOGIN } from '../../../constants/routes';

import styled from 'styled-components/macro';

const Card = styled(BsCard)`
    background-color: #f3ffef;
    border: 1px solid #4caf50;
    border-radius: 5px;
    padding: 20px;
    text-align: center;

    .success-icon {
        font-size: 48px;
        color: #4caf50;
        margin-bottom: 3rem;
    }
`;

const Success = ({ status }) => {
    return (
        <Card className="mt-4">
            <Card.Body>
                <FaRegCircleCheck className='success-icon' />
                <Card.Title className="text-success text-center">
                    Verification Successful
                </Card.Title>
                <Card.Text className="text-center">
                    {status ||
                        <>Your email has been verified successfully.</>
                    }
                    <br /> You can now <Link to={LOGIN}>login</Link>.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Success;