import { Row, Col, Card } from "react-bootstrap";
import QuantityHandler from "./QuantityHandler";

const CartCard = ({ item, showQtyHandler }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="g-2">
          <Col xs={4} md={3} lg={2} xl={2}>
            <img
              src={item.product.image}
              alt={item.product.title}
              className="img-fluid w-100"
            />
          </Col>
          <Col xs={8} md={9} lg={10} xl={10} className="px-3">
            <Row className="h-100 ">
              <Col xs={12} lg={7} xl={8}>
                <h5>{item.product.title}</h5>
                <p>Price: ${item.product.price}</p>
                {showQtyHandler ? (
                  <QuantityHandler item={item} />
                ) : (
                  <p>Quantity: {item.quantity}</p>
                )}
              </Col>
              <Col xs={12} lg={5} xl={4} className="text-lg-end">
                <p>Subtotal: ${item.total_price.toFixed(2)}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
