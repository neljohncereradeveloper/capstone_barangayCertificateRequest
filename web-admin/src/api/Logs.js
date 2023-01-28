import Axios from "axios";

export const fetchRequestLogs = async () => {
  const data = await Axios.get("http://localhost:3001/api/logs/logsrequests");
  return data.data.result;
};

export const fetchUserLogs = async () => {
  const data = await Axios.get("http://localhost:3001/api/logs/logsrequests");
  return data.data.result;
};
