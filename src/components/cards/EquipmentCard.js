import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { MdCheckCircle, MdOutlineShoppingCart } from "react-icons/md";
import { CART, EQUIPMENTS } from "../../constants/routes";

import { addItem, fetchCart } from "../../redux/checkout/cartActions";
import { selectCartItems } from "../../redux/checkout/cartSelectors";

const EquipmentCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const alreadyInCart = cartItems?.find(
    (cartItem) => cartItem.product.id === data.id
  );

  const handleAddToCart = () => {
    if (alreadyInCart) {
      navigate(CART);
    } else {
      dispatch(
        addItem({
          product_id: data.id,
          quantity: 1,
        })
      ).then(() => {
        dispatch(fetchCart());
      });
    }
  };

  return (
    <Card className="border-0 shadow h-100 text-decoration-none">
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={data.image} alt={data.name} />
        <Link
          to={`${EQUIPMENTS}/${data.category}/${data.slug}`}
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

export default EquipmentCard;
