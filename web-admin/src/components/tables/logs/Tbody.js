import React from "react";
import moment from "moment";

function Tbody({ data }) {
  return (
    <>
      {data.map((log) => (
        <tr key={log.id}>
          <td>{moment(log.l_Date).format("MMM D YYYY")}</td>
          <td>{moment(log.l_time, "HH:mm:ss").format("LT")}</td>
          <td>{log.fullname}</td>
          <td>{log.barangayID_no}</td>
          <td>{log.certificatename}</td>
          <td>{log.purpose}</td>
          <td>{log.status}</td>
          <td>{log.employee}</td>
        </tr>
      ))}
    </>
  );
}

export default Tbody;
