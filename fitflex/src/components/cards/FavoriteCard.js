import React from "react";
import { Card, Button } from "react-bootstrap";

const FavoriteCard = ({ favorite }) => {
  return (
    <Card>
      <Card.Img variant="top" src={favorite.image} className="img-fluid" />
      <Card.Body>
        <Card.Title>{favorite.productName}</Card.Title>
        <Card.Text>Price: ${favorite.price}</Card.Text>
        <div className="d-grid">
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FavoriteCard;
