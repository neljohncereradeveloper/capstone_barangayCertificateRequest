import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

function RenderTable({ headers, currentItems, filter }) {
  return (
    <div className="table">
      <table>
        <thead>
          <Thead headers={headers} />
        </thead>
        <tbody>
          <Tbody employeesData={currentItems} filter={filter} />
        </tbody>
      </table>
    </div>
  );
}

export default RenderTable;
