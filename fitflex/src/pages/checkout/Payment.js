import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { REVIEW } from "../../constants/routes";

const PaymentPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        border: "1px solid hotpink",
      }}
    >
      Payment Page
      <Button as={Link} to={REVIEW} variant="primary">
        Continue
      </Button>
    </div>
  );
};

export default PaymentPage;
