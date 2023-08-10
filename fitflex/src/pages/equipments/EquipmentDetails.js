import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import { MdCheckCircle, MdOutlineShoppingCart } from "react-icons/md";
import Ratings from "../../components/ratings/Ratings";
import QuantityHandler from "../../components/cards/checkout/QuantityHandler";

import equipmentData from "./fixtures/equipmentsData";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/checkout/cartActions";
import { CART } from "../../constants/routes";

const EquipmentDetailsPage = ({ loading, cartItems, addItem }) => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const equipment = equipmentData.find(
    (item) => item.id.toString() === productId
  );

  const handleAddToCart = () => {
    if (alreadyInCart) {
      navigate(CART);
    } else {
      addItem({ item: equipment, quantity: 1 });
    }
  };

  const alreadyInCart = cartItems.find(
    (cartItem) => cartItem.id === equipment.id
  );

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
          <h1 className="d-flex align-items-center">
            {equipment?.name}&nbsp;
            {loading && (
              <Spinner animation="grow">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </h1>
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
          {alreadyInCart ? (
            <>
              <div className="my-4">
                <QuantityHandler item={alreadyInCart} removeTrash={true} />
              </div>
              Item added to cart &nbsp;
              <MdCheckCircle color="green" />
              <br />
              <Button variant="primary" onClick={handleAddToCart}>
                Go To Cart &#8594;
              </Button>
            </>
          ) : (
            <div className="my-4">
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart&nbsp;
                <MdOutlineShoppingCart />
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.cart.loading,
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (values) => dispatch(addToCart(values)),
    removeItem: (id) => dispatch(removeFromCart(id)),
    updateItemQty: (item) => dispatch(updateQuantity(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentDetailsPage);
