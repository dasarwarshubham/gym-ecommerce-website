import React from "react";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Oops! The page you are looking for does not exist. Explore our gym equipment collection or contact us for assistance." />
        <meta name="keywords" content="Page Not Found, 404 Error, Gym Equipment Collection" />

        <meta property="og:title" content="Page Not Found | Fitflex - Gym Equipment Collection" />
        <meta property="og:description" content="Oops! The page you are looking for does not exist. Explore our gym equipment collection or contact us for assistance." />

        <meta name="twitter:title" content="Page Not Found | Fitflex - Gym Equipment Collection" />
        <meta name="twitter:description" content="Oops! The page you are looking for does not exist. Explore our gym equipment collection or contact us for assistance." />

        <title>Page Not Found | Fitflex - Gym Equipment Collection</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <h1>404 | PageNotFound</h1>
      </div>
    </>
  );
};

export default PageNotFound;
