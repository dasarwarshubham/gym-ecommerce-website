import React from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormCheck from "react-bootstrap/FormCheck";
import Feedback from "react-bootstrap/Feedback";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useFormikContext } from "formik";

const FormRadio = ({
  label,
  araiLabel,
  modal = false,
  type = "radio",
  name,
  fieldClass,
  children,
  options,
  ...otherProps
}) => {
  const { values, errors, touched, setFieldValue } = useFormikContext();
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
          <div key={`inline-radio`} className="h-100 d-flex align-items-center">
            {options.map((option) => (
              <FormCheck
                inline
                label={option.label}
                name={name}
                type={type}
                aria-label={option.label}
                onChange={() => setFieldValue(name, option.value)}
                id={`inline-radio-${option.value}`}
                key={`inline-radio-${option.value}`}
                isInvalid={touched[name] && !!errors[name]}
                checked={option.value === values[name]}
                {...otherProps}
              />
            ))}
          </div>
          <Feedback type="invalid">{errors[name]}</Feedback>
        </Col>
      </FormGroup>
    );
  }
  return (
    <FormGroup controlId={name} className={fieldClass ? fieldClass : "mb-5"}>
      <FormLabel>{label}</FormLabel>
      <br />
      {options.map((option) => (
        <FormCheck
          inline
          label={option.label}
          name={name}
          type={type}
          aria-label={option.label}
          onChange={() => setFieldValue(name, option.value)}
          id={`inline-radio-${option.value}`}
          key={`inline-radio-${option.value}`}
          isInvalid={touched[name] && !!errors[name]}
          checked={option.value === values[name]}
          {...otherProps}
        />
      ))}
      <Feedback type="invalid">{errors[name]}</Feedback>
    </FormGroup>
  );
};

export default FormRadio;
