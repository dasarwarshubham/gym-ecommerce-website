import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useInitialLoad from "../../hooks/useInitialLoad";

import { getBlogById } from "../../redux/blogs/blogActions";

import { Container } from "react-bootstrap";
import Loader from "../../components/loader/Loader";

import {
  selectLoadingStatus,
  selectSelectedBlog,
  selectError,
} from "../../redux/blogs/blogSelectors";

const BlogDetailsPage = () => {
  const { blogId } = useParams();

  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const blogDetails = useSelector(selectSelectedBlog);
  const error = useSelector(selectError);
  const { initialLoad } = useInitialLoad(blogDetails);

  useEffect(() => {
    dispatch(getBlogById(blogId));
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
    <Container className="my-5 py-5">
      <h2>{blogDetails?.title}</h2>
      <p>{blogDetails?.content}</p>
    </Container>
  );
};

export default BlogDetailsPage;
