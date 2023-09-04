import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "./components/loader/Loader";

import FooterContainer from "./containers/footer/FooterContainer";
import Navbar from "./containers/navbar/NavbarContainer";

import * as ROUTES from "./constants/routes";
import { PrivateRoute, PublicRoute } from "./helpers/RouteComponent";
import {
  autoLogin,
  logoutUser,
  fetchAccountAddress,
  fetchAccountOrder,
} from "./redux/account/accountActions";
import { createNewCart, fetchCart } from "./redux/checkout/cartActions";

const Home                  = lazy(() => import(/* webpackChunkName: "homePage" */ "./pages/Home"));
const About                 = lazy(() => import(/* webpackChunkName: "aboutPage" */ "./pages/About"));
const Contact               = lazy(() => import(/* webpackChunkName: "contactPage" */ "./pages/Contact"));
const Faqs                  = lazy(() => import(/* webpackChunkName: "faqsPage" */ "./pages/Faqs"));

const Login                 = lazy(() => import(/* webpackChunkName: "loginPage" */ "./pages/account/Login"));
const Signup                = lazy(() => import(/* webpackChunkName: "signupPage" */ "./pages/account/Signup"));
const Profile               = lazy(() => import(/* webpackChunkName: "profilePage" */ "./pages/account/Profile"));

const Equipments            = lazy(() => import(/* webpackChunkName: "equipmentsPage" */ "./pages/equipments/Equipments"));
const HomeEquipments        = lazy(() => import(/* webpackChunkName: "homeEquipmentsPage" */ "./pages/equipments/HomeEquipments"));
const CommercialEquipments  = lazy(() => import(/* webpackChunkName: "commercialEquipmentsPage" */ "./pages/equipments/CommercialEquipments"));
const EquipmentDetails      = lazy(() => import(/* webpackChunkName: "equipmentDetailsPage" */ "./pages/equipments/EquipmentDetails"));

const BlogList              = lazy(() => import(/* webpackChunkName: "blogListPage" */ "./pages/blogs/BlogList"));
const BlogDetails           = lazy(() => import(/* webpackChunkName: "blogDetailsPage" */ "./pages/blogs/BlogDetails"));
const PageNotFound          = lazy(() => import(/* webpackChunkName: "pageNotFound" */ "./pages/PageNotFound"));

const Cart                  = lazy(() => import(/* webpackChunkName: "cartPage" */ "./pages/checkout/Cart"));
const Shipping              = lazy(() => import(/* webpackChunkName: "shippingPage" */ "./pages/checkout/Shipping"));
const Review                = lazy(() => import(/* webpackChunkName: "reviewPage" */ "./pages/checkout/Review"));
const Payment               = lazy(() => import(/* webpackChunkName: "paymentPage" */ "./pages/checkout/Payment"));
const Confirmation          = lazy(() => import(/* webpackChunkName: "confirmationPage" */ "./pages/checkout/Confirmation"));

const LinksPage             = lazy(() => import(/* webpackChunkName: "linksPage" */ "./pages/LinksPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const cartId = localStorage.getItem("cartId");

    if (token) {
      dispatch(autoLogin(token))
        .then(() => {
          dispatch(fetchAccountAddress());
          dispatch(fetchAccountOrder());
        })
        .catch((error) => {
          console.log(error);
          dispatch(logoutUser());
        });
      // Dispatch autoSignIn action with the token
    }

    if (cartId) {
      dispatch(fetchCart())
        .unwrap()
        .catch((error) => {
          dispatch(createNewCart());
        });
    } else {
      dispatch(createNewCart());
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Suspense fallback={Loader()}>
        <Routes>
          <Route path={ROUTES.HOME}           Component={Home} />
          <Route path={ROUTES.HOME_ALT}       Component={Home} />
          <Route path={ROUTES.ABOUT}          Component={About} />
          <Route path={ROUTES.CONTACT}        Component={Contact} />
          <Route path={ROUTES.FAQS}           Component={Faqs} />


          {/* Public Routes */}
          <Route path={ROUTES.HOME} Component={PublicRoute}>
            <Route path={ROUTES.LOGIN}          Component={Login} />
            <Route path={ROUTES.SIGNUP}         Component={Signup} />
          </Route>

          <Route path={ROUTES.CART}         Component={Cart} />
          {/* Private Routes */}
          <Route path={ROUTES.HOME} Component={PrivateRoute}>
            <Route path={ROUTES.PROFILE}      Component={Profile} />
            <Route path={ROUTES.SHIPPING}     Component={Shipping} />
            <Route path={ROUTES.REVIEW}       Component={Review} />
            <Route path={ROUTES.PAYMENT}      Component={Payment} />
            <Route path={ROUTES.CONFIRMATION} Component={Confirmation} />
          </Route>

          <Route path={ROUTES.EQUIPMENTS}>
          <Route index                        Component={Equipments} />
            <Route path="home"                Component={HomeEquipments} />
            <Route path="commercial"          Component={CommercialEquipments} />
            <Route path=":productId"          Component={EquipmentDetails} />
          </Route>

          <Route path={ROUTES.BLOGS}>
            <Route index          Component={BlogList} />
            <Route path=":blogId" Component={BlogDetails} />
          </Route>

          <Route path="*" Component={PageNotFound} />

          <Route path="/links" Component={LinksPage} />
        </Routes>
      </Suspense>
      <FooterContainer />
    </Router>
  );
}

export default App;