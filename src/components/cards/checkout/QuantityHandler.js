import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { FaTrash } from "react-icons/fa";
import { QuantityBtn, QuantityCount } from "../styles/cartCard";

import {
  fetchCart,
  updateQuantity,
  deleteItem,
} from "../../../redux/checkout/cartActions";
import { selectLoadingStatus } from "../../../redux/checkout/cartSelectors";

const QuantityHandler = ({ item, removeTrash }) => {
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  useEffect(() => {
    setTimeout(function () {
      setError(null);
      setShowError(false);
    }, 3000);
  }, [error])

  const handleRemove = () => {
    dispatch(deleteItem(item.id)).then(() => {
      dispatch(fetchCart());
    });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 5) {
      setError("Max quantity for this item is reached.")
      setShowError(true);
    }
    else if (newQuantity > 0) {
      dispatch(
        updateQuantity({ product_id: item.id, quantity: newQuantity })
      ).unwrap()
        .then((res) => {
          dispatch(fetchCart());
        }).catch((response_error) => {
          setError(response_error?.message);
          setShowError(true);
        });
    } else {
      handleRemove();
    }
  };

  return (
    <>
      <div className="d-flex align-items-center my-4">
        <span>Quantity</span>
        &nbsp;&nbsp;
        <QuantityBtn
          title="decrease quantity"
          onClick={() => handleQuantityChange(-1)}
          disabled={loading}
        >
          -
        </QuantityBtn>
        <QuantityCount type="number" min="1" max="5" value={item.quantity} readOnly aria-label="item quantity" />
        <QuantityBtn
          title="increase quantity"
          onClick={() => handleQuantityChange(1)}
          disabled={loading}
        >
          +
        </QuantityBtn>
        {!removeTrash && (
          <QuantityBtn
            title="remove item from cart"
            trash="true"
            onClick={handleRemove}
            disabled={loading}
            className="ms-3"
          >
            <FaTrash />
          </QuantityBtn>
        )}
      </div>
      {showError && <span className='text-danger'>{error}</span>}
    </>
  );
};

export default QuantityHandler;
