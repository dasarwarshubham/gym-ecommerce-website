import { Col, Row } from "react-bootstrap";
import AddressCard from "../../components/cards/AddressCard";

const AddressSection = () => {
  const addresses = [
    {
      id: 1,
      fullName: "John Doe",
      streetAddress: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "United States",
      phoneNumber: "555-123-4567",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      streetAddress: "456 Elm St",
      city: "Somewhere",
      state: "NY",
      zipCode: "54321",
      country: "United States",
      phoneNumber: "555-987-6543",
    },
    // Add more address items as needed
  ];

  return (
    <Row>
      {addresses.map((address) => (
        <Col key={address.id} md={6}>
          <AddressCard address={address} />
        </Col>
      ))}
    </Row>
  );
};

export default AddressSection;
