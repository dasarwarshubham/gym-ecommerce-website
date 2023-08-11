import { connect } from "react-redux";

import { FaTrash } from "react-icons/fa";
import { QuantityBtn, QuantityCount } from "../styles/cartCard";

import {
  removeFromCart,
  updateQuantity,
} from "../../../redux/checkout/cartActions";

const QuantityHandler = ({
  item,
  loading,
  removeTrash,
  updateItemQty,
  removeItem,
}) => {
  const handleRemove = () => {
    removeItem(item.productId);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      updateItemQty({ itemId: item.productId, quantity: newQuantity });
    } else {
      removeItem(item.productId);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
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
          {" "}
          +
        </QuantityBtn>
      </div>
      {!removeTrash && (
        <>
          <br />
          <QuantityBtn
            title="remove item from cart"
            trash="true"
            onClick={handleRemove}
            disabled={loading}
          >
            <FaTrash />
          </QuantityBtn>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.cart.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeFromCart(id)),
    updateItemQty: (item) => dispatch(updateQuantity(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityHandler);
