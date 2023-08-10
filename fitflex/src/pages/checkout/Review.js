import React from "react";
import { CONFIRMATION } from "../../constants/routes";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReviewPage = (props) => {
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
      Review Page
      <Button as={Link} to={CONFIRMATION} variant="primary">
        Continue
      </Button>
    </div>
  );
};

export default ReviewPage;
