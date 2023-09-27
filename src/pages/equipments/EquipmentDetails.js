import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// import required Components
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import { MdCheckCircle, MdOutlineShoppingCart } from "react-icons/md";
import Ratings from "../../components/ratings/Ratings";
import Loader from "../../components/loader/Loader";
import QuantityHandler from "../../components/cards/checkout/QuantityHandler";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// import required redux selectors
import {
  selectSelectedProduct,
  selectLoadingStatus,
  selectError,
} from "../../redux/product/productSelectors";
import {
  selectCartItems,
  selectLoadingStatus as selectCartLoadingStatus,
  selectError as selectCartError,
} from "../../redux/checkout/cartSelectors";

// import required redux actions
import { addItem, fetchCart } from "../../redux/checkout/cartActions";
import { getProductById } from "../../redux/product/productActions";

// import required routes
import { CART } from "../../constants/routes";

const EquipmentDetailsPage = () => {
  const { productId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector(selectLoadingStatus);
  const equipment = useSelector(selectSelectedProduct);
  const error = useSelector(selectError);

  const cartLoading = useSelector(selectCartLoadingStatus);
  const cartItems = useSelector(selectCartItems);
  const cartError = useSelector(selectCartError);

  useEffect(() => {
    dispatch(getProductById(productId));
    // eslint-disable-next-line
  }, [productId]);

  const handleAddToCart = () => {
    if (alreadyInCart) {
      navigate(CART);
    } else {
      dispatch(
        addItem({
          product_id: equipment.id,
          quantity: 1,
        })
      ).then(() => {
        dispatch(fetchCart());
      });
    }
  };

  const alreadyInCart = cartItems?.find(
    (cartItem) => cartItem.product.id === equipment?.id
  );

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

  if (!equipment) {
    return <div>Equipment not found</div>;
  }

  const equipment_images = [
    { id: 0, image: equipment.image },
    ...equipment?.images,
  ];

  const equipments_ratings =
    equipment?.reviews.length > 0
      ? equipment?.reviews.reduce(
          (accumulator, obj) => accumulator + obj.ratings,
          0
        ) / equipment?.reviews.length
      : 0;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            grabCursor
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
          >
            {equipment_images.map((image, idx) => (
              <SwiperSlide key={`equipment-${idx}`}>
                <Image
                  src={image?.image}
                  alt={equipment?.title}
                  className="equipment-image img-fluid w-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col md={6}>
          <h1 className="d-flex align-items-center">
            {equipment?.title}&nbsp;
            {cartLoading && (
              <Spinner animation="grow">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {cartError && <span className="text-danger">{cartError}</span>}
          </h1>
          <Table bordered>
            <tbody>
              <tr>
                <td>Price</td>
                <td>${equipment?.price}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{equipment?.category}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>
                  <Ratings ratings={equipments_ratings} />
                </td>
              </tr>
              {/* <tr>
                <td>Rating</td>
                <td>
                  <Ratings ratings={equipment?.ratings} />
                </td>
              </tr> */}
              {/* <tr>
                <td>Review</td>
                <td>
                  {equipment?.reviews.length} - {equipments_ratings}
                </td>
              </tr> */}
              <tr>
                <td>Description</td>
                <td>{equipment?.description}</td>
              </tr>
            </tbody>
          </Table>
          {alreadyInCart ? (
            <>
              <div className="my-4">
                <QuantityHandler item={alreadyInCart} removeTrash={true} />
              </div>
              Item added to cart&nbsp;
              <MdCheckCircle color="green" size={18} />
              <br />
              <Button variant="primary" onClick={handleAddToCart}>
                Go To Cart &#8594;
              </Button>
            </>
          ) : (
            <div className="my-4">
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart&nbsp;
                <MdOutlineShoppingCart />
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EquipmentDetailsPage;
