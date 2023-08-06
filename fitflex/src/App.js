import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";

import FooterContainer from "./containers/footer/FooterContainer";
import Navbar from "./containers/navbar/NavbarContainer";

import * as ROUTES from "./constants/routes";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage")
);
const AboutPage = lazy(() =>
  import(/* webpackChunkName: "AboutPage" */ "./pages/AboutPage")
);
const ContactPage = lazy(() =>
  import(/* webpackChunkName: "ContactPage" */ "./pages/ContactPage")
);
const FaqsPage = lazy(() =>
  import(/* webpackChunkName: "FaqsPage" */ "./pages/FaqsPage")
);

const EquipmentsPage = lazy(() =>
  import(
    /* webpackChunkName: "EquipmentsPage" */ "./pages/equipments/EquipmentsPage"
  )
);
const HomeEquipmentsPage = lazy(() =>
  import(
    /* webpackChunkName: "HomeEquipmentsPage" */ "./pages/equipments/HomeEquipmentsPage"
  )
);
const CommercialEquipmentsPage = lazy(() =>
  import(
    /* webpackChunkName: "CommercialEquipmentsPage" */ "./pages/equipments/CommercialEquipmentsPage"
  )
);
const EquipmentDetailsPage = lazy(() =>
  import(
    /* webpackChunkName: "EquipmentDetailsPage" */ "./pages/equipments/EquipmentDetailsPage"
  )
);

const BlogListPage = lazy(() =>
  import(/* webpackChunkName: "BlogListPage" */ "./pages/blogs/BlogListPage")
);
const BlogDetailsPage = lazy(() =>
  import(
    /* webpackChunkName: "BlogDetailsPage" */ "./pages/blogs/BlogDetailsPage"
  )
);
const PageNotFound = lazy(() =>
  import(/* webpackChunkName: "PageNotFound" */ "./pages/PageNotFound")
);

const renderLoader = () => {
  const loaderStyles = {
    width: "100%",
    minHeight: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={loaderStyles}>
        <Spinner animation="border" variant="dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path={ROUTES.HOME} Component={HomePage} />
          <Route path={ROUTES.HOME_ALT} Component={HomePage} />
          <Route path={ROUTES.ABOUT} Component={AboutPage} />
          <Route path={ROUTES.CONTACT} Component={ContactPage} />
          <Route path={ROUTES.FAQS} Component={FaqsPage} />

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
