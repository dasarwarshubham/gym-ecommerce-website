import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

import { EQUIPMENTS } from "../../constants/routes";

const EquipmentCard = ({ data }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <Card className="border h-100">
      <Card.Img variant="top" src={data.image} alt={data.name} />
      <Card.Body>
        <Card.Title as={Link} to={`${EQUIPMENTS}/${data.id}`}>
          {data.name}
        </Card.Title>
        {/* <Card.Text>{data.description}</Card.Text> */}
        <div className="d-grid">
          <Button
            variant={isAddedToCart ? "success" : "primary"}
            onClick={handleAddToCart}
          >
            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EquipmentCard;
