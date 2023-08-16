import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useFormikContext } from "formik";

const FormButton = ({
  variant = "primary",
  type = "submit",
  children,
  ...otherProps
}) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Button
      variant={variant}
      onClick={!isSubmitting ? handleSubmit : null}
      disabled={isSubmitting}
      type={type}
      style={{ minWidth: "120px" }}
      {...otherProps}
    >
      {isSubmitting ? (
        <Spinner as="span" size="sm" animation="border" />
      ) : (
        children
      )}
    </Button>
  );
};

export default FormButton;
