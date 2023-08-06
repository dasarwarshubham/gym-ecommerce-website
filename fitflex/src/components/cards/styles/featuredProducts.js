import styled from "styled-components/macro";
import Card from "react-bootstrap/Card";

export const ProductCard = styled(Card)`
  border: none;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .card-img {
    height: 40rem;
    object-fit: cover;
  }
`;

ProductCard.ImgOverlay = styled(Card.ImgOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in;

  .card-title {
    opacity: 0;
    color: #ffffff;
    font-size: 3rem;
    text-transform: uppercase;
  }
  &:hover {
    background-color: #00000050;
  }
  &:hover .card-title {
    opacity: 1;
  }
`;
