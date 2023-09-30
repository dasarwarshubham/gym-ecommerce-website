import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { MdOutlineAddCircle } from "react-icons/md";

import {
  FormikForm,
  FormField,
  FormButton
} from "../../components/form";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAccountAddress,
  addAccountAddress,
} from "../../redux/account/accountActions";
import {
  selectAccountError,
  selectAccountLoading,
} from "../../redux/account/accountSelectors";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required().label("Full Name"),
  address_line_1: Yup.string().required().label("Address Line 1"),
  address_line_2: Yup.string().required().label("Address Line 2"),
  city: Yup.string().required().label("City"),
  state: Yup.string().required().label("State"),
  country: Yup.string().required().label("Country"),
  zip: Yup.string().required().label("Zip Code"),
  phone: Yup.string()
    .required()
    .label("Phone Number")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const initialValues = {
  full_name: "",
  address_line_1: "",
  address_line_2: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  phone: "",
};

const AddAddressCard = ({ isButton }) => {
  const [isEditing, setIsEditing] = useState(false);

  const loading = useSelector(selectAccountLoading);
  const error = useSelector(selectAccountError);
  const dispatch = useDispatch();

  if (isButton && !isEditing) {
    return (
      <Button variant="primary mx-auto" onClick={() => setIsEditing(true)}>
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
      .then(() => {
        dispatch(fetchAccountAddress());
      })
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
    <Card className="w-100">
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
            name="full_name"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Address Line 1"
            name="address_line_1"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Address Line 2"
            name="address_line_2"
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
            label="Country"
            name="country"
            disabled={!isEditing || loading}
            modal
          />
          <FormField
            label="Zip Code"
            name="zip"
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

        </FormikForm>
      </Card.Body>
    </Card>
  );
};

export default AddAddressCard;
