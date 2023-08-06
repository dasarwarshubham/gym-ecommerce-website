import React from "react";
import { Link } from "react-router-dom";

const BlogListPage = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        border: "1px solid hotpink",
      }}
    >
      <ul>
        <li key={`blog-1`}><Link to="/blogs/1">Blog 1</Link></li>
        <li key={`blog-2`}><Link to="/blogs/2">Blog 2</Link></li>
        <li key={`blog-3`}><Link to="/blogs/3">Blog 3</Link></li>
        <li key={`blog-4`}><Link to="/blogs/4">Blog 4</Link></li>
        <li key={`blog-5`}><Link to="/blogs/5">Blog 5</Link></li>
        <li key={`blog-6`}><Link to="/blogs/6">Blog 6</Link></li>
      </ul>
    </div>
  );
};

export default BlogListPage;
