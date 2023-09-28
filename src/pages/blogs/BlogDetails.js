import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import custom hooks
// import useInitialLoad from "../../hooks/useInitialLoad";

// import required Components
import { Container } from "react-bootstrap";
import Loader from "../../components/loader/Loader";

// import required redux selectors
import {
  selectLoadingStatus,
  selectSelectedBlog,
  selectError,
} from "../../redux/blog/blogSelectors";

// import required redux actions
import { getBlogById } from "../../redux/blog/blogActions";

const BlogDetailsPage = () => {
  const { blogId } = useParams();

  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const blogDetails = useSelector(selectSelectedBlog);
  const error = useSelector(selectError);
  // const { initialLoad } = useInitialLoad(blogDetails);

  useEffect(() => {
    dispatch(getBlogById(blogId));
    // eslint-disable-next-line
  }, [blogId]);

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
    <Container className="my-5 py-5" style={{ minHeight: "65vh" }}>
      <h2>{blogDetails?.title}</h2>
      <p>{blogDetails?.content}</p>
    </Container>
  );
};

export default BlogDetailsPage;
