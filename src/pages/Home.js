import React from "react";

import Banner from "../containers/home/Banner";
import Featured from "../containers/home/Featured";
import AboutContainer from "../containers/home/About";
import Testimonials from "../containers/home/Testimonials";
import Services from "../containers/home/Services";
import CtaContainer from "../containers/home/CtaContainer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Featured />
      <AboutContainer />
      <Testimonials />
      <Services />
      <CtaContainer />
    </>
  );
};

export default HomePage;
