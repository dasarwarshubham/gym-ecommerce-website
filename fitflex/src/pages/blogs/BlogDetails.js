import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { getBlogById } from "../../redux/blogs/blogActions";

import { Container, Spinner } from "react-bootstrap";

const BlogDetailsPage = ({ blogDetails, loading, error, getData }) => {
  const { blogId } = useParams();
  const blogsData = [
    {
      id: 1,
      title: "Getting Started with Home Workouts",
      excerpt: "Learn how to kickstart your home workout routine.",
      content: "This blog post will guide you through setting up...",
      image: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      id: 2,
      title: "The Benefits of Cardio Exercise",
      excerpt: "Discover the numerous advantages of cardio workouts.",
      content: "Cardiovascular exercises are essential for maintaining...",
      image: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      id: 3,
      title: "Strength Training 101",
      excerpt:
        "A comprehensive guide to getting stronger through weightlifting.",
      content:
        "Strength training is a crucial component of a well-rounded fitness routine...",
      image: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      id: 4,
      title: "Nutrition Essentials for Fitness",
      excerpt: "Learn about the right foods to fuel your workouts.",
      content:
        "Proper nutrition plays a vital role in achieving your fitness goals...",
      image: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      id: 5,
      title: "Effective Stretching Techniques",
      excerpt:
        "Improve your flexibility and prevent injuries with these stretches.",
      content:
        "Incorporating regular stretching exercises into your routine...",
      image: "https://dummyimage.com/400x400/ededed/000000",
    },
    {
      id: 6,
      title: "Mindfulness in Exercise",
      excerpt: "Explore the benefits of mindful movement during workouts.",
      content:
        "Mindfulness involves being fully present during your exercise...",
      image: "https://dummyimage.com/400x400/ededed/000000",
    },
    // Add more blog entries
  ];
  const blog = blogsData.find((blog) => blog.id == parseInt(blogId));

  useEffect(() => {
    getData(blogId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

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

  if (blogDetails === null) {
    return (
      <Container
        fluid="xxl"
        className="mt-3 px-md-5 py-md-5 mb-4 pb-4 mb-md-5 pb-md-5 text-center "
      >
        <p className="fs-4">{`No details for Blog id: ${blogId}`}</p>
      </Container>
    );
  }

  return (
    <Container className="my-5 py-5">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    blogDetails: state.blogs.blogDetails,
    loading: state.blogs.loading,
    error: state.blogs.error,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => dispatch(getBlogById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);
