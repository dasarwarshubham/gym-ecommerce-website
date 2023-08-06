import React from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";

function FormikForm({
  initialValues,
  onSubmit,
  validationSchema,
  enableReinitialize,
  children,
  ...otherProps
}) {
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Form {...otherProps}>{children}</Form>}
    </Formik>
  );
}

export default FormikForm;
