import React from "react";
import { HOME } from "../../constants/routes";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ConfirmationPage = (props) => {
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
      Confirmation Page
      <Button as={Link} to={HOME} variant="primary">
        Continue
      </Button>
    </div>
  );
};

export default ConfirmationPage;
