import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/loader/Loader";

import FooterContainer from "./containers/footer/FooterContainer";
import Navbar from "./containers/navbar/NavbarContainer";

import * as ROUTES from "./constants/routes";

const HomePage                 = lazy(() => import(/* webpackChunkName: "homePage" */ "./pages/HomePage"));
const AboutPage                = lazy(() => import(/* webpackChunkName: "aboutPage" */ "./pages/AboutPage"));
const ContactPage              = lazy(() => import(/* webpackChunkName: "contactPage" */ "./pages/ContactPage"));
const FaqsPage                 = lazy(() => import(/* webpackChunkName: "faqsPage" */ "./pages/FaqsPage"));


const LoginPage                = lazy(()=> import( /*webpackChunkName: "loginPage" */ "./pages/account/LoginPage"));
const SignupPage               = lazy(()=> import( /*webpackChunkName: "signupPage" */ "./pages/account/SignupPage"))
const ProfilePage              = lazy(()=> import( /*webpackChunkName: "profilePage" */ "./pages/account/ProfilePage"))

const EquipmentsPage           = lazy(() => import(/* webpackChunkName: "equipmentsPage" */ "./pages/equipments/EquipmentsPage"));
const HomeEquipmentsPage       = lazy(() => import(/* webpackChunkName: "homeEquipmentsPage" */ "./pages/equipments/HomeEquipmentsPage"));
const CommercialEquipmentsPage = lazy(() => import(/* webpackChunkName: "commercialEquipmentsPage" */ "./pages/equipments/CommercialEquipmentsPage"));
const EquipmentDetailsPage     = lazy(() => import(/* webpackChunkName: "equipmentDetailsPage" */ "./pages/equipments/EquipmentDetailsPage"));

const BlogListPage             = lazy(() => import(/* webpackChunkName: "blogListPage" */ "./pages/blogs/BlogListPage"));
const BlogDetailsPage          = lazy(() => import(/* webpackChunkName: "blogDetailsPage" */ "./pages/blogs/BlogDetailsPage"));
const PageNotFound             = lazy(() => import(/* webpackChunkName: "pageNotFound" */ "./pages/PageNotFound"));


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={Loader()}>
        <Routes>
          <Route path={ROUTES.HOME} Component={HomePage} />
          <Route path={ROUTES.HOME_ALT} Component={HomePage} />
          <Route path={ROUTES.ABOUT} Component={AboutPage} />
          <Route path={ROUTES.CONTACT} Component={ContactPage} />
          <Route path={ROUTES.FAQS} Component={FaqsPage} />

          <Route path={ROUTES.LOGIN} Component={LoginPage} />
          <Route path={ROUTES.SIGNUP} Component={SignupPage} />
          <Route path={ROUTES.PROFILE} Component={ProfilePage} />

          <Route path={ROUTES.EQUIPMENTS}>
            <Route index Component={EquipmentsPage} />
            <Route path="home" Component={HomeEquipmentsPage} />
            <Route path="commercial" Component={CommercialEquipmentsPage} />
            <Route path=":productId" Component={EquipmentDetailsPage} />
          </Route>

          <Route path={ROUTES.BLOGS}>
            <Route index Component={BlogListPage} />
            <Route path=":blogId" Component={BlogDetailsPage} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <FooterContainer />
    </Router>
  );
}

export default App;
