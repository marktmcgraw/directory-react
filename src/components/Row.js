import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Row({ id, name, department, title, salary, email }) {
  return (
    <div className="container-fluid">
      <div className="row row-border-bottom bg-lightgray">
        <div className="col-1">{id}</div>
        <div className="col-2">{name}</div>
        <div className="col-3">{department}</div>
        <div className="col-4">{title}</div>
        <div className="col-5">{salary}</div>
        <div className="col-6">{email}</div>
      </div>
    </div>
  );
}
