import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

// import custom hook
import useInitialLoad from "../../hooks/useInitialLoad";

// import required Components
import Loader from "../../components/loader/Loader";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../components/cards/BlogCard";

import { MdOutlineSearch } from "react-icons/md";

import MyPagination from "../../components/pagination";
import {
  FormButton,
  FormField,
  FormikForm,
} from "../../components/form";

// import required redux actions
import { retrieveBlogs } from "../../redux/blog/blogActions";

// import required redux selectors
import { selectAllBlogs, selectBlogCount, selectError } from "../../redux/blog/blogSelectors";
import { BLOGS } from "../../constants/routes";

const BlogListPage = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const blogCount = useSelector(selectBlogCount);
  const error = useSelector(selectError);
  const { initialLoad } = useInitialLoad(blogs);

  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page')) || 1;
  const searchQuery = queryParams.get('search');
  const blogsPerPage = 20;
  const totalPages = Math.ceil(blogCount / blogsPerPage); // (blogCount/blogsPerPage)

  const handlePageChange = (page) => {
    let newURL = `${BLOGS}?page=${page}`;
    if (searchQuery) {
      newURL = `${BLOGS}/?search=${searchQuery}&page=${page}`;
    }
    navigate(newURL);
  };

  useEffect(() => {
    dispatch(retrieveBlogs({ searchQuery, currentPage }));
  }, [dispatch, searchQuery, currentPage]);

  const handleClick = async (values, setSubmitting, resetForm) => {
    navigate(`${BLOGS}/?search=${values.search}`)
  };

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
  if (blogCount > 0) {
    return (
      <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
        <Row className="g-5 mx-0 mb-5 justify-content-center">
          <Col xs={12} lg={9} xl={7}>
            <FormikForm
              initialValues={{
                search: "",
                page: currentPage
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
                placeholder="Search blogs here..."
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
        <Row className="g-5 my-5 mx-0">
          {blogs.map((blog) => (
            <Col key={blog.id} sm={6} md={4}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
        <MyPagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Container>
    )
  } else {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "65vh" }}>
        <p>We will soon add new blogs. Stay tuned.</p>
      </Container>
    )
  }
};

export default BlogListPage;
