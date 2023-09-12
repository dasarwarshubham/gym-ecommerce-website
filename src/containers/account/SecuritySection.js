import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import useInitialLoad from "../../hooks/useInitialLoad";
import { Button, Spinner } from "react-bootstrap";
import {
  FormikForm,
  FormField,
  FormButton
} from "../../components/form";

import * as Yup from "yup";

import {
  // selectAccountData,
  // selectAccountError,
  selectAccountLoading,
} from "../../redux/account/accountSelectors";
import { updateAccountDetails } from "../../redux/account/accountActions";
import { LOGIN } from "../../constants/routes";
import { logoutAllUser, changeUserPassword } from "../../redux/account/accountActions";


const SecuritySection = () => {
  const loading = useSelector(selectAccountLoading);
  // const profile = useSelector(selectAccountData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { initialLoad } = useInitialLoad(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState()

  // eslint-disable-next-line
  const handleClick = (values, setSubmitting, resetForm) => {
    dispatch(updateAccountDetails(values))
      .unwrap()
      .then((response) => {
        //update initialvalues with updated values from response after successful form submission
        resetForm({ values: response });
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

  const handleLogoutAll = async () => {
    dispatch(logoutAllUser()).then(() => {
      navigate(LOGIN);
    });
  };

  const handleChangePassword = async (values, setSubmitting, resetForm) => {
    setError(null);
    delete values['confirm_new_password']
    await dispatch(changeUserPassword(values))
      .unwrap()
      .then(async () => {
        await handleLogoutAll();
      }).catch((error) => {
        console.log(error);
        setError(error);
      }).finally(() => {
        setSubmitting(false);
        resetForm();
      })
  };


  if (loading) {
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
      {error && <p className="text-danger">{error}</p>}
      {!isEditing ? (
        <>
          <FormikForm
            initialValues={{
              password: "********"
            }}
            enableReinitialize
            onSubmit={() => setIsEditing(true)}
          >
            {error && <p className="text-danger">{JSON.stringify(error)}</p>}
            <FormField
              label="Password"
              type="password"
              name="password"
              value="********"
              modal
              disabled={true}
            />
            <Button variant="primary" onClick={() => setIsEditing(true)}>
              <>Change Password</>
            </Button>
          </FormikForm >
        </>

      ) : (
        <FormikForm
          initialValues={{
            old_password: "",
            new_password: "",
            confirm_new_password: "",
          }}
          validationSchema={Yup.object().shape({
            old_password: Yup.string()
              .label("Password")
              .required('Password is required')
              .min(8, 'Your password is too short.'),
            new_password: Yup.string()
              .label("Password")
              .required('Password is required')
              .min(8, 'Your password is too short.'),
            confirm_new_password: Yup.string().required("Please type your password again")
              .oneOf([Yup.ref('new_password')], 'Passwords must match')
          })
          }
          onSubmit={async (values, { setSubmitting, resetForm }) =>
            handleChangePassword(values, setSubmitting, resetForm)
          }
        >
          {error && <p className="text-danger">{JSON.stringify(error)}</p>}
          <FormField
            label="Enter Old Password"
            type="password"
            name="old_password"
            modal
          />
          <FormField
            label="Enter New Password"
            type="password"
            name="new_password"
            modal
          />
          <FormField
            label="Confirm New Password"
            type="password"
            name="confirm_new_password"
            modal
          />

          <div className="mb-4">
            <Button
              className="me-3"
              variant="danger"
              onClick={() => !loading && setIsEditing(false)}
            >
              Cancel
            </Button>
            <FormButton>Submit</FormButton>
          </div>
          {/* <div className="d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4">
          <FormButton>Change</FormButton>
        </div> */}
        </FormikForm>
      )}
      <hr />
      <Button variant="danger" title="logout" onClick={handleLogoutAll}>
        {loading ? (
          <Spinner as="span" size="sm" animation="border" />
        ) : (
          <>Logout from all devices</>
        )}
      </Button>
    </>
  );
};

export default SecuritySection;
