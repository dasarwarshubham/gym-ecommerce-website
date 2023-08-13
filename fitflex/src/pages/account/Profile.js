import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Button,
  Spinner,
} from "react-bootstrap";

import { LOGIN } from "../../constants/routes";
import { logoutUser } from "../../redux/auth/authActions";
import { selectAuthLoading } from "../../redux/auth/authSelectors";

import PersonalInfoSection from "../../containers/account/AccountDetailsSection";
import OrderSection from "../../containers/account/OrderSection";
import FavoriteSection from "../../containers/account/FavouritesSection";
import AddressSection from "../../containers/account/AddressSection";
import PaymentsSection from "../../containers/account/PaymentsSection";

const ProfilePage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let loading = useSelector(selectAuthLoading);

  const handleLogout = async () => {
    dispatch(logoutUser()).then(() => {
      navigate(LOGIN);
    });
  };

  return (
    <Container className="my-5 py-5" style={{ minHeight: "70vh" }}>
      <Row className="justify-content-center mt-5">
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center">
            <h2>User Profile</h2>
            <Button variant="danger" title="logout" onClick={handleLogout}>
              {loading ? (
                <Spinner as="span" size="sm" animation="border" />
              ) : (
                <>Logout</>
              )}
            </Button>
          </div>
          <hr />
          <Tab.Container id="profile-tabs" defaultActiveKey="account">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="account">Account Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">Your Orders</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="favorites">Favorites</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="address">Manage Address</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="payments">Payment Methods</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="account">
                    <PersonalInfoSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <OrderSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey="favorites">
                    <FavoriteSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">
                    <AddressSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey="payments">
                    <PaymentsSection />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
