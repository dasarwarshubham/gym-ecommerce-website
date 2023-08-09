import React from "react";
import { Card, Button } from "react-bootstrap";

const PaymentCard = ({ payment }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{payment.cardType}</Card.Title>
        <Card.Text>Card Number: {payment.cardNumber}</Card.Text>
        <Card.Text>Expiry Date: {payment.expiryDate}</Card.Text>
        <Card.Text>Name on Card: {payment.nameOnCard}</Card.Text>
        <Button variant="primary">Edit Payment Method</Button>
      </Card.Body>
    </Card>
  );
};

export default PaymentCard;
