import React from "react";
import PageHeader from "../containers/about/PageHeader";
import AboutSection from "../containers/about/AboutSection";
import TeamSection from "../containers/about/TeamSection";
import ValuesSection from "../containers/about/ValuesSection";
import ContactSection from "../containers/about/ContactSection";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us" />

      <div className="container">
        <AboutSection />
        <TeamSection />
        <ValuesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default AboutPage;
