import Hero from "../../components/hero";
import { EQUIPMENTS } from "../../constants/routes";

const Banner = () => {
  return (
    <Hero>
      <Hero.Overlay>
        <Hero.Text className="hero-text">
          Get <span>Fit</span>
          <br />
          with <span>FitFlex!</span>
        </Hero.Text>
        <Hero.Button to={EQUIPMENTS} className="btn btn-lg btn-warning">
          Explore Our Products
        </Hero.Button>
      </Hero.Overlay>
    </Hero>
  );
};

export default Banner;
