import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import required Components
import { Row, Col } from "react-bootstrap";
import EquipmentCard from "../../components/cards/EquipmentCard";
import Loader from "../../components/loader/Loader";

// import required redux selectors
import {
  selectAllproducts,
  selectLoadingStatus,
  selectError,
} from "../../redux/product/productSelectors";

// import required redux actions
import { retrieveProducts } from "../../redux/product/productActions";

const EquipmentList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const equipments = useSelector(selectAllproducts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(retrieveProducts());
  }, []);

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
    <Row className="g-5 my-5 py-5">
      {equipments.map((equipment) => (
        <Col xs={6} md={4} lg={3} key={`equipment-${equipment.id}`}>
          <EquipmentCard data={equipment} />
        </Col>
      ))}
    </Row>
  );
};

export default EquipmentList;
