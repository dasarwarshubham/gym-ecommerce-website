import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col, Image, Button, Table } from "react-bootstrap";
import Ratings from "../../components/ratings/Ratings";

import equipmentData from "./fixtures/equipmentsData";

const EquipmentDetailsPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const equipment = equipmentData.find(
    (item) => item.id.toString() === productId
  );

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // Implement your addToCart logic here
    console.log(`Added ${quantity} ${equipment.name}(s) to cart.`);
  };

  if (!equipment) {
    return <div>Equipment not found</div>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image
            src={equipment?.image}
            alt={equipment?.name}
            className="equipment-image img-fluid w-100"
          />
        </Col>
        <Col md={6}>
          <h1>{equipment?.name}</h1>
          <Table bordered>
            <tbody>
              <tr>
                <td>Price</td>
                <td>{equipment?.price}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{equipment?.type}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>
                  <Ratings ratings={equipment?.rating} />
                </td>
              </tr>
              <tr>
                <td>Review</td>
                <td>{equipment?.reviews}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{equipment?.description}</td>
              </tr>
            </tbody>
          </Table>
          <div className="quantity-controls" style={{}}>
            <Button
              className="px-4"
              onClick={decreaseQuantity}
              variant="outline-dark"
              size="md"
            >
              -
            </Button>
            <span
              className="d-inline-block text-center"
              style={{ width: "40px" }}
            >
              {quantity.toString().padStart(2, "0")}
            </span>
            <Button
              className="px-4"
              onClick={increaseQuantity}
              variant="outline-dark"
              size="md"
            >
              +
            </Button>
          </div>
          <br />
          <Button variant="primary" size="lg" onClick={addToCart}>
            Add to Cart
          </Button>
          &nbsp;&nbsp;
          <Button variant="primary" size="lg">
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EquipmentDetailsPage;
