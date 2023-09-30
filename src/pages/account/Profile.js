import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Button,
  Spinner,
} from "react-bootstrap";

import {
  FaRegCircleUser,
  FaAddressCard,
  // FaHeart
} from 'react-icons/fa6';
import {
  MdSecurity,
  // MdPayment,
} from 'react-icons/md';
import { GoPackage } from 'react-icons/go';



import { LOGIN } from "../../constants/routes";
import { logoutUser } from "../../redux/account/accountActions";
import { selectAccountLoading } from "../../redux/account/accountSelectors";

import PersonalInfoSection from "../../containers/account/AccountDetailsSection";
import OrderSection from "../../containers/account/OrderSection";
// import FavoriteSection from "../../containers/account/FavouritesSection";
import AddressSection from "../../containers/account/AddressSection";
import SecuritySection from "../../containers/account/SecuritySection";
// import PaymentsSection from "../../containers/account/PaymentsSection";


const TabsColumn = styled(Col)`
  @media screen and (min-width: 768px) {
    border-right: 1px solid #adb5bd;
  }
  .nav{
    flex-direction: row;

    .nav-link{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .tab-text{
      display: none;
    }

    @media screen and (min-width: 768px) {
      flex-direction: column;
      .nav-link{
        justify-content: start;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .tab-text{
        margin-left: 5px;
        display: inline-flex;
        white-space: nowrap;
      }
    }
  }
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectAccountLoading);

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeProfileTab") || "account"
  );

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
    localStorage.setItem("activeProfileTab", eventKey);
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("activeProfileTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleLogout = async () => {
    dispatch(logoutUser()).then(() => {
      navigate(LOGIN);
    });
  };

  return (
    <Container className="my-5 py-4" style={{ minHeight: "70vh" }}>
      <Row className="justify-content-center mx-0 mt-5">
        <Col md={12}>
          <div className="d-flex justify-content-between align-items-center">
            <h2>User Profile</h2>
            <div>
              <Button
                variant="danger"
                title="logout"
                onClick={handleLogout}
                className="me-3"
              >
                {loading ? (
                  <Spinner as="span" size="sm" animation="border" />
                ) : (
                  <>Logout</>
                )}
              </Button>
            </div>
          </div>
          <hr />
          <Tab.Container
            id="profile-tabs"
            activeKey={activeTab}
            onSelect={handleTabChange}
          >
            <Row>
              <TabsColumn md={3}>
                <Nav fill justify variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="account"><FaRegCircleUser size={16} /><span className="tab-text">Account Details</span></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders"><GoPackage size={16} /><span className="tab-text">Your Orders</span></Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="favorites"><FaHeart size={16} /><span className="tab-text">Favorites</span></Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link eventKey="address"><FaAddressCard size={16} /><span className="tab-text">Manage Address</span></Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="payments"><MdPayment size={16} /><span className="tab-text">Payment Methods</span></Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link eventKey="security"><MdSecurity size={16} /><span className="tab-text">Security</span></Nav.Link>
                  </Nav.Item>
                </Nav>
              </TabsColumn>
              <Col md={9}>
                <Tab.Content className="pt-5 pt-md-0">
                  <Tab.Pane eventKey="account">
                    <PersonalInfoSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders" style={{ maxHeight: "75vh", overflowY: "auto" }}>
                    <OrderSection />
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="favorites">
                    <FavoriteSection />
                  </Tab.Pane> */}
                  <Tab.Pane eventKey="address">
                    <AddressSection />
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="payments">
                    <PaymentsSection />
                  </Tab.Pane> */}
                  <Tab.Pane eventKey="security">
                    <SecuritySection />
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
