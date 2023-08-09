import React from "react";
import { Card, Col, ListGroup, Media, Row } from "react-bootstrap";

const OrderCard = ({ order }) => {
  return (
    <Card className="mb-4">
      <Card.Header>Order #{order.orderNumber}</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {order.items.map((item, index) => (
            <ListGroup.Item key={index} className="mb-3">
              <Row>
                <Col xs={3}>
                  <img
                    src={item.image}
                    alt={item.productName}
                    width={64}
                    height={64}
                    className="mr-3"
                  />
                </Col>
                <Col>
                  <h6>{item.productName}</h6>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <p>Date: {order.date}</p>
        <p>
          Shipping Address: {order.shippingAddress.street},{" "}
          {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
          {order.shippingAddress.zip}
        </p>
        <p>Total: ${order.total}</p>
      </Card.Footer>
    </Card>
  );
};

export default OrderCard;
