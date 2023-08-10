import { Button, FormControl } from "react-bootstrap";
import styled from "styled-components/macro";

export const QuantityBtn = styled(Button).attrs((props) => ({
  variant: props.trash ? "outline-danger" : "outline-primary",
}))`
  border-radius: 0;
  text-align: center;
  border-color: ${(props) => (props.trash ? "none" : "#111111")};
  width: 40px;
`;

export const QuantityCount = styled(FormControl)`
  border-radius: 0;
  text-align: center;
  border-color: #111111;
  width: 40px;
  border-right: 0;
  border-left: 0;
`;
