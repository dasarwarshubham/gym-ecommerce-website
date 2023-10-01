import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import required Components
import { Container, Row, Col } from "react-bootstrap";
import EquipmentCard from "../../components/cards/EquipmentCard";
import Loader from "../../components/loader/Loader";

import MyPagination from "../../components/pagination";

import useInitialLoad from "../../hooks/useInitialLoad";
// import required redux selectors
import {
  selectAllProducts,
  selectProductCount,
  // selectLoadingStatus,
  selectError,
} from "../../redux/product/productSelectors";

// import required redux actions
import { retrieveProducts } from "../../redux/product/productActions";
import { EQUIPMENTS } from "../../constants/routes";

const EquipmentsPage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  // const loading = useSelector(selectLoadingStatus);
  const equipments = useSelector(selectAllProducts);
  const productCount = useSelector(selectProductCount);
  const error = useSelector(selectError);

  const { initialLoad } = useInitialLoad(equipments);

  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page')) || 1;
  const productPerPage = 20;
  const totalPages = Math.ceil(productCount / productPerPage); // (productCount/productPerPage)

  const handlePageChange = (page) => {
    let newURL = `${EQUIPMENTS}?page=${page}`;
    if (categoryId) {
      newURL = `${EQUIPMENTS}/${categoryId}?page=${page}`;
    }
    navigate(newURL);
  };

  useEffect(() => {
    dispatch(retrieveProducts({ categoryId, currentPage }));
  }, [dispatch, categoryId, currentPage]);

  if (initialLoad) {
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
  if (productCount > 0) {
    return (
      <Container>
        <Row className="g-4 g-md-5 my-5 py-5 mx-0">
          {equipments?.map((equipment) => (
            <Col xs={6} lg={4} xl={3} key={`equipment-${equipment?.id}`}>
              <EquipmentCard data={equipment} />
            </Col>
          ))}
        </Row>
        {productCount > productPerPage && (
          <Row className="mx-0 my-5 pb-5">
            <Col xs={12} className="d-flex justify-content-center">
              <MyPagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </Col>
          </Row>
        )}
      </Container>
    );
  } else {
    <Container className="d-flex justify-content-center laign-items-center">
      <p>We will soon add new products. Stay tuned.</p>
    </Container>
  }
};

export default EquipmentsPage;
