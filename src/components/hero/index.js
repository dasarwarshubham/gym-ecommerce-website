import { Container, Overlay, Text, CtaButton } from "./styles/heroStyles";

const Hero = ({ to, children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Hero.Overlay = ({ to, children, ...restProps }) => {
  return (
    <Overlay to={to} {...restProps}>
      {children}
    </Overlay>
  );
};

Hero.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Hero.Button = ({ to, children, ...restProps }) => {
  return (
    <CtaButton to={to} {...restProps}>
      {children}
    </CtaButton>
  );
};

export default Hero;
