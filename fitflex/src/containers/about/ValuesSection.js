import React from "react";

import styled from "styled-components/macro";

const Container = styled.section`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  border-radius: 1rem;

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    margin-left: 3rem;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  li {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const ValuesSection = () => {
  return (
    <Container>
      <div className="container">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            We believe in providing high-quality gym equipment to help people
            achieve their fitness goals.
          </li>
          <li>We prioritize customer satisfaction and excellent service.</li>
          <li>
            We promote a healthy and active lifestyle among our team members and
            customers.
          </li>
          {/* Add more core values as needed */}
        </ul>
      </div>
    </Container>
  );
};

export default ValuesSection;
