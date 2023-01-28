import Axios from "axios";
//FETCH ALL USERS
export const fetchAllUsers = async () => {
  const data = await Axios.get("http://localhost:3001/api/user/view");
  return data.data;
};
//FETCH SPECIFIC USER
export const fetchUser = async ({ queryKey }) => {
  console.log("user query key :", queryKey);
  const [, { id }] = queryKey;
  const data = await Axios.get(`http://localhost:3001/api/user/${id}`);
  return data.data;
};
//UPDATE USER
export const UpdateUser = async ({ id, body }) => {
  const {
    barangayID_no,
    fullName,
    age,
    gender,
    birthDate,
    birthPlace,
    civilStatus,
    address,
    username,
    household_ID,
    householdrole,
  } = body;
  const res = await Axios.put(
    `http://localhost:3001/api/user/update/${id}`,
    {
      barangayID_no,
      fullName,
      age,
      gender,
      birthDate,
      birthPlace,
      civilStatus,
      address,
      username,
      household_ID,
      householdrole,
    },
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};
//DELETE USER
export const deleteUser = async ({ id, barangayID_no }) => {
  const res = await Axios.put(
    `http://localhost:3001/api/user/delete/${id}`,
    {
      barangayID_no: barangayID_no,
    },
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};
//INSERT USER
export const insertUser = async ({ state }) => {
  const res = await Axios.post(
    "http://localhost:3001/api/user/create",
    {
      barangayID_no: state.barangayID_no,
      houseHoldID_no: state.houseHoldID_no,
      houseHold_role: state.houseHold_role,
      fullName: state.fullName,
      age: state.age,
      gender: state.gender,
      birthDate: state.birthDate,
      birthPlace: state.birthPlace,
      civilStatus: state.civilStatus,
      address: state.address,
      userName: state.userName,
      password: state.password,
    },
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};
