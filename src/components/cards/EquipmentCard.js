import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { MdCheckCircle, MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
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
      <div style={{ position: "relative" }} className="ratio ratio-12x10">
        <Card.Img
          variant="top"
          src={data.image}
          alt={data.title?.replaceAll('-', '')}
          className="img-fluid w-100 object-fit-cover"
        />
        <Link
          aria-label={`Go to ${data.title?.replaceAll('-', '')} page`}
          to={`${EQUIPMENTS}/${data.category}/${data.slug}`}
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="text-truncate">{data.title}</Card.Title>
          <Card.Text className="mb-3">Price: ${data.price}</Card.Text>
        </div>
        <div className="d-grid">
          {data.out_of_stock ? (
            <Button variant="outline" className="border border-dark text-muted" onClick={() => null}>
              Out of Stock&nbsp;
              <MdOutlineRemoveShoppingCart />
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddToCart}>
              {alreadyInCart ? (
                <>
                  Added To Cart&nbsp;
                  <MdCheckCircle color="green" />
                </>
              ) : (
                <>
                  Add to Cart&nbsp;
                  <MdOutlineAddShoppingCart />
                </>
              )}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default EquipmentCard;
