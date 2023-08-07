import { Row, Col } from "react-bootstrap";
import EquipmentCard from "../../components/cards/EquipmentCard";

const EquipmentList = ({ data }) => {
  return (
    <Row className="g-5 my-5 py-5">
      {data.map((equipment) => (
        <Col xs={6} md={4} lg={3} key={`equipment-${equipment.id}`}>
          <EquipmentCard data={equipment} />
        </Col>
      ))}
    </Row>
  );
};

export default EquipmentList;
