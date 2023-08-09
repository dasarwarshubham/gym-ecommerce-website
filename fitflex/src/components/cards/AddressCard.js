import React from "react";
import { Card, Button } from "react-bootstrap";

const AddressCard = ({ address }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{address.fullName}</Card.Title>
        <Card.Text>{address.streetAddress}</Card.Text>
        <Card.Text>
          {address.city}, {address.state} {address.zipCode}
        </Card.Text>
        <Card.Text>{address.country}</Card.Text>
        <Card.Text>Phone: {address.phoneNumber}</Card.Text>
        <Button variant="primary">Edit Address</Button>
      </Card.Body>
    </Card>
  );
};

export default AddressCard;
