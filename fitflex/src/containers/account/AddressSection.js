import { Col, Row } from "react-bootstrap";
import AddressCard from "../../components/cards/AddressCard";

import { useSelector } from "react-redux";
import {
  selectAccountAddress,
  selectAccountLoading,
} from "../../redux/account/accountSelectors";

// import useInitialLoad from "../../hooks/useInitialLoad";
import { Spinner } from "react-bootstrap";
import AddAddressCard from "../../components/cards/AddAddressCard";

const AddressSection = () => {
  const addresses = useSelector(selectAccountAddress);
  const loading = useSelector(selectAccountLoading);
  // const { initialLoad } = useInitialLoad(addresses);

  // const addresses = [
  //   {
  //     id: 1,
  //     fullName: "John Doe",
  //     streetAddress: "123 Main St",
  //     city: "Anytown",
  //     state: "CA",
  //     zipCode: "12345",
  //     country: "United States",
  //     phoneNumber: "555-123-4567",
  //   },
  //   {
  //     id: 2,
  //     fullName: "Jane Smith",
  //     streetAddress: "456 Elm St",
  //     city: "Somewhere",
  //     state: "NY",
  //     zipCode: "54321",
  //     country: "United States",
  //     phoneNumber: "555-987-6543",
  //   },
  //   // Add more address items as needed
  // ];

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
      <Row className="g-4">
        {addresses?.map((address) => (
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
