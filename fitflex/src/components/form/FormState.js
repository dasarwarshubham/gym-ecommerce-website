import React from "react";
import { useFormikContext } from "formik";

const FormikState = ({ display = "block" }) => {
  const { values, errors, touched, isSubmitting } = useFormikContext();
  if (display === "none") {
    return null;
  }
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "25%",
        height: "800px",
        borderRadius: "0.25rem",
        margin: "1rem 0",
        background: "#f6f8fa",
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        padding: "1rem",
        overflowY: "scroll",
        display: display,
        zIndex: 100,
      }}
    >
      <strong>Injected Formik props (the form&apos;s state)</strong>
      <hr />
      <div className="mb-3">
        <code>touched:</code>
        <pre>{JSON.stringify(touched, null, 2)}</pre>
      </div>
      <div className="mb-3">
        <code>errors:</code>
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
      <div className="mb-3">
        <code>values:</code>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
      <div className="mb-3">
        <code>isSubmitting:</code>
        <pre>{JSON.stringify(isSubmitting, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FormikState;
