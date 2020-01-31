import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Filter(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <input
            type="checkbox"
            value="manager"
            
            onChange={({ target }) => props.onChange(target.checked)}
          />
          <label className="m-1">Display Managers Only</label>
        </div>
      </div>
    </div>
  );
}
