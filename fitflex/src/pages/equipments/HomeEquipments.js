import Container from "react-bootstrap/Container";
import EquipmentList from "../../containers/equipemts/EquipmentList";

import equipments from "./fixtures/equipmentsData";

const HomeEquipmentsPage = () => {
  return (
    <Container>
      <EquipmentList data={equipments} />
    </Container>
  );
};

export default HomeEquipmentsPage;
