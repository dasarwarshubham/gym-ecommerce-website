import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { LOGIN } from "../../constants/routes";
import { logoutUser } from "../../redux/auth/authActions";
import { Button, Spinner } from "react-bootstrap";

const ProfilePage = ({ loading, isAuthenticated, logout }) => {
  let navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <>
      <Button
        variant="danger"
        title="logout"
        onClick={() => {
          logout();
          navigate(LOGIN);
        }}
      >
        {loading ? (
          <Spinner as="span" size="sm" animation="border" />
        ) : (
          <>Logout</>
        )}
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
          border: "1px solid hotpink",
        }}
      >
        ProfilePage
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
