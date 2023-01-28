import React from "react";

function Tbody({ employeesData, filter }) {
  return (
    <>
      {employeesData.filter(filter).map((user) => (
        <tr key={user.employeeID}>
          <td>{user.idnumber}</td>
          <td>{user.fullname}</td>
          <td>{user.contact}</td>
          <td>{user.address}</td>
        </tr>
      ))}
    </>
  );
}

export default Tbody;
