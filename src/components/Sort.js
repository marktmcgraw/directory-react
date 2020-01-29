import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Sort(props) {
  return (
    <div className="container-fluid">
      <div className="row bg-lightgray text-black p-1">
        <div className="col-4 mb-1 mx-1">Sort by </div>
      </div>
      <div className="row">
        <div className="col-4">
          <select
            className="form-control "
            onChange={({ target }) => props.onChange(target.value)}
          >
            <option> Department </option>
          </select>
        </div>
      </div>
    </div>
  );
}
