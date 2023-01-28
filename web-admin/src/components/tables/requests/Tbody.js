import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { PrintIcon } from "../../../assets/icons";

function Tbody({ requestsData }) {
  let history = useHistory();
  return (
    <>
      {requestsData.map((request) => (
        <tr key={request.requestID}>
          <td>{moment(request.r_date).format("MMM D YYYY")}</td>
          <td>{moment(request.r_time, "HH:mm:ss").format("LT")}</td>
          <td>{request.barangayID_no}</td>
          <td>{request.fullName}</td>
          <td>{request.certificateName}</td>
          <td>{request.purpose}</td>
          <td>{request.payment}</td>
          <td
            className={
              request.status === "Pending"
                ? "row__status-pending"
                : request.status === "Approve"
                ? "row__status-approve"
                : request.status === "Disapprove"
                ? "row__status-disapprove"
                : null
            }
          >
            {request.status}
          </td>
          <td>
            <button
              className="btn btn-secondary print"
              onClick={() => {
                history.push({
                  pathname: "/print/request",
                  state: { request },
                });
              }}
            >
              <PrintIcon />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tbody;
