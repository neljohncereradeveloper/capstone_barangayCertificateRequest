import React from "react";
import { useHistory } from "react-router-dom";

function BodyHeader() {
  let history = useHistory();
  return (
    <>
      <div className="request__container">
        <div
          className="request__link req__all"
          onClick={() => {
            history.push("/reports/approve");
          }}
        >
          Approve
        </div>
        <div
          className="request__link req__all"
          onClick={() => {
            history.push("/reports/disapprove");
          }}
        >
          Disapprove
        </div>
      </div>
    </>
  );
}

export default BodyHeader;
