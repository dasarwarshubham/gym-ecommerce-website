// src/components/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { BLOGS } from "../../constants/routes";

const BlogCard = ({ blog }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.excerpt}</Card.Text>
        <Button variant="primary" as={Link} to={`${BLOGS}/${blog.id}`}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
