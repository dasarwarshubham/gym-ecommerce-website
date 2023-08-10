import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

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

import PersonalInfoSection from "../../containers/account/AccountDetailsSection";
import OrderSection from "../../containers/account/OrderSection";
import FavoriteSection from "../../containers/account/FavouritesSection";
import AddressSection from "../../containers/account/AddressSection";
import PaymentsSection from "../../containers/account/PaymentsSection";

const ProfilePage = ({ loading, isAuthenticated, logout }) => {
  let navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <Container className="my-5 py-5" style={{ minHeight: "70vh" }}>
      <Row className="justify-content-center mt-5">
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center">
            <h2>User Profile</h2>
            <Button
              variant="danger"
              title="logout"
              onClick={() => {
                logout();
                navigate(LOGIN);
              }}
            >
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

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
