import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div`
  background: url("/images/banner.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  top: 0;
  height: calc(100vh - 6.5rem);
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid hotpink; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Text = styled.h1`
  font-size: 8rem;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  /* color: rgba(240, 240, 240, 1); */

  span:last-child {
    /* text-decoration: underline; */
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
`;
