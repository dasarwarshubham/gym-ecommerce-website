import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { MdCheckCircle, MdOutlineShoppingCart } from "react-icons/md";

import { addToCart } from "../../redux/checkout/cartActions";
import { CART, EQUIPMENTS, LOGIN } from "../../constants/routes";

const EquipmentCard = ({
  isAuthenticated,
  data,
  loading,
  cartItems,
  addItem,
}) => {
  const navigate = useNavigate();

  const alreadyInCart = cartItems.find(
    (cartItem) => cartItem.productId === data.id
  );

  const handleAddToCart = () => {
    if (alreadyInCart) {
      navigate(CART);
    } else {
      if (!isAuthenticated) {
        navigate(LOGIN);
      } else {
        addItem({
          productId: data.id,
          quantity: 1,
          product: data,
        });
      }
    }
  };

  return (
    <Card className="border-0 shadow h-100 text-decoration-none">
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={data.image} alt={data.name} />
        <Link
          to={`${EQUIPMENTS}/${data.id}`}
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        />
      </div>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Price: ${data.price}</Card.Text>
        <div className="d-grid">
          <Button variant="primary" onClick={handleAddToCart}>
            {alreadyInCart ? (
              <>
                Added To Cart&nbsp;
                <MdCheckCircle color="green" />
              </>
            ) : (
              <>
                Add to Cart&nbsp;
                <MdOutlineShoppingCart />
              </>
            )}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.cart.loading,
    cartItems: state.cart.items,
    isAuthenticated: state.account.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (values) => dispatch(addToCart(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentCard);
