import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import custom hook
import useInitialLoad from "../../hooks/useInitialLoad";

// import required Components
import Loader from "../../components/loader/Loader";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../components/cards/BlogCard";

// import required redux actions
import { retrieveBlogs } from "../../redux/blog/blogActions";

// import required redux selectors
import { selectAllBlogs, selectError } from "../../redux/blog/blogSelectors";

const BlogListPage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const error = useSelector(selectError);
  const { initialLoad } = useInitialLoad(blogs);

  useEffect(() => {
    dispatch(retrieveBlogs());
    // eslint-disable-next-line
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
