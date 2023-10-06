/* eslint-disable no-lone-blocks */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormSelect from "react-bootstrap/FormSelect";
import Feedback from "react-bootstrap/Feedback";

import { useFormikContext } from "formik";

const FormikSelect = ({
  label,
  araiLabel,
  modal = false,
  name,
  fieldClass,
  children,
  radioValues,
  placeholder = "Type Here",
  ...otherProps
}) => {
  const { handleChange, errors, touched } = useFormikContext();
  if (modal) {
    return (
      <FormGroup
        as={Row}
        controlId={name}
        className={fieldClass ? fieldClass : "mb-3"}
      >
        <FormLabel column xs={12} md={4}>
          {label}
        </FormLabel>
        <Col xs={12} md={8}>
          <FormSelect
            aria-label={label}
            name={name}
            onChange={handleChange}
            isInvalid={touched[name] && !!errors[name]}
            placeholder={placeholder}
            {...otherProps}
          >
            {children}
          </FormSelect>
          <Feedback type="invalid">{errors[name]}</Feedback>
        </Col>
      </FormGroup>
    );
  }
  return (
    <FormGroup controlId={name} className={fieldClass ? fieldClass : "mb-5"}>
      <FormLabel>{label}</FormLabel>
      <FormSelect
        aria-label={label}
        name={name}
        onChange={handleChange}
        isInvalid={touched[name] && !!errors[name]}
        placeholder={placeholder}
        {...otherProps}
      >
        {children}
      </FormSelect>
      <Feedback type="invalid">{errors[name]}</Feedback>
    </FormGroup>
  );
};

export default FormikSelect;

// usage example
{
  /* <FormSelect
  label="Label"
  name="name"
  disabled={loading} {optional}
>
  <option value="" label="Select an value">
    Select a value
  </option>
  <option key={`value-1`} value={1} label={1} selected={false}>
    1
  </option>
  <option key={`value-2`} value={2} label={2} selected={true}>
    2
  </option>
  <option key={`value-3`} value={3} label={3} selected={false}>
    3
  </option>
  <option key={`value-4`} value={4} label={4} selected={false}>
    4
  </option>
</FormSelect>; */
}
