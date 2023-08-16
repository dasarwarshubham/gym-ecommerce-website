import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  const Styles = {
    width: "100%",
    minHeight: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={Styles}>
      <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
