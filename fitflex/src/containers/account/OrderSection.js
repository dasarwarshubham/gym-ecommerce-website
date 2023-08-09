import React from "react";
import OrderCard from "../../components/cards/OrderCard";

const OrderSection = (props) => {
  const orders = [
    {
      orderNumber: "ORD12345",
      date: "2023-05-20",
      items: [
        {
          productName: "Treadmill",
          quantity: 2,
          price: 800,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          productName: "Dumbbells Set",
          quantity: 1,
          price: 100,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      shippingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      total: 1700,
    },
    {
      orderNumber: "ORD67890",
      date: "2023-05-18",
      items: [
        {
          productName: "Yoga Mat",
          quantity: 3,
          price: 20,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          productName: "Resistance Bands",
          quantity: 2,
          price: 15,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      shippingAddress: {
        street: "456 Elm St",
        city: "Somewhere",
        state: "NY",
        zip: "54321",
      },
      total: 85,
    },
  ];

  return (
    <>
      <h4>Order History</h4>
      {orders.map((order) => (
        <OrderCard key={order.orderNumber} order={order} />
      ))}
    </>
  );
};

export default OrderSection;
