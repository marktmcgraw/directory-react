import React, { useState } from "react";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Table from "./components/Table";
import Row from "./components/Row";
import "./App.css";

import { employees } from "./employeeData";

export default function App() {
  const [sortBy, setSortBy] = useState("ID");
  const [isFiltered, setIsFiltered] = useState(false);

  function handleSortOnChange(value) {
    setSortBy(value);
  }
  function handleFilterCheck(checked) {
    return checked ? setIsFiltered(true) : setIsFiltered(false);
  }

  function render() {
    if (sortBy === "ID") {
      if (isFiltered) return filter();
      else return sort("ID");
    }
    if (sortBy === "Department") {
      if (isFiltered) return filter();
      else return sort("Department");
    }
    if (sortBy === "Name") {
      if (isFiltered) return filter();
      else return sort("Name");
    }
  }

  function filter() {
    let filteredArray = [];
    filteredArray = employees.filter(
      employees => employees.title.toLocaleLowerCase().search("manager") >= 0
    );
    return filteredArray.map(employees => (
      <Row
        id={employees.id}
        key={employees.id}
        name={employees.name}
        department={employees.department}
        title={employees.title}
        salary={employees.salary}
        email={employees.email}
      />
    ));
  }

  function sort(sortBy) {
    let sortedArray = [];
    switch (sortBy) {
      case "Department":
        sortedArray = employees.sort((a, b) =>
          a.department > b.department ? 1 : b.department > a.department ? -1 : 0
        );
        break;
      case "Name":
        sortedArray = employees.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
      case "ID":
        sortedArray = employees.sort((a, b) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        break;
      default:
    }

    return sortedArray.map(employees => (
      <Row
        id={employees.id}
        key={employees.id}
        name={employees.name}
        department={employees.department}
        title={employees.title}
        salary={employees.salary}
        email={employees.email}
      />
    ));
  }
  return (
    <div className="App">
      <h1 className="App-header">Employee Directory</h1>
      <div className="container-fluid">
        <Sort onChange={handleSortOnChange} />
        <Filter onChange={handleFilterCheck} />
        <Table />
        {render()}
      </div>
    </div>
  );
}
