import React, { useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import {
  FormikForm,
  FormField,
  FormButton,
  FormState,
} from "../../components/form";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAccountAddress,
  updateAccountAddress,
} from "../../redux/account/accountActions";
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

const AddressCard = ({ address }) => {
  const [isEditing, setIsEditing] = useState(false);

  const loading = useSelector(selectAccountLoading);
  const error = useSelector(selectAccountError);
  const dispatch = useDispatch();

  if (!isEditing) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{address.fullName}</Card.Title>
          <Card.Text>{address.addressLine1}</Card.Text>
          <Card.Text>{address.addressLine2}</Card.Text>
          <Card.Text>
            {address.city}, {address.state} {address.zipCode}
          </Card.Text>
          <Card.Text>Phone: {address.phone}</Card.Text>
          <Button
            variant="primary"
            onClick={() => setIsEditing(true)}
            className="me-3"
          >
            {loading ? (
              <Spinner as="span" size="sm" animation="border" />
            ) : (
              <MdEdit />
            )}
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteAccountAddress(address.id))}
          >
            <FaTrash size={14} />
          </Button>
        </Card.Body>
      </Card>
    );
  }

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(
      updateAccountAddress({ addressId: address.id, updatedAddress: values })
    )
      .unwrap()
      .then((response) => {
        //update initialvalues with updated values from response after successful form submission
        resetForm({ values: response.accountDetails });
      })
      .catch((error) => {
        console.log(error);
        resetForm();
      })
      .finally(() => {
        setSubmitting(false);
        setIsEditing(!isEditing);
        // navigate(PROFILE, { state: { prevPage: PROFILE_EDIT } });
      });
  };

  return (
    <Card>
      <Card.Body>
        <FormikForm
          initialValues={{
            id: address?.id,
            fullName: address?.fullName,
            addressLine1: address?.addressLine1,
            addressLine2: address?.addressLine2,
            city: address?.city,
            state: address?.state,
            zipCode: address?.zipCode,
            phone: address?.phone,
          }}
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

export default AddressCard;
