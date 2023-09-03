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
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  const handleRemove = () => {
    dispatch(deleteItem(item.id)).then(() => {
      dispatch(fetchCart());
    });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      dispatch(
        updateQuantity({ product_id: item.id, quantity: newQuantity })
      ).then(() => {
        dispatch(fetchCart());
      });
    } else {
      handleRemove();
    }
  };

  return (
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
      <QuantityCount type="number" min="1" value={item.quantity} readOnly />
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
  );
};

export default QuantityHandler;
