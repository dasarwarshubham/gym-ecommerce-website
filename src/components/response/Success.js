import React from 'react';
import styled from 'styled-components/macro';

import BsCard from 'react-bootstrap/Card';
import { FaRegCircleCheck } from 'react-icons/fa6';

const Card = styled(BsCard)`
    background-color: #f3ffef;
    border: 1px solid #198754;
    border-radius: 5px;
    padding: 20px;
    text-align: center;

    .success-icon {
        font-size: 48px;
        color: #198754;
        margin-bottom: 3rem;
    }
`;

const Success = ({ children, title, status }) => {
    return (
        <Card className="mt-4">
            <Card.Body>
                <FaRegCircleCheck className='success-icon' />
                {title && (
                    <Card.Title className="text-success text-center">
                        {title}
                    </Card.Title>
                )}
                <Card.Text className="text-center">
                    {status && <>{status}<br/></>}
                    {children}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Success;