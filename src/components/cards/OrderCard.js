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
                  <Link to={`${EQUIPMENTS}/${item.id}`}>
                    <h6>{item.product.title}</h6>
                  </Link>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.unit_price}</p>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col xs={3}>Date:</Col>
          <Col>{new Date(order.placed_at).toString()}</Col>
        </Row>
        <Row>
          <Col xs={3}>Shipping Address: </Col>
          <Col>
            {order.address.full_name} <br />
            {order.address.address_line_1}, {order.address.address_line_2},
            <br />
            {order.address.city}, {order.address.state} {order.address.zip}{" "}
            <br />
            {order.address.phone},
          </Col>
        </Row>
        <Row>
          <Col xs={3}>Total: </Col>
          <Col>${order.total}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default OrderCard;
