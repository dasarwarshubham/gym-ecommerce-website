import React from "react";
import { useSelector } from "react-redux";

import { Badge } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import { selectCartItemsCount } from "../../redux/checkout/cartSelectors";

import styled from "styled-components";

const CartContainer = styled.div`
  position: relative;

  .cartCount {
    position: absolute;
    top: -0.75rem;
    right: 0rem;
    padding: 0.3rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-small;
  }
`;

const CartButton = () => {
  const count = useSelector(selectCartItemsCount);
  return (
    <>
      <CartContainer aria-label={`Cart: ${count} items`}>
        <MdOutlineShoppingCart
          className="cartIcon"
          style={{ color: "#ffffff" }}
          size={28}
        />
        <Badge className="cartCount" bg="danger">
          {count}
        </Badge>
        <span className="visually-hidden">number of items in cart</span>
      </CartContainer>
    </>
  );
};

export default CartButton;
