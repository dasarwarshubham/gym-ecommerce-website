import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInitialLoad from "../../hooks/useInitialLoad";

import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../components/loader/Loader";

import BlogCard from "../../components/cards/BlogCard";

import { retrieveBlogs } from "../../redux/blogs/blogActions";
import { selectAllBlogs, selectError } from "../../redux/blogs/blogSelectors";

const BlogListPage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const error = useSelector(selectError);
  const { initialLoad } = useInitialLoad(blogs);

  useEffect(() => {
    dispatch(retrieveBlogs());
  }, []);

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

  return (
    <>
      <Container className="my-5 py-5">
        <Row className="g-5 mx-0">
          {blogs.map((blog) => (
            <Col key={blog.id} sm={6} md={4}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogListPage;
