import Container from "react-bootstrap/Container";
import EquipmentList from "../../containers/equipemts/EquipmentList";

import equipments from "./fixtures/equipmentsData";

const EquipmentsPage = () => {
  return (
    <Container>
      <EquipmentList data={equipments} />
    </Container>
  );
};

export default EquipmentsPage;
