import Axios from "axios";

//FETCH approve reports
export const fetchApproveReports = async ({ queryKey }) => {
  const [, { fromDate, toDate }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/reports/approve/${fromDate}&${toDate}&status=${"Approve"}`
  );
  return data;
};

//FETCH disapprove reports
export const fetchDisapproveReports = async ({ queryKey }) => {
  const [, { fromDate, toDate }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/reports/approve/${fromDate}&${toDate}&status=${"Disapprove"}`
  );
  return data;
};
