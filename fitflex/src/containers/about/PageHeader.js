import React from "react";

import styled from "styled-components";

const Container = styled.header`
  background-image: url("/images/anastase-maragos-9dzWZQWZMdE-unsplash.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  color: #ffffff;
`;

const PageHeader = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default PageHeader;
