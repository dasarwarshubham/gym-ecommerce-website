import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

const LinksPage = (props) => {
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
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.ABOUT}>Home</Link></li>
        <li><Link to={ROUTES.CONTACT}>CONTACT</Link></li>
        <li><Link to={ROUTES.FAQS}>FAQS</Link></li>
        <li><Link to={ROUTES.LOGIN}>LOGIN</Link></li>
        <li><Link to={ROUTES.SIGNUP}>SIGNUP</Link></li>
        <li><Link to={ROUTES.PROFILE}>PROFILE</Link></li>
        <li><Link to={ROUTES.CART}>CART</Link></li>
        <li><Link to={ROUTES.SHIPPING}>SHIPPING</Link></li>
        <li><Link to={ROUTES.REVIEW}>REVIEW</Link></li>
        <li><Link to={ROUTES.PAYMENT}>PAYMENT</Link></li>
        <li><Link to={ROUTES.CONFIRMATION}>CONFIRMATION</Link></li>
        <li><Link to={ROUTES.PAGE_NOT_FOUND_404}>Page not Found</Link></li>
      </ul>
    </div>
  );
};

export default LinksPage;
