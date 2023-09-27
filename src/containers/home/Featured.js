import React, { useEffect } from "react";
import FeaturedProductCard from "../../components/cards/FeaturedProduct";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { retrieveFeaturedProducts } from "../../redux/product/productActions";
import { useDispatch, useSelector } from "react-redux";
import { selectFeaturedProducts } from "../../redux/product/productSelectors";

const Featured = () => {
  const dispatch = useDispatch();
  const featuredProducts = useSelector(selectFeaturedProducts);

  useEffect(() => {
    dispatch(retrieveFeaturedProducts())
  }, [dispatch])

  if (featuredProducts && featuredProducts?.length > 0) {
    return (
      <Container className="my-5 py-5">
        <h2 className="text-center my-5">
          Get Fit in Style with Our Featured Products
        </h2>
        <Row className="g-5 mx-0">
          {featuredProducts && featuredProducts.map((item, idx) => (
            <Col md={6} key={`featured-equipment-${idx}`}>
              <FeaturedProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default Featured;
