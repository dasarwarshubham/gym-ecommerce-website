import React from "react";
import OrderCard from "../../components/cards/OrderCard";
import { useSelector } from "react-redux";
import {
  selectAccountLoading,
  selectOrders,
} from "../../redux/account/accountSelectors";

// import useInitialLoad from "../../hooks/useInitialLoad";
import { Spinner } from "react-bootstrap";

const OrderSection = () => {
  const { currentOrders, pastOrders } = useSelector(selectOrders);
  // const { initialLoad: currentOrderLoading } = useInitialLoad(currentOrders);
  // const { initialLoad: pastOrderLoading } = useInitialLoad(pastOrders);
  const loading = useSelector(selectAccountLoading);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ minHeight: "25vh" }}
      >
        <Spinner as="span" animation="border" />
      </div>
    );
  }

  return (
    <>
      <h4>Current Order</h4>
      {currentOrders.map((order) => (
        <OrderCard key={order.orderNumber} order={order} />
      ))}
      <h4>Past Orders</h4>
      {pastOrders.map((order) => (
        <OrderCard key={order.orderNumber} order={order} />
      ))}
    </>
  );
};

export default OrderSection;
