import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import {employees} from "../employeeData";

export default function Row({ id, name, department, title, salary, email }) {
  return (
    <div className="container-fluid">
      <div className="row bg-lightgray">
        <div className="col-1 row-data">{id}</div>
        <div className="col-3 row-data">{name}</div>
        <div className="col-3 row-data">{department}</div>
        <div className="col-2 row-data">{title}</div>
        <div className="col-1 row-data">{salary}</div>
        <div className="col-2 row-data">{email}</div>
      </div>
    </div>
  );
}
