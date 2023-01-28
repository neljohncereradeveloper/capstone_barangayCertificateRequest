import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

function RenderTable({ headers, currentItems }) {
  return (
    <div className="reques__table">
      <table>
        <thead>
          <Thead headers={headers} />
        </thead>
        <tbody>
          <Tbody requestsData={currentItems} />
        </tbody>
      </table>
    </div>
  );
}

export default RenderTable;
