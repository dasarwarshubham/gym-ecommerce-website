import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div`
  background-image: url('/images/banner.webp');
  background-position: center;
  background-size: cover;
  background-color: #212529;
  height: calc(100vh - 6.5rem);
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Text = styled.h1`
  font-size: 8rem;
  color: #ffffff;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 7rem;
  }

  span:last-child {
    font-style: italic;
    text-transform: uppercase;
  }
`;

export const CtaButton = styled(Link)`
  border-radius: 3rem;
  border-width: 0.3rem;
  font-size: 3rem;
  margin-top: 3rem;
  padding: 1rem 3rem;
  background-color: #00000050;
  color: #ffffff;
  @media (max-width: 640px) {
    font-size: 2rem;
    padding: 0.8rem 2rem;
  }
  &:hover {
    background-color: #00000080;
    color: #ffffff;
  }
`;
