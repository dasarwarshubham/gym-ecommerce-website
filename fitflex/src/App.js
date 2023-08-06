import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import FooterContainer from './containers/footer/FooterContainer';
import Navbar from './containers/navbar/NavbarContainer';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FaqsPage from "./pages/FaqsPage";
import HomeEquipmentsPage from './pages/equipments/HomeEquipmentsPage';
import CommercialEquipmentsPage from './pages/equipments/CommercialEquipmentsPage';
import BlogListPage from './pages/blogs/BlogListPage';
import BlogDetailsPage from './pages/blogs/BlogDetailsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/faqs" Component={FaqsPage} />
        <Route path="/home-equipments" Component={HomeEquipmentsPage} />
        <Route path="/commercial-equipments" Component={CommercialEquipmentsPage} />
        <Route path="/blogs" Component={BlogListPage} />
        <Route path="/blogDetails" Component={BlogDetailsPage} />
      </Routes>
      <FooterContainer />
    </Router>
  );
}

export default App;
