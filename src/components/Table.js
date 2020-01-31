import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Table(props) {
  return (
    <div className="container-fluid">
      <div className="row bg-lightgray text-black p-1">
        <div className="col-1 table-header">ID</div>
        <div className="col-3 table-header">Name</div>
        <div className="col-3 table-header">Department</div>
        <div className="col-2 table-header">Title</div>
        <div className="col-1 table-header">Salary</div>
        <div className="col-2 table-header">E-mail</div>
      </div>
    </div>
  );
}
