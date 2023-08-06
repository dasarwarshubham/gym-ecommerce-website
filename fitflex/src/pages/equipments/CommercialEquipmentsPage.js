import React from "react";
import { Link } from "react-router-dom";

const CommercialEquipmentsPage = (props) => {
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
      <ul>
        <li key={`equipment-7`}>
          <Link to="/equipments/7">Equipment 7</Link>
        </li>
        <li key={`equipment-8`}>
          <Link to="/equipments/8">Equipment 8</Link>
        </li>
        <li key={`equipment-9`}>
          <Link to="/equipments/9">Equipment 9</Link>
        </li>
        <li key={`equipment-10`}>
          <Link to="/equipments/10">Equipment 10</Link>
        </li>
        <li key={`equipment-11`}>
          <Link to="/equipments/11">Equipment 11</Link>
        </li>
        <li key={`equipment-12`}>
          <Link to="/equipments/12">Equipment 12</Link>
        </li>
      </ul>
    </div>
  );
};

export default CommercialEquipmentsPage;
