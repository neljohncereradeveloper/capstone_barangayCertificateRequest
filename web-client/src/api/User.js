import Axios from "axios";

export const fetchUserInformation = async ({ queryKey }) => {
  const [, { userID }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/user/client/info/${userID}`
  );
  return data.data;
};

export const fetchUserHousehold = async ({ queryKey }) => {
  const [, { userID }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/user/household/${userID}`
  );
  return data.data;
};

//UPDATE USER
export const editUser = async ({ id, body }) => {
  const { fullName, age, gender, birthDate, civilStatus, address } = body;
  const res = await Axios.put(
    `http://localhost:3001/api/client/update/${id}`,
    {
      fullName,
      age,
      gender,
      birthDate,
      address,
      civilStatus,
    },
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};
