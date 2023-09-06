import BsCard from "react-bootstrap/Card";

import styled from "styled-components/macro";

const Card = styled(BsCard)`
  border: none;
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  border: none;
  background-color: #fafafa;
  padding: 2rem 3rem;
`;

const CardText = styled(Card.Text)`
  letter-spacing: 0.1rem;
  white-space: pre-line;

  &:before {
    content: quote;
    font-size: 2rem;
    font-weight: bold;
  }
`;

function TestimonialCard({ data }) {
  return (
    <Card>
      {/* <Card.Img variant="bottom" src={data.image} alt={data.alt} /> */}
      <Card.Body>
        <CardText>{data.testimonial}</CardText>
        <span className="fw-bold">— {data.name}</span>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;
