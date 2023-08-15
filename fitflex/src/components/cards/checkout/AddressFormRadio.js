import React from "react";
import FormCheck from "react-bootstrap/FormCheck";
import Feedback from "react-bootstrap/Feedback";

import { useFormikContext } from "formik";
import { Card } from "react-bootstrap";

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
  return (
    <FormCheck type={type} id={`check-api-${type}`} className="p-0">
      <FormCheck.Input
        style={{ display: "none" }}
        type={type}
        name={name}
        onChange={() => setFieldValue(name, value)}
        isInvalid={touched[name] && !!errors[name]}
        checked={value.id === values[name].id}
        id={`shipping-address-${value.id}`}
        key={`shipping-address-${value.id}`}
        aria-label={`address-${value.id}`}
        {...otherProps}
      />
      <FormCheck.Label
        htmlFor={`shipping-address-${value.id}`}
        className="w-100"
      >
        <Card
          className={`w-100 border-3 ${
            value.id === values[name].id && "border border-primary bg-light"
          }`}
        >
          <Card.Body>
            <Card.Title>{value.fullName}</Card.Title>
            <Card.Text>{value.addressLine1}</Card.Text>
            <Card.Text>{value.addressLine2}</Card.Text>
            <Card.Text>
              {value.city}, {value.state} {value.zipCode}
            </Card.Text>
            <Card.Text>Phone: {value.phone}</Card.Text>
          </Card.Body>
        </Card>
      </FormCheck.Label>
      <Feedback type="invalid">{errors[name]}</Feedback>
    </FormCheck>
  );
};

export default AddressFormRadio;
