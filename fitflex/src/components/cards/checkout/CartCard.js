import { Row, Col, Card } from "react-bootstrap";
import QuantityHandler from "./QuantityHandler";

const CartCard = ({ item }) => {
  const subtotal = item.price * item.quantity;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="g-2">
          <Col md={3}>
            <img src={item.image} alt={item.name} className="img-fluid w-100" />
          </Col>
          <Col md={6} className="px-3">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
            <QuantityHandler item={item} />
          </Col>
          <Col md={3}>
            <div className="text-center">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
