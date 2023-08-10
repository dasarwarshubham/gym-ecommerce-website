import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import BlogCard from "../../components/cards/BlogCard";

import { retrieveBlogs } from "../../redux/blogs/blogActions";

const BlogListPage = ({ blogList, loading, error, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <Spinner animation="border" variant="dark" />
      </div>
    );
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

  if (blogList.length < 1) {
    return (
      <Container
        fluid="xxl"
        className="mt-3 px-md-5 py-md-5 mb-4 pb-4 mb-md-5 pb-md-5 text-center d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <>
          <p className="fs-4 mb-1">Please stay tuned.</p>
          <p className="fs-4">We will add new blogs soon...</p>
        </>
      </Container>
    );
  }

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center mb-5">Blogs</h2>
      <Row className="g-5">
        {blogList.map((blog) => (
          <Col key={blog.id} md={4}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    blogList: state.blogs.blogList,
    loading: state.blogs.loading,
    error: state.blogs.error,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(retrieveBlogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogListPage);
