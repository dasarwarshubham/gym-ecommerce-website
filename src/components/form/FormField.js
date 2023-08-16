import React from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Feedback from "react-bootstrap/Feedback";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useFormikContext } from "formik";
import { FormSelect } from "react-bootstrap";

const FormField = ({
  label,
  araiLabel,
  type = "text",
  modal = false,
  name,
  fieldClass,
  children,
  ...otherProps
}) => {
  const { handleChange, values, errors, touched, setFieldValue } =
    useFormikContext();
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
          {type === "select" ? (
            <FormSelect
              aria-label={label}
              name={name}
              onChange={handleChange}
              isInvalid={touched[name] && !!errors[name]}
              placeholder="Type here"
              {...otherProps}
            >
              {children}
            </FormSelect>
          ) : (
            <FormControl
              aria-label={label}
              type={type}
              name={name}
              value={values[name]}
              onChange={handleChange}
              isInvalid={touched[name] && !!errors[name]}
              placeholder="Type here"
              {...otherProps}
            >
              {children}
            </FormControl>
          )}
          <Feedback type="invalid">{errors[name]}</Feedback>
        </Col>
      </FormGroup>
    );
  }
  if (type === "select") {
    return (
      <FormGroup controlId={name} className={fieldClass ? fieldClass : "mb-5"}>
        <FormLabel>{label}</FormLabel>
        <FormSelect
          aria-label={label}
          name={name}
          onChange={handleChange}
          isInvalid={touched[name] && !!errors[name]}
          placeholder="Type here"
          {...otherProps}
        >
          {children}
        </FormSelect>
        <Feedback type="invalid">{errors[name]}</Feedback>
      </FormGroup>
    );
  }
  return (
    <FormGroup controlId={name} className={fieldClass ? fieldClass : "mb-5"}>
      <FormLabel>{label}</FormLabel>
      <FormControl
        aria-label={label}
        type={type}
        name={name}
        value={type === "file" ? null : values[name]}
        onChange={
          type !== "file"
            ? handleChange
            : (event) => setFieldValue(name, event.target.files[0])
        }
        isInvalid={touched[name] && !!errors[name]}
        placeholder="Type here"
        {...otherProps}
      >
        {children}
      </FormControl>
      <Feedback type="invalid">{errors[name]}</Feedback>
    </FormGroup>
  );
};

export default FormField;
