import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const useInitialLoad = (data) => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad && data) {
      if (Array.isArray(data) && data.length > 0) {
        setInitialLoad(false);
      } else if (!Array.isArray(data) && data !== null) {
        setInitialLoad(false);
      }
    }
  }, [initialLoad, data]);

  const renderLoader = () => {
    if (initialLoad) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "65vh" }}
        >
          <Spinner animation="border" variant="dark" />
          loading...
        </div>
      );
    }
    return null;
  };

  return { initialLoad, renderLoader };
};

export default useInitialLoad;
