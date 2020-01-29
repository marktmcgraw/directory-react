import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Table(props) {
  return (
    <div className="container-fluid">
      <div className="row bg-lightgray text-black p-1">
        <div className="col-1">ID</div>
        <div className="col-2">Name</div>
        <div className="col-3">Department</div>
        <div className="col-4">Title</div>
        <div className="col-5">Salary</div>
        <div className="col-6">E-mail</div>
      </div>
    </div>
  );
}
