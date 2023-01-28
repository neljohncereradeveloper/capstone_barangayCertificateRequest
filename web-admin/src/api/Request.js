import Axios from "axios";

//FETCH ALL REQUEST
export const fetchAllRequest = async () => {
  const data = await Axios.get("http://localhost:3001/api/request/total");
  return data.data.result;
};
//FETCH APPROVE REQUEST
export const fetchApproveRequest = async () => {
  const approve = "Approve";
  const data = await Axios.get(`http://localhost:3001/api/request/${approve}`);
  return data.data.result;
};
//FETCH DISAPPROVE
export const fetchDisapproveRequest = async () => {
  const disapprove = "Disapprove";
  const data = await Axios.get(
    `http://localhost:3001/api/request/${disapprove}`
  );
  return data.data.result;
};
//FETCH PENDING REQUEST
export const fetchPendingRequest = async () => {
  const pending = "pending";
  const data = await Axios.get(`http://localhost:3001/api/request/${pending}`);
  return data.data.result;
};
//UPDATE TO APPROVE OR TO DISAPPROVE REQUEST
export const updateToApproveDisapprove = async ({
  employeeID,
  status,
  pendingRequest,
  disapproveReason,
}) => {
  console.log("disapproveReason : ", disapproveReason);
  const res = await Axios.put(
    `http://localhost:3001/api/request/status/update/${pendingRequest.requestID}`,
    {
      employeeID: employeeID,
      status: status,
      barangayID_no: pendingRequest.barangayID_no,
      disapproveReason: disapproveReason,
    }
  );
  return res;
};
