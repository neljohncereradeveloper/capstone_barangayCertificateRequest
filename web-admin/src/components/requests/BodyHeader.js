import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function BodyHeader(props) {
  let history = useHistory();
  const { requestCount } = props;

  return (
    <>
      <div className="request__container">
        <div
          className="request__link req__all"
          onClick={() => {
            history.push("/requests/all");
          }}
        >
          All requests
        </div>
        <div
          className="request__link req__pending"
          onClick={() => {
            history.push("/requests/pending");
          }}
        >
          Pendings <span>({requestCount})</span>
        </div>
        <div
          className="request__link req__disApprove"
          onClick={() => {
            history.push("/requests/disapprove");
          }}
        >
          Disapprove requests
        </div>
        <div
          className="request__link req__approve"
          onClick={() => {
            history.push("/requests/approve");
          }}
        >
          Approve requests
        </div>
      </div>
    </>
  );
}

//redux set up
const mapStateToProps = (state) => {
  return {
    requestCount: state.user.requestCount,
  };
};
export default connect(mapStateToProps, null)(BodyHeader);
