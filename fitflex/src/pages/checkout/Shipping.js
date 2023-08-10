import React from "react";
import { PAYMENT } from "../../constants/routes";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShippingPage = () => {
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
      Shipping Page
      <Button as={Link} to={PAYMENT} variant="primary">
        Continue
      </Button>
    </div>
  );
};

export default ShippingPage;
