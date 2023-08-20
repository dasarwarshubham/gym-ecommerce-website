import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInitialLoad from "../../hooks/useInitialLoad";
import { Button, Spinner } from "react-bootstrap";
import {
  FormikForm,
  FormField,
  FormButton,
  FormRadio,
  FormState,
} from "../../components/form";

import * as Yup from "yup";

import {
  selectAccountData,
  selectAccountError,
  selectAccountLoading,
} from "../../redux/account/accountSelectors";
import { updateAccountDetails } from "../../redux/account/accountActions";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string()
    .required()
    .label("Phone Number")
    .matches(phoneRegExp, "Phone number is not valid"),
  alternatePhone: Yup.string()
    .required()
    .label("Alternate Phone Number")
    .matches(phoneRegExp, "Alternate Phone number is not valid"),
  gender: Yup.string()
    .required()
    .label("Gender")
    .oneOf(["male", "female", "prefer_not_to_say"]),
});

const AccountDetailsSection = () => {
  const loading = useSelector(selectAccountLoading);
  const profile = useSelector(selectAccountData)?.accountDetails;
  const error = useSelector(selectAccountError);
  const dispatch = useDispatch();

  const { initialLoad } = useInitialLoad(profile);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(updateAccountDetails(values))
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

  if (initialLoad) {
    return (
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ minHeight: "25vh" }}
      >
        <Spinner as="span" animation="border" />
      </div>
    );
  }

  return (
    <>
      <FormikForm
        initialValues={{
          firstName: profile?.firstName,
          lastName: profile?.lastName,
          email: profile?.email,
          phone: profile?.phone,
          alternatePhone: profile?.alternatePhone,
          gender: profile?.gender,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleClick(values, setSubmitting, resetForm)
        }
      >
        {error && <p className="text-danger">{error}</p>}

        <FormField
          label="First Name"
          name="firstName"
          disabled={!isEditing || loading}
          modal
        />
        <FormField
          label="Last Name"
          name="lastName"
          disabled={!isEditing || loading}
          modal
        />
        <FormField
          label="Email"
          type="email"
          name="email"
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
        <FormField
          label="Alternate Phone Number"
          name="alternatePhone"
          inputMode="numeric"
          disabled={!isEditing || loading}
          modal
        />

        <FormRadio
          label="Gender"
          name="gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Prefer Not to Say", value: "prefer_not_to_say" },
          ]}
          disabled={!isEditing || loading}
          modal
        />

        {isEditing ? (
          <>
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
          </>
        ) : (
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            {loading ? (
              <Spinner as="span" size="sm" animation="border" />
            ) : (
              <>Edit</>
            )}
          </Button>
        )}

        <FormState />
      </FormikForm>
      {/* <p>
        <strong>DOB:</strong> {profile?.dob}
      </p>
      <p>
        <strong>Password:</strong> ********
      </p> */}
    </>
  );
};

export default AccountDetailsSection;