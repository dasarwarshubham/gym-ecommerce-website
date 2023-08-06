import React from "react";
import { Link } from "react-router-dom";

const EquipmentsPage = () => {
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
        <li key={`equipment-1`}>
          <Link to="/equipments/1">Equipment 1</Link>
        </li>
        <li key={`equipment-2`}>
          <Link to="/equipments/2">Equipment 2</Link>
        </li>
        <li key={`equipment-3`}>
          <Link to="/equipments/3">Equipment 3</Link>
        </li>
        <li key={`equipment-4`}>
          <Link to="/equipments/4">Equipment 4</Link>
        </li>
        <li key={`equipment-5`}>
          <Link to="/equipments/5">Equipment 5</Link>
        </li>
        <li key={`equipment-6`}>
          <Link to="/equipments/6">Equipment 6</Link>
        </li>
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

export default EquipmentsPage;
