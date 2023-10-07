import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import * as Yup from "yup";

// import custom hook
import useInitialLoad from "../../hooks/useInitialLoad";

// import required Components
import { Container, Row, Col } from "react-bootstrap";
import EquipmentCard from "../../components/cards/EquipmentCard";
import Loader from "../../components/loader/Loader";

import MyPagination from "../../components/pagination";
import {
  FormButton,
  FormField,
  FormikForm,
} from "../../components/form";

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
import { MdOutlineSearch } from "react-icons/md";

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
  const searchQuery = queryParams.get('search');
  const productPerPage = 20;
  const totalPages = Math.ceil(productCount / productPerPage); // (productCount/productPerPage)

  // const handlePageChange = (page) => {
  //   let newURL = `${EQUIPMENTS}?page=${page}`;
  //   if (searchQuery && categoryId) {
  //     newURL = `${EQUIPMENTS}/${categoryId}?search=${searchQuery}&page=${page}`;
  //   } else if (searchQuery) {
  //     newURL = `${EQUIPMENTS}/?search=${searchQuery}&page=${page}`;
  //   } else if (categoryId) {
  //     newURL = `${EQUIPMENTS}/${categoryId}?page=${page}`;
  //   }
  //   navigate(newURL);
  // };
  const handlePageChange = (page) => {
    let newURL = `${EQUIPMENTS}?page=${page}`;
    if (searchQuery && categoryId) {
      newURL = `${EQUIPMENTS}/${categoryId}?search=${searchQuery}&page=${page}`;
    } else if (searchQuery) {
      newURL = `${EQUIPMENTS}/?search=${searchQuery}&page=${page}`;
    } else if (categoryId) {
      newURL = `${EQUIPMENTS}/${categoryId}?page=${page}`;
    }
    navigate(newURL);
  };

  useEffect(() => {
    dispatch(retrieveProducts({ searchQuery, categoryId, currentPage }));
  }, [dispatch, searchQuery, categoryId, currentPage]);

  // const handleClick = async (values, setSubmitting, resetForm) => {
  //   if (values.category) {
  //     navigate(`${EQUIPMENTS}/${values.category}?search=${values.search}`)
  //   } else {
  //     navigate(`${EQUIPMENTS}/?search=${values.search}`)
  //   }
  // };

  const handleClick = async (values, setSubmitting, resetForm) => {
    navigate(`${EQUIPMENTS}/?search=${values.search}`)
  };

  // meta tags for different Equipments
  const seoCategoryOptions = [
    {
      category: "core",
      url: `https://fitflex.site${EQUIPMENTS}/${categoryId}`,
      title: "Core Equipment | Fitflex - Strengthen Your Core Muscles",
      keywords: "Core Training Gear, Ab Workouts, Core Strength, Fitflex Core Essentials",
      description: "Strengthen your core muscles with Fitflex's core equipment. Find ab rollers, stability balls, and core training gear to power up your core workouts."
    },
    {
      category: "flexibility",
      url: `https://fitflex.site${EQUIPMENTS}/${categoryId}`,
      title: "Flexibility Equipment | Fitflex - Improve Your Mobility",
      keywords: "Flexibility Gear, Mobility Equipment, Stretching Aids, Fitflex Flexibility Essentials",
      description: "Enhance your mobility and flexibility with Fitflex's equipment. Discover stretching aids, yoga props, and tools to improve your range of motion."
    },
    {
      category: "strength",
      url: `https://fitflex.site${EQUIPMENTS}/${categoryId}`,
      title: "Strength Equipment | Fitflex - Build Muscles and Power",
      keywords: "Strength Training Gear, Muscle Building, Powerlifting Equipment, Fitflex Strength Essentials",
      description: "Achieve your strength goals with Fitflex's strength equipment. Explore our collection of dumbbells, kettlebells, and machines for effective muscle building."
    },
    {
      category: "reovery",
      url: `https://fitflex.site${EQUIPMENTS}/${categoryId}`,
      title: "Recovery Equipment | Fitflex - Enhance Your Post-Workout Routine",
      keywords: "Recovery Gear, Post-Workout Equipment, Muscle Relaxation, Fitflex Recovery Essentials",
      description: "Take care of your body with Fitflex's recovery equipment. Browse our selection of massage tools, foam rollers, and accessories to enhance your post-workout routine."
    },
    {
      category: "cardio",
      url: `https://fitflex.site${EQUIPMENTS}/${categoryId}`,
      title: "Cardio Equipment | Fitflex - Boost Your Heart Health",
      keywords: "Cardio Fitness Gear, Cardiovascular Workouts, Heart Health, Fitflex Cardio Equipment",
      description: "Elevate your heart health with Fitflex's cardio equipment. Explore our range of treadmills, stationary bikes, and more for effective cardiovascular workouts."
    },
    {
      category: undefined,
      url: `https://fitflex.site${EQUIPMENTS}`,
      title: "Gym Equipment | Fitflex - Explore Gym Gear Options",
      keywords: "Fitness Equipment, Gym Gear, Exercise Machines, Fitflex Products, Fitness Gear, Workout Essentials, Fitflex Product Range, Cardio, Recovery, Core, Strength, Flexibility",
      description: "Browse Fitflex's extensive range of top-notch gym equipment and gear. Elevate your fitness journey with our high-quality products."
    }
  ]

  let seoContent = seoCategoryOptions.filter((category) => categoryId === category.category)[0]

  if (initialLoad && !error) {
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
      <>
        <Helmet>
          <link rel="canonical" href={seoContent?.url} />

          <meta name="description" content={seoContent?.description} />
          <meta name="keywords" content={seoContent?.keywords} />

          <meta property="og:title" content={seoContent?.title} />
          <meta property="og:description" content={seoContent?.description} />
          <meta property="og:image" content="https://fitflex.site/fitflex-og-card.png" />
          <meta property="og:url" content={seoContent?.url} />

          <meta name="twitter:title" content={seoContent?.title} />
          <meta name="twitter:description" content={seoContent?.description} />
          <meta name="twitter:image" content="https://fitflex.site/fitflex-twitter-card.png" />

          <title>{seoContent?.title}</title>
        </Helmet>
        <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
          <Row className="g-5 mx-0 mb-5 justify-content-center">
            <Col xs={12} lg={9} xl={7}>
              <FormikForm
                initialValues={{
                  search: "",
                  page: currentPage,
                  category: categoryId
                }}
                validationSchema={Yup.object().shape({
                  search: Yup.string().required().label("Search"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) =>
                  handleClick(values, setSubmitting, resetForm)
                }
                enableReinitialize
                className="row mx-0 g-2 g-md-4"
              >
                <FormField
                  name="search"
                  placeholder="Search equipments here..."
                  fieldClass="col col-md-9"
                />
                <FormButton className="col-2 col-md-3" style={{ minWidth: 'unset' }}>
                  <MdOutlineSearch size={20} />
                  <span className="d-none d-md-inline-flex">
                    Search
                  </span>
                </FormButton>
              </FormikForm>
            </Col>
          </Row>
          <Row className="g-4 g-md-5 my-5 pb-5 mx-0">
            {equipments?.map((equipment) => (
              <Col xs={6} lg={4} xl={3} key={`equipment-${equipment?.id}`}>
                <EquipmentCard data={equipment} />
              </Col>
            ))}
          </Row>
          <MyPagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Container>
      </>
    );
  } else {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "65vh" }}>
        <p>We will soon add new products. Stay tuned.</p>
      </Container>
    )
  }
};

export default EquipmentsPage;
