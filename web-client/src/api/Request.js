import Axios from "axios";

export const fetchUserRequestRecords = async ({ queryKey }) => {
  const [, { userID }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/client/request/${userID}`
  );
  return data.data;
};
