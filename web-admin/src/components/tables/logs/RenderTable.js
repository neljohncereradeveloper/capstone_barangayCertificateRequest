import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

function RenderTable({ headers, currentItems }) {
  return (
    <div className="logsTable">
      <table>
        <thead>
          <Thead headers={headers} />
        </thead>
        <tbody>
          <Tbody data={currentItems} />
        </tbody>
      </table>
    </div>
  );
}

export default RenderTable;
