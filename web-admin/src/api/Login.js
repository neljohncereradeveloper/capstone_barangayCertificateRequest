import Axios from "axios";

// Axios.defaults.withCredentials = true;
//FETCH ALL REQUEST
export const loginAdmin = async ({ username, password }) => {
  const res = await Axios.post("http://localhost:3001/api/admin/login", {
    username,
    password,
  });
  return res;
};
