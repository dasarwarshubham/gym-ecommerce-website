import React from "react";
import FavoriteCard from "../../components/cards/FavoriteCard";
import { Col, Row } from "react-bootstrap";

const FavoriteSection = (props) => {
  const favorites = [
    {
      id: 1,
      productName: "Treadmill",
      description: "High-performance treadmill for effective cardio workouts.",
      price: 800,
      image: "https://dummyimage.com/400x400/ededed/000000",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      productName: "Dumbbells Set",
      description: "Versatile dumbbells set for strength training.",
      price: 100,
      image: "https://dummyimage.com/400x400/ededed/000000",
      rating: 4.0,
      reviews: 85,
    },
    {
      id: 3,
      productName: "Yoga Mat",
      description: "Premium yoga mat for comfortable practice.",
      price: 20,
      image: "https://dummyimage.com/400x400/ededed/000000",
      rating: 4.7,
      reviews: 150,
    },
  ];

  return (
    <Row>
      {favorites.map((favorite) => (
        <Col key={favorite.id} sm={6} md={4}>
          <FavoriteCard favorite={favorite} />
        </Col>
      ))}
    </Row>
  );
};

export default FavoriteSection;
