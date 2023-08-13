import React, { useState } from "react";
import { useFormikContext } from "formik";
import { Button } from "react-bootstrap";

const FormikState = ({ display = "block" }) => {
  const { values, errors, touched, isSubmitting } = useFormikContext();

  const [show, setShow] = useState(true);

  const toggle = () => setShow(!show);

  if (display === "none") {
    return null;
  }
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: show ? "25%" : "180px",
        height: show ? "400px" : "50px",
        borderRadius: "0.25rem",
        background: "#f6f8fa",
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        padding: "1rem",
        overflowY: "auto",
        display: display,
        zIndex: 100,
      }}
    >
      <strong className="d-inline-flex gap-1 justify-content-between w-100">
        {/* Injected Formik props (the form&apos;s state)*/}
        Form&apos;s state
        <Button onClick={toggle} size="sm">
          {show ? "hide" : "show"}
        </Button>
      </strong>

      {show && (
        <>
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
        </>
      )}
    </div>
  );
};

export default FormikState;
