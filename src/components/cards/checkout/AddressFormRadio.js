import React from "react";
import FormCheck from "react-bootstrap/FormCheck";
import Feedback from "react-bootstrap/Feedback";
import { MdCheckCircle } from "react-icons/md";

import { useFormikContext } from "formik";
import { Card as BsCard } from "react-bootstrap";

import styled from "styled-components/macro";

const Card = styled(BsCard)`
  width: 100%;
  /* background-color: ${(props) =>
    props.checked ? "#f8f9fa" : "transparent"}; */
  border: 3px solid
    ${(props) => (props.checked ? "#111111" : "rgba(0, 0, 0, 0.175)")};
  position: relative;
  .mdCheck {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;

const AddressFormRadio = ({
  label,
  araiLabel,
  modal = false,
  type = "radio",
  name,
  fieldClass,
  children,
  options,
  value,
  key,
  ...otherProps
}) => {
  const { values, errors, touched, setFieldValue } = useFormikContext();
  const isChecked = value.id === values[name];
  return (
    <FormCheck type={type} id={`check-api-${type}`} className="p-0">
      <FormCheck.Input
        style={{ display: "none" }}
        type={type}
        name={name}
        onChange={() => setFieldValue(name, value.id)}
        isInvalid={touched[name] && !!errors[name]}
        checked={isChecked}
        id={`shipping-address-${value.id}`}
        key={`shipping-address-${value.id}`}
        aria-label={`address-${value.id}`}
        {...otherProps}
      />
      <FormCheck.Label
        htmlFor={`shipping-address-${value.id}`}
        className="w-100"
      >
        <Card checked={isChecked}>
          <Card.Body>
            <Card.Title>{value.full_name}</Card.Title>
            <Card.Text>{value.address_line_1}</Card.Text>
            <Card.Text>{value.address_line_2}</Card.Text>
            <Card.Text>
              {value.city}, {value.state} {value.zip}
            </Card.Text>
            <Card.Text>Phone: {value.phone}</Card.Text>
          </Card.Body>
          {isChecked && <MdCheckCircle className="mdCheck" size={20} />}
        </Card>
      </FormCheck.Label>
      <Feedback type="invalid">{errors[name]}</Feedback>
    </FormCheck>
  );
};

export default AddressFormRadio;
