import React from "react";
import moment from "moment";

const Tbody = ({ data }) => {
  const { result } = data.data;
  console.log("result", result);
  return (
    <>
      <tbody>
        {result.map((req, key) => (
          <>
            <tr key={key}>
              <td>{moment(req.r_date).format("MMM D YYYY")}</td>
              <td>{req.fullName}</td>
              <td>{req.barangayID_no}</td>
              <td>{req.certificatename}</td>
              <td>{req.purpose}</td>
            </tr>
          </>
        ))}
      </tbody>
    </>
  );
};

export default Tbody;
