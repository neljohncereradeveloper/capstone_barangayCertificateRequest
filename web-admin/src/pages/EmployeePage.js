import React from "react";
import { Topbar } from "../layout";
import { EmployeeTable } from "../components/tables";
import "../assets/css/userpage.css";

function EmployeePage() {
  return (
    <>
      <Topbar page="Employee Records" />
      <EmployeeTable />
    </>
  );
}

export default EmployeePage;
