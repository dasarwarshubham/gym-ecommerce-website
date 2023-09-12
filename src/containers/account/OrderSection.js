import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";

import OrderCard from "../../components/cards/OrderCard";
import { EQUIPMENTS } from "../../constants/routes";

import {
  selectAccountLoading,
  selectOrders,
} from "../../redux/account/accountSelectors";


const OrderSection = () => {
  const navigate = useNavigate();

  const loading = useSelector(selectAccountLoading);
  const { currentOrders, pastOrders } = useSelector(selectOrders);

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

  if (!currentOrders?.length && !pastOrders?.length) {
    return (
      <div className="text-center">
        <p>No have not ordered anything yet.</p>
        <p> Start you Fit and flexible journey with us.</p>
        <Button onClick={() => navigate(EQUIPMENTS)}>Continue Shopping</Button>
      </div>
    )
  }

  return (
    <>
      {currentOrders?.length > 0 && (
        <>
          <h4>Current Order</h4>
          {currentOrders?.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </>
      )}
      {pastOrders?.length > 0 && (
        <>
          <h4>Past Orders</h4>
          {pastOrders?.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </>
      )}
    </>
  );
};

export default OrderSection;
