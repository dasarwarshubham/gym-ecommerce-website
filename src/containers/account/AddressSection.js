import { Col, Row } from "react-bootstrap";
import AddressCard from "../../components/cards/AddressCard";

import { useSelector } from "react-redux";
import {
  selectAccountAddress,
  selectAccountError,
  selectAccountLoading,
} from "../../redux/account/accountSelectors";

// import useInitialLoad from "../../hooks/useInitialLoad";
import { Spinner } from "react-bootstrap";
import AddAddressCard from "../../components/cards/AddAddressCard";

const AddressSection = () => {
  const addresses = useSelector(selectAccountAddress);
  const loading = useSelector(selectAccountLoading);
  const error = useSelector(selectAccountError);
  // const { initialLoad } = useInitialLoad(addresses);


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
      <Row className="g-4">
        {addresses?.length > 0 &&
          addresses?.map((address) => (
            <Col key={`address-${address.id}`} md={6}>
              <AddressCard address={address} />
            </Col>
          ))}
        <Col key={`add-address`} md={6}>
          <AddAddressCard />
        </Col>
      </Row>
    </>
  );
};

export default AddressSection;
