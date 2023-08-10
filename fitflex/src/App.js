import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/loader/Loader";

import FooterContainer from "./containers/footer/FooterContainer";
import Navbar from "./containers/navbar/NavbarContainer";

import * as ROUTES from "./constants/routes";

const Home                  = lazy(() => import(/* webpackChunkName: "homePage" */ "./pages/Home"));
const About                 = lazy(() => import(/* webpackChunkName: "aboutPage" */ "./pages/About"));
const Contact               = lazy(() => import(/* webpackChunkName: "contactPage" */ "./pages/Contact"));
const Faqs                  = lazy(() => import(/* webpackChunkName: "faqsPage" */ "./pages/Faqs"));

const Login                 = lazy(() => import( /* webpackChunkName: "loginPage" */ "./pages/account/Login"));
const Signup                = lazy(() => import( /* webpackChunkName: "signupPage" */ "./pages/account/Signup"));
const Profile               = lazy(() => import( /* webpackChunkName: "profilePage" */ "./pages/account/Profile"));

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


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={Loader()}>
        <Routes>
          <Route path={ROUTES.HOME}         Component={Home} />
          <Route path={ROUTES.HOME_ALT}     Component={Home} />
          <Route path={ROUTES.ABOUT}        Component={About} />
          <Route path={ROUTES.CONTACT}      Component={Contact} />
          <Route path={ROUTES.FAQS}         Component={Faqs} />

          <Route path={ROUTES.LOGIN}        Component={Login} />
          <Route path={ROUTES.SIGNUP}       Component={Signup} />
          <Route path={ROUTES.PROFILE}      Component={Profile} />

          <Route path={ROUTES.CART}         Component={Cart} />
          <Route path={ROUTES.SHIPPING}     Component={Shipping} />
          <Route path={ROUTES.REVIEW}       Component={Review} />
          <Route path={ROUTES.PAYMENT}      Component={Payment} />
          <Route path={ROUTES.CONFIRMATION} Component={Confirmation} />

          <Route path={ROUTES.EQUIPMENTS}>
          <Route index                Component={Equipments} />
            <Route path="home"        Component={HomeEquipments} />
            <Route path="commercial"  Component={CommercialEquipments} />
            <Route path=":productId"  Component={EquipmentDetails} />
          </Route>

          <Route path={ROUTES.BLOGS}>
            <Route index          Component={BlogList} />
            <Route path=":blogId" Component={BlogDetails} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <FooterContainer />
    </Router>
  );
}

export default App;
  