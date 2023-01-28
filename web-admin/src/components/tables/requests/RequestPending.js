import React from "react";
import { useQuery, useMutation } from "react-query";
import {
  fetchPendingRequest,
  updateToApproveDisapprove,
} from "../../../api/Request";
import moment from "moment";
import { pendingClickTrueAction } from "../../../redux";
import { connect } from "react-redux";
import { RequestPage } from "../../../pages";
import { CheckCircleOutlineIcon, BlockIcon } from "../../../assets/icons";

const RequestPendingTable = (props) => {
  //USERQUEURY
  const { data, status, refetch } = useQuery("pending", fetchPendingRequest, {
    refetchOnWindowFocus: false,
  });
  //USEMUTATION APPROVE REQUEST
  const mutation = useMutation(updateToApproveDisapprove, {
    onSuccess: () => {
      props.pendingClickTrueAction();
      refetch();
    },
  });
  //APPROVE REQUEST
  const approveRequest = async (pendingRequest) => {
    let approve = window.confirm("Do yu want to Approve this request?");
    if (approve) {
      const status = "approve";
      try {
        await mutation.mutateAsync({
          employeeID: props.userAccount.employeeID,
          status,
          pendingRequest,
        });
      } catch (e) {}
    }
  };
  //DISAPPROVE REQUEST
  const disApproveRequest = async (pendingRequest) => {
    let disapprove = window.confirm("Do yu want to Disapprove this request?");
    if (disapprove) {
      const status = "disapprove";
      let disapproveReason = window.prompt("Reason for Disapprove..");
      if (disapproveReason) {
        console.log("request page disapproveReason", disapproveReason);
        try {
          await mutation.mutateAsync({
            employeeID: props.userAccount.employeeID,
            status,
            pendingRequest,
            disapproveReason,
          });
        } catch (e) {}
      }
    }
  };

  return (
    <>
      <RequestPage />
      <div className="request__page">
        <p className="table_header">Pending Requests</p>
        {status === "loading" && <p>Loading ....</p>}
        {status === "error" && <p>error fetching </p>}
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Brgy. ID</th>
              <th>Full Name</th>
              <th>Certificate</th>
              <th>Purpose</th>
              <th className="column__status">Status</th>
              <th className="th_action">Action</th>
            </tr>
          </thead>
          {status === "success" &&
            data.map((pendingRequest) => {
              return (
                <tbody key={pendingRequest.requestID}>
                  <tr>
                    <td>
                      {moment(pendingRequest.r_date).format("MMM D YYYY")}
                    </td>
                    <td>
                      {moment(pendingRequest.r_time, "HH:mm:ss").format("LT")}
                    </td>
                    <td>{pendingRequest.barangayID_no}</td>
                    <td>{pendingRequest.fullName}</td>
                    <td>{pendingRequest.certificateName}</td>
                    <td>{pendingRequest.purpose}</td>
                    <td className="row__status-pending">
                      {pendingRequest.status}
                    </td>
                    <td className="td_button">
                      <button onClick={() => approveRequest(pendingRequest)}>
                        <CheckCircleOutlineIcon />
                      </button>
                      <button
                        className="btn__disApprove"
                        onClick={() => disApproveRequest(pendingRequest)}
                      >
                        <BlockIcon />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};

//redux set up
const mapStateToProps = (state) => {
  return {
    requestCount: state.user.requestCount,
    isPendingButtonClick: state.user.isPendingButtonClick,
    userAccount: state.user.userAccount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pendingClickTrueAction: () => dispatch(pendingClickTrueAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestPendingTable);
