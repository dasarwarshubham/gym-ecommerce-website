import React from "react";
import { CtaButton, HeroBg, HeroOverlay, HeroText } from "./styles/banner";

const Banner = (props) => {
  return (
    <HeroBg>
      <HeroOverlay>
        <HeroText className="hero-text">
          Get <span>Fit</span>
          <br />
          with <span>FitFlex!</span>
        </HeroText>
        <CtaButton className="btn btn-lg btn-warning">
          Learn More
        </CtaButton>
      </HeroOverlay>
    </HeroBg>
  );
};

export default Banner;
