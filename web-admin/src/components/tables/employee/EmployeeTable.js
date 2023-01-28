import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { employeeColumn } from "../columns/employeeColumns";
import { fetchAllEmployees } from "../../../api/Employee";
import { TableLoader } from "../../../skeletons";
import "../../../assets/css/usertable.css";
import Table from "./Table";
import RenderTable from "./RenderTable";

const EmployeeTable = () => {
  let history = useHistory();
  const headers = useMemo(() => employeeColumn, []);
  const { data, status } = useQuery("allEmployees", fetchAllEmployees);
  const [searchUser, setSearchUser] = useState("");
  const [disabledSearch, setDisabledSearch] = useState(true);
  const [showall, setShowall] = useState(false);

  //FILTER USER
  const userFilter = (user) => {
    return user.fullname.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1;
  };
  //HANDLE CHANGE
  const handleChange = (e) => {
    setShowall(e.target.checked);
    if (showall) {
      setDisabledSearch(true);
      setSearchUser("");
    } else {
      setDisabledSearch(false);
    }
  };

  return (
    <>
      <div className="table__header">
        <p className="table_header"> All Employees</p>
        <Button
          variant="primary"
          className="btn-registration"
          onClick={() => {
            history.push("/employee-registration");
          }}
        >
          Registration
        </Button>
      </div>
      <div className="search__container">
        <input
          disabled={disabledSearch}
          className="table__search"
          type="text"
          placeholder="Search by full name..."
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <input
          type="checkbox"
          className="search__checkbox"
          defaultChecked={showall}
          onChange={handleChange}
        />
        <span>Enable searching</span>
      </div>

      {status === "loading" &&
        Array(12)
          .fill("")
          .map((e, i) => (
            <TableLoader
              key={i}
              style={{ opacity: Number(2 / i).toFixed(1) }}
            />
          ))}
      {status === "error" && <div>error fetchingg </div>}
      {status === "success" && (
        <Table
          headers={headers}
          data={data}
          filter={userFilter}
          status={status}
          RenderTable={RenderTable}
          totalResults={data.length}
          showall={showall}
        />
      )}
    </>
  );
};

export default EmployeeTable;
