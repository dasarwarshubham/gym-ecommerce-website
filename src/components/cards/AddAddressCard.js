import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { MdOutlineAddCircle } from "react-icons/md";

import {
  FormikForm,
  FormField,
  FormButton,
  FormState,
} from "../../components/form";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addAccountAddress } from "../../redux/account/accountActions";
import {
  selectAccountError,
  selectAccountLoading,
} from "../../redux/account/accountSelectors";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Full Name"),
  addressLine1: Yup.string().required().label("Address Line 1"),
  addressLine2: Yup.string().required().label("Address Line 2"),
  city: Yup.string().required().label("City"),
  state: Yup.string().required().label("State"),
  zipCode: Yup.string().required().label("Zip Code"),
  phone: Yup.string()
    .required()
    .label("Phone Number")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const initialValues = {
  fullName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  phone: "",
};

const AddAddressCard = ({ isButton }) => {
  const [isEditing, setIsEditing] = useState(false);

  const loading = useSelector(selectAccountLoading);
  const error = useSelector(selectAccountError);
  const dispatch = useDispatch();

  if (isButton && !isEditing) {
    return (
      <Button variant="primary" onClick={() => setIsEditing(true)}>
        Add New Address
      </Button>
    );
  }
  if (!isEditing) {
    return (
      <Card
        onClick={() => setIsEditing(true)}
        className="d-flex justify-content-center align-items-center"
        style={{ height: "218px" }}
      >
        <Card.Body className="d-flex justify-content-center align-items-center">
          <MdOutlineAddCircle size={28} />
        </Card.Body>
      </Card>
    );
  }

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(addAccountAddress(values))
      .unwrap()
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        resetForm();
        setSubmitting(false);
        setIsEditing(!isEditing);
        // navigate(PROFILE, { state: { prevPage: PROFILE_EDIT } });
      });
  };
  return (
    <Card>
      <Card.Body>
        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) =>
            handleClick(values, setSubmitting, resetForm)
          }
        >
          {error && <p className="text-danger">{error}</p>}

          <FormField
            label="Full Name"
            name="fullName"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Address Line 1"
            name="addressLine1"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Address Line 2"
            name="addressLine2"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="City"
            name="city"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="State"
            name="state"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Zip Code"
            name="zipCode"
            inputMode="numeric"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Phone Number"
            name="phone"
            inputMode="numeric"
            disabled={!isEditing || loading}
            modal
          />

          <div className="mb-4">
            <Button
              className="me-3"
              variant="danger"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <FormButton>Submit</FormButton>
          </div>

          <FormState />
        </FormikForm>
      </Card.Body>
    </Card>
  );
};

export default AddAddressCard;
