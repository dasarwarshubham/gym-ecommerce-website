import React from "react";
import { Col, Row } from "react-bootstrap";

import PaymentCard from "../../components/cards/PaymentCard";

const PaymentsSection = (props) => {
  const payments = [
    {
      id: 1,
      cardType: "Visa",
      cardNumber: "**** **** **** 1234",
      expiryDate: "12/25",
      nameOnCard: "John Doe",
    },
    {
      id: 2,
      cardType: "Mastercard",
      cardNumber: "**** **** **** 5678",
      expiryDate: "06/26",
      nameOnCard: "Jane Smith",
    },
    // Add more payment methods as needed
  ];

  return (
    <Row>
      {payments.map((payment) => (
        <Col key={payment.id} md={6}>
          <PaymentCard payment={payment} />
        </Col>
      ))}
    </Row>
  );
};

export default PaymentsSection;
