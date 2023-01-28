import React from "react";
import { v4 as uudiv4 } from "uuid";

function Thead({ headers }) {
  return (
    <>
      <tr>
        {headers.map((header) => {
          return (
            <>
              <th key={uudiv4()}>{header.Title}</th>
            </>
          );
        })}
      </tr>
    </>
  );
}

export default Thead;
