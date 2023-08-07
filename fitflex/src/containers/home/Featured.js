import React from "react";
import FeaturedProductCard from "../../components/cards/FeaturedProduct";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Featured = (props) => {
  const featuredItems = [
    {
      image: "/images/featured-products/treadmills.png",
      alt: "Treadmill",
      title: "TreadMill",
    },
    {
      image: "/images/featured-products/excercise-bikes.png",
      alt: "Exercise bikes",
      title: "Exercise bikes",
    },
    {
      image: "/images/featured-products/weights-and-dumbbells.png",
      alt: "Weights & Dumbbells",
      title: "Weights & Dumbbells",
    },
    {
      image: "/images/featured-products/yoga-and-accessories.png",
      alt: "Yoga mats and accessories",
      title: "Yoga mats and accessories",
    },
  ];
  return (
    <Container className="my-5 py-5">
      <h2 className="text-center my-5">
        Get Fit in Style with Our Featured Products
      </h2>
      <Row className="g-5">
        {featuredItems.map((item, idx) => (
          <Col md={6} key={`featured-item-${idx}`}>
            <FeaturedProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Featured;
