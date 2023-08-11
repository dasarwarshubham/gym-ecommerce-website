import { Row, Col, Card } from "react-bootstrap";
import QuantityHandler from "./QuantityHandler";

const CartCard = ({ item }) => {
  const subtotal = item.product.price * item.quantity;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="g-2">
          <Col xs={3}>
            <img
              src={item.product.image}
              alt={item.product.name}
              className="img-fluid w-100"
            />
          </Col>
          <Col xs={6} className="px-3">
            <h5>{item.product.name}</h5>
            <p>Price: ${item.product.price}</p>
            <QuantityHandler item={item} />
          </Col>
          <Col xs={3}>
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
