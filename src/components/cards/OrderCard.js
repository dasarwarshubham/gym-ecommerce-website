import React from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EQUIPMENTS } from "../../constants/routes";

const OrderCard = ({ order }) => {
  return (
    <Card className="mb-4">
      <Card.Header className="d-inline-flex justify-content-between g-2 ">
        Order #{order.id}
        <Badge pill bg="primary" className="d-flex align-items-center">
          {order.order_status}
        </Badge>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {order.items.map((item, index) => (
            <ListGroup.Item key={index} className="mb-3">
              <Row>
                <Col xs={3}>
                  <Link to={`${EQUIPMENTS}/${item.id}`}>
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      width={64}
                      height={64}
                      className="mr-3"
                    />
                  </Link>
                </Col>
                <Col>
                  <h6>{item.product.title}</h6>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.unit_price}</p>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <p>Date: {new Date(order.placed_at).toDateString()}</p>
        {/* <p>
          Billing Address: {order.billingAddress.street},{" "}
          {order.billingAddress.city}, {order.billingAddress.state}{" "}
          {order.billingAddress.zip}
        </p>
        <p>
          Shipping Address: {order.shippingAddress.street},{" "}
          {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
          {order.shippingAddress.zip}
        </p> */}
        <p>Total: ${order.total}</p>
      </Card.Footer>
    </Card>
  );
};

export default OrderCard;
