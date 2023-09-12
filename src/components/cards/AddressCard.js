import React, { useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import {
  FormikForm,
  FormField,
  FormButton
} from "../../components/form";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  // defaultAccountAddress,
  deleteAccountAddress,
  fetchAccountAddress,
  updateAccountAddress,
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

const AddressCard = ({ address }) => {
  const [isEditing, setIsEditing] = useState(false);

  const loading = useSelector(selectAccountLoading);
  const error = useSelector(selectAccountError);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAccountAddress(address.id))
      .unwrap()
      .then(() => {
        dispatch(fetchAccountAddress());
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsEditing(!isEditing);
      });
  };

  if (!isEditing) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{address.full_name}</Card.Title>
          <Card.Text>{address.address_line_1}</Card.Text>
          <Card.Text>{address.address_line_2}</Card.Text>
          <Card.Text>
            {address.city}, {address.zip}
          </Card.Text>
          <Card.Text>
            {address.state}, {address.country}
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
          <Button variant="danger" onClick={handleDelete}>
            <FaTrash size={14} />
          </Button>
          {/* {!address.default && (
            <Button
              variant="primary"
              onClick={() => dispatch(defaultAccountAddress(address.id))}
              className="ms-3"
            >
              Make Default
            </Button>
          )} */}
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
        resetForm({ values: response });
        dispatch(fetchAccountAddress());
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
            full_name: address?.full_name,
            address_line_1: address?.address_line_1,
            address_line_2: address?.address_line_2,
            city: address?.city,
            state: address?.state,
            country: address?.country,
            zip: address?.zip,
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

export default AddressCard;
