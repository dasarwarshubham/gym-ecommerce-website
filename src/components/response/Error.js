import React from "react";
import styled from "styled-components/macro";

import Button from "react-bootstrap/Button";
import BsCard from "react-bootstrap/Card";
import { FaCircleExclamation } from "react-icons/fa6";

const Card = styled(BsCard)`
  background-color: #ffe4e4;
  border: 1px solid #dc3545;
  border-radius: 5px;
  padding: 20px;
  text-align: center;

  .error-icon {
    font-size: 48px;
    color: #dc3545;
    margin-bottom: 3rem;
  }

  .error-button {
    margin-top: 20px;
  }
`;

const Error = ({ title, action, error }) => {
  return (
    <Card className="mt-4">
      <Card.Body>
        <FaCircleExclamation className="error-icon" />
        <Card.Title className="text-danger text-center">{title}</Card.Title>
        <Card.Text className="text-center">
          {error || <>An error occurred. Please try again.</>}
        </Card.Text>
        <Button variant="danger" className="error-button" onClick={action}>
          Retry
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Error;
