import React from "react";
import { useParams } from "react-router-dom";

const EquipmentDetailsPage = (props) => {
  let { productId } = useParams();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        border: "1px solid hotpink",
      }}
    >
      EquipmentDetailsPage {productId}
    </div>
  );
};

export default EquipmentDetailsPage;
