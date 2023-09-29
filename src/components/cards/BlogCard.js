// src/components/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { BLOGS } from "../../constants/routes";

const BlogCard = ({ blog }) => {
  return (
    <Card
      as={Link}
      to={`${BLOGS}/${blog.id}`}
      aria-label={`Go to ${blog.title.replaceAll('-', '')}`}
      className="h-100 link-offset-1 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
    >
      <div className="ratio ratio-1x1">
        <Card.Img variant="top" src={blog.image} alt={blog.title.replaceAll('-', '')} />
      </div>
      <Card.Body>
        <Card.Title className="text-truncate">{blog.title}</Card.Title>
        <Card.Text className="text-truncate">{blog.excerpt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
