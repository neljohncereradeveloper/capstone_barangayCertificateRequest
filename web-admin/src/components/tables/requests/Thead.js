import React from "react";

function Thead({ headers }) {
  return (
    <>
      <tr>
        {headers.map((header, key) => {
          return (
            <>
              <th key={key}>{header.Title}</th>
            </>
          );
        })}
      </tr>
    </>
  );
}

export default Thead;
