import React from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col, Image, Button, Table } from "react-bootstrap";
import Ratings from "../../components/ratings/Ratings";

import equipmentData from "./fixtures/equipmentsData";

const EquipmentDetailsPage = () => {
  const { productId } = useParams();
  const equipment = equipmentData.find(
    (item) => item.id.toString() === productId
  );

  if (!equipment) {
    return <div>Equipment not found</div>;
  }

  return (
    <div className="equipment-details-page">
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Image
              src={equipment?.image}
              alt={equipment?.name}
              className="equipment-image img-fluid w-100"
            />
          </Col>
          <Col md={6}>
            <h1>{equipment?.name}</h1>
            <Table bordered>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>{equipment?.price}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{equipment?.type}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>
                    <Ratings ratings={equipment?.rating} />
                  </td>
                </tr>
                <tr>
                  <td>Review</td>
                  <td>{equipment?.reviews}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{equipment?.description}</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary">Add to Cart</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EquipmentDetailsPage;
