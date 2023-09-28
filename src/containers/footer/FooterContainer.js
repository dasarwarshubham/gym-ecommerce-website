import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot, FaPhone, FaEnvelope, FaBusinessTime, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';

import * as ROUTES from '../../constants/routes.js'

/****************** Styles ****************************/
const Logo = styled.img`
  height: 5rem;
`;

const FooterContainer = styled.div`
  background-color: #111111;
  color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .nav-link{
    display: inline-flex;
  }
  .nav-link:hover{
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    color: gold;
  }
  
  li > .nav-link{ 
    background-color: transparent;
    margin-bottom: 0.5rem;
    color: #ffffff;
    border: none;
    padding: 0;
  }

  @media (min-width: 320px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 375px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

/************************** Footer Component ******************************/
const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row className="mx-0 g-4">
          <Col xl={3} lg={4} md={12}>
            <Link to={ROUTES.HOME}>
              <Logo src="/images/logo.svg" alt="fitflex logo" className="mb-2" />
            </Link>
            <p>
              <FaLocationDot size={16} />&nbsp;
              <Link className="nav-link" target="_blank" rel="noopener noreferrer" to={ROUTES.MAP}>
                <div>
                  123 Main Street,
                  <br />
                  Suite 500, Anytown India 123456
                </div>
              </Link>
            </p>
            <p><FaPhone size={16} />&nbsp;<Link className="nav-link" to={ROUTES.PHONE}>555-555-5555</Link></p>
            <p><FaEnvelope size={16} />&nbsp;<Link className="nav-link" to={ROUTES.EMAIL}>hello.fitflex@gmail.com</Link></p>
            <p>
              <FaBusinessTime size={16} />&nbsp;
              <div className="d-inline-flex">
                Hours of Operation: <br /> Monday - Friday 9am - 5pm IST
              </div>
            </p>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6}>
            <h5 className="mb-4 fw-bold">Explore</h5>
            <ul className="list-group list-group-flush list-unstyled">
              <li><Link className="list-group-item nav-link" to={ROUTES.BLOGS}>Blogs</Link></li>
              <li><Link className="list-group-item nav-link" to={ROUTES.ABOUT}>About Us</Link></li>
              <li><Link className="list-group-item nav-link" to={ROUTES.FAQS}>FAQs</Link></li>
              <li><Link className="list-group-item nav-link" to={ROUTES.CONTACT}>Contact Us</Link></li>
            </ul>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6}>
            <h5 className="mb-4 fw-bold">Equipments to</h5>
            <ul className="list-group list-group-flush list-unstyled">
              <li><Link className="list-group-item nav-link" to="/equipments/core">Train Your Core</Link></li>
              <li><Link className="list-group-item nav-link" to="/equipments/cardio">Boost Cardio Health</Link></li>
              <li><Link className="list-group-item nav-link" to="/equipments/flexibility">Improve Flexibility</Link></li>
              <li><Link className="list-group-item nav-link" to="/equipments/strength">Build Strength</Link></li>
              <li><Link className="list-group-item nav-link" to="/equipments/recovery">Enhance Recovery</Link></li>
            </ul>
          </Col>
          <Col xl={3} lg={4} md={4} sm={12}>
            <h5 className="mb-4 fw-bold">Follow Us On</h5>
            <div className="d-flex justify-content-start">
              <Link className="nav-link me-5" target="_blank" rel="noopener noreferrer" to={ROUTES.INSTAGRAM}><FaInstagram size={20} /></Link>
              <Link className="nav-link me-5" target="_blank" rel="noopener noreferrer" to={ROUTES.FACEBOOK}><FaFacebook size={20} /></Link>
              <Link className="nav-link me-5" target="_blank" rel="noopener noreferrer" to={ROUTES.TWITTER}><FaTwitter size={20} /></Link>
              <Link className="nav-link me-5" target="_blank" rel="noopener noreferrer" to={ROUTES.YOUTUBE}><FaYoutube size={20} /></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
