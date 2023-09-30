import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import required Components
import { Container, Row, Col } from "react-bootstrap";
import EquipmentCard from "../../components/cards/EquipmentCard";
import Loader from "../../components/loader/Loader";

// import required redux selectors
import {
  selectAllProducts,
  selectLoadingStatus,
  selectError,
} from "../../redux/product/productSelectors";

// import required redux actions
import { retrieveProducts } from "../../redux/product/productActions";

const EquipmentsPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const equipments = useSelector(selectAllProducts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(retrieveProducts(categoryId));
    // eslint-disable-next-line
  }, [dispatch, categoryId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <Container>
      <Row className="g-4 g-md-5 my-5 py-5 mx-0">
        {equipments.map((equipment) => (
          <Col xs={6} lg={4} xl={3} key={`equipment-${equipment.id}`}>
            <EquipmentCard data={equipment} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EquipmentsPage;
