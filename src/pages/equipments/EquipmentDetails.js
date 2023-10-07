import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import DOMPurify from 'dompurify';

// import required Components
import {
  Container,
  Row,
  Col,
  // Image,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import { MdCheckCircle, MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";

import Ratings from "../../components/ratings/Ratings";
import Loader from "../../components/loader/Loader";
import QuantityHandler from "../../components/cards/checkout/QuantityHandler";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper";

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
import ReviewCard from "../../components/cards/ReviewCard";

import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";

const EquipmentDetailsPage = () => {
  const { categoryId, productId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width: 1199px)')

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

  // const equipment_images = [
  //   { id: 0, image: equipment.image },
  //   ...equipment?.images,
  // ];

  const equipment_images = [
    {
      original: equipment.image,
      thumbnail: equipment.image,
      originalClass: "ratio ratio-1x1"
    },
    ...equipment?.images.map((item) => {
      return {
        original: item.image,
        thumbnail: item.image,
        originalClass: "ratio ratio-1x1"
      };
    }),
  ];

  console.log(equipment_images);

  const equipments_ratings =
    equipment?.reviews.length > 0
      ? equipment?.reviews.reduce(
        (accumulator, obj) => accumulator + obj.ratings,
        0
      ) / equipment?.reviews.length
      : 0;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://fitflex.site/equipments/${categoryId}/${productId}`} />

        <meta name="description" content={equipment?.description.slice(0,160)+'...'} />
        <meta name="keywords" content="Gym Equipment Categories, Fitness Gear, Workout Essentials, Fitflex Product Range, Cardio, Recovery, Strength, Flexibility, Core" />

        <meta property="og:title" content={`${equipment?.title} | ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Equipments | Fitflex`} />
        <meta property="og:description" content={equipment?.description.slice(0,160)+'...'} />
        <meta property="og:image" content={equipment.image} />
        <meta property="og:url" content={`https://fitflex.site/equipments/${categoryId}/${productId}`} />

        <meta name="twitter:title" content={`${equipment?.title} | ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Equipments | Fitflex`} />
        <meta name="twitter:description" content={equipment?.description.slice(0,160)+'...'} />
        <meta name="twitter:image" content={equipment.image} />

        <title>{equipment?.title} | {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Equipments | Fitflex</title>
      </Helmet>
      <Container fluid="xxl" className="my-5">
        <Row className="mx-0 g-4 ">
          <Col md={6}>
            {/* <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            grabCursor
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
            style={{
              position: "sticky",
              top: '90px',
              overflowY: "auto"
            }}
          >
            {equipment_images.map((image, idx) => (
              <SwiperSlide key={`equipment-${idx}`} className="ratio ratio-1x1">
                <Image
                  src={image?.image}
                  alt={equipment?.title}
                  className="equipment-image img-fluid w-100 object-fit-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
            <div
              style={{
                position: "sticky",
                top: '90px',
              }}
            >
              <ImageGallery
                items={equipment_images}
                showPlayButton={false}
                thumbnailPosition={isMobile ? "bottom" : "left"}
              />
            </div>
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
              </tbody>
            </Table>
            {equipment.out_of_stock ? (
              <Button variant="outline" className="border border-danger text-danger my-4" onClick={() => null}>
                Out of Stock&nbsp;
                <MdOutlineRemoveShoppingCart />
              </Button>
            ) : alreadyInCart ? (
              <>
                <div className="my-4">
                  <QuantityHandler item={alreadyInCart} removeTrash={true} />
                </div>
                Item added to cart&nbsp;
                <MdCheckCircle color="green" size={18} />
                <br />
                <Button className="mb-4" variant="primary" onClick={handleAddToCart}>
                  Go To Cart &#8594;
                </Button>
              </>
            ) : (
              <div className="my-4">
                <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart&nbsp;
                  <MdOutlineAddShoppingCart />
                </Button>
              </div>
            )}
            <div className="d-none d-xl-block">
              <div className="d-block fs-5 fw-bold">Description</div>
              <div className="equipment-details-container" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(equipment.description, { USE_PROFILES: { html: true } }) }}></div>
            </div>
          </Col>
        </Row>
        <Container fluid="xxl" md={12} className="d-block d-xl-none">
          <div className="d-block fs-5 fw-bold">Description</div>
          <div className="equipment-details-container" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(equipment.description, { USE_PROFILES: { html: true } }) }}></div>
        </Container>
      </Container>
      {equipment?.reviews.length > 0 && (
        <>
          <hr className="container" />
          <Container className="mb-5 pb-5">
            <Row className="mx-0 g-4">
              <div className="d-block fs-5 fw-bold">Reviews</div>
              {equipment?.reviews.map((review, idx) => (
                <Col lg={6} key={`${equipment.id}-${idx}`}>
                  <ReviewCard data={review} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default EquipmentDetailsPage;
