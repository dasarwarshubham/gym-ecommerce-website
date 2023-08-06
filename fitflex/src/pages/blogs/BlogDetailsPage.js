import React from "react"
import { useParams } from "react-router-dom";

const BlogDetailsPage = (props) => {
  let { blogId } = useParams();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '75vh',
        border: '1px solid hotpink',
      }}
    >
      BlogDetailsPage { blogId }
    </div>
  );
};

export default BlogDetailsPage;
